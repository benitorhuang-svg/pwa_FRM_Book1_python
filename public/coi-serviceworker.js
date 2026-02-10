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
        // Determine the correct script path based on environment
        const getScriptPath = () => {
            const path = window.location.pathname;
            const base = '/pwa_FRM_Book1_python/';
            
            // If we're in the GitHub Pages subdirectory
            if (path.startsWith(base)) {
                return base + 'coi-serviceworker.js';
            }
            // For local development
            return '/coi-serviceworker.js';
        };

        const scriptName = getScriptPath();
        const n = navigator;

        // Check if we're already cross-origin isolated
        if (window.crossOriginIsolated) {
            console.log("✅ Cross-Origin Isolation is active");
            return;
        }

        console.log("⚠️ Cross-Origin Isolation not active, registering Service Worker...");

        // Check if service worker is supported
        if (!n.serviceWorker) {
            console.error("❌ Service Workers are not supported in this browser");
            return;
        }

        // If we have a controller, send message
        if (n.serviceWorker.controller) {
            n.serviceWorker.controller.postMessage({
                type: "coep",
                value: coepCredentialless
            });
            return;
        }

        // Prevent infinite reload loop
        const reloadedBySelf = window.sessionStorage.getItem("coiReloadedBySelf");
        
        if (reloadedBySelf) {
            window.sessionStorage.removeItem("coiReloadedBySelf");
            console.error("❌ COOP/COEP Service Worker failed to activate after reload");
            console.log("Please check:");
            console.log("1. Service Worker scope is correct");
            console.log("2. No conflicting Service Workers are registered");
            console.log("3. Browser supports SharedArrayBuffer");
            return;
        }

        // Register the service worker
        n.serviceWorker.register(scriptName, { scope: window.location.pathname.startsWith('/pwa_FRM_Book1_python/') ? '/pwa_FRM_Book1_python/' : '/' })
            .then((registration) => {
                console.log("✅ COOP/COEP Service Worker registered successfully");
                console.log("🔄 Reloading page to activate cross-origin isolation...");
                
                // Wait for the service worker to be active
                if (registration.active) {
                    window.sessionStorage.setItem("coiReloadedBySelf", "true");
                    window.location.reload();
                } else {
                    registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'activated') {
                                window.sessionStorage.setItem("coiReloadedBySelf", "true");
                                window.location.reload();
                            }
                        });
                    });
                }
            })
            .catch((err) => {
                console.error("❌ COOP/COEP Service Worker registration failed:", err);
                console.log("This may prevent Pyodide from working correctly");
            });
    })();
}
