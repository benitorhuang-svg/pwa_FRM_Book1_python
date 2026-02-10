import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';
import { clientsClaim } from 'workbox-core';

// 1. PWA 核心與資源快取
cleanupOutdatedCaches();
precacheAndRoute(self.__WB_MANIFEST);
self.skipWaiting();
clientsClaim();

// 2. COOP/COEP 標頭注入邏輯 (原 coi-serviceworker.js)
// 這能確保 SharedArrayBuffer 在跨域環境下正常運作 (Pyodide 需求)
self.addEventListener("fetch", (event) => {
    const r = event.request;

    // 處理瀏覽器對某些跨域資源的特殊要求
    if (r.cache === "only-if-cached" && r.mode !== "same-origin") {
        return;
    }

    const headerHooks = {
        "Cross-Origin-Embedder-Policy": "require-corp",
        "Cross-Origin-Opener-Policy": "same-origin",
    };

    // 對於 CDN 資源 (jsdelivr, unpkg)，我們必須確保 credentials 是 omit 或與後端一致
    const requestToFetch = r.url.includes("cdn.jsdelivr.net") || r.url.includes("unpkg.com")
        ? new Request(r, { credentials: "omit" })
        : r;

    event.respondWith(
        fetch(requestToFetch)
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
            .catch((e) => {
                // 出錯時回退到原始請求
                return fetch(r);
            })
    );
});
