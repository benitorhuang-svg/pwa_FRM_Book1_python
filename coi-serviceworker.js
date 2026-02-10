/*! coi-serviceworker v0.1.7 - Guido Morrison - MIT License */
let coepCredentialless = false;

if (typeof window === 'undefined') {
    self.addEventListener("install", () => self.skipWaiting());
    self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

    self.addEventListener("message", (ev) => {
        if (!ev.data) {
            return;
        } else if (ev.data.type === "deregister") {
            self.registration
                .unregister()
                .then(() => {
                    return self.clients.matchAll();
                })
                .then((clients) => {
                    clients.forEach((client) => client.navigate(client.url));
                });
        }
    });

    self.addEventListener("fetch", function (event) {
        const r = event.request;
        if (r.cache === "only-if-cached" && r.mode !== "same-origin") {
            return;
        }

        const coep = coepCredentialless ? "credentialless" : "require-corp";
        const headerHooks = {
            "Cross-Origin-Embedder-Policy": coep,
            "Cross-Origin-Opener-Policy": "same-origin",
        };

        const useCred = coepCredentialless && r.mode === "no-cors" && r.destination !== "document";

        event.respondWith(
            fetch(r, {
                credentials: useCred ? "omit" : "include",
            })
                .then((response) => {
                    if (response.status === 0) {
                        return response;
                    }

                    const newHeaders = new Headers(response.headers);
                    Object.keys(headerHooks).forEach((key) => {
                        newHeaders.set(key, headerHooks[key]);
                    });

                    return new Response(response.body, {
                        status: response.status,
                        statusText: response.statusText,
                        headers: newHeaders,
                    });
                })
                .catch((e) => console.error(e))
        );
    });
} else {
    (function () {
        // You can customize the name of the service worker script here
        const scriptName = 'coi-serviceworker.js';

        // This is the reload logic
        const n = navigator;
        if (n.serviceWorker && n.serviceWorker.controller) {
            n.serviceWorker.controller.postMessage({
                type: "coep",
                value: coepCredentialless
            });
        } else {
            // Register the service worker
            if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
                // Only register if not localhost (Vite dev server handles headers usually)
                // But for consistency we can also register it. 
                // Let's rely on the simple check: if !crossOriginIsolated then we need it.
            }

            if (!window.crossOriginIsolated) {
                const reloadedBySelf = window.sessionStorage.getItem("coiReloadedBySelf");
                window.sessionStorage.removeItem("coiReloadedBySelf");

                if (reloadedBySelf) {
                    console.log("COOP/COEP Service Worker failed to register or activate.");
                    return;
                }

                n.serviceWorker.register(scriptName).then(
                    (registration) => {
                        console.log("COOP/COEP Service Worker registered");
                        window.sessionStorage.setItem("coiReloadedBySelf", "true");
                        window.location.reload();
                    },
                    (err) => {
                        console.error("COOP/COEP Service Worker registration failed: ", err);
                    }
                );
            }
        }
    })();
}
