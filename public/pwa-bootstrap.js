(function () {
  var host = location.hostname;
  var isLocal =
    host === "localhost" ||
    host === "127.0.0.1" ||
    host === "[::1]";

  window.__hyperofficePwa = { deferredPrompt: null };

  window.addEventListener("beforeinstallprompt", function (event) {
    event.preventDefault();
    window.__hyperofficePwa.deferredPrompt = event;
    window.dispatchEvent(new CustomEvent("hyperoffice-pwa-ready"));
  });

  window.addEventListener("appinstalled", function () {
    window.__hyperofficePwa.deferredPrompt = null;
    window.dispatchEvent(new CustomEvent("hyperoffice-pwa-installed"));
  });

  if (!("serviceWorker" in navigator)) return;

  if (isLocal) {
    navigator.serviceWorker.getRegistrations().then(function (regs) {
      regs.forEach(function (reg) {
        reg.unregister();
      });
    });
    return;
  }

  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/sw.js", { scope: "/" })
      .then(function (registration) {
        registration.addEventListener("updatefound", function () {
          var worker = registration.installing;
          if (!worker) return;

          worker.addEventListener("statechange", function () {
            if (
              worker.state === "activated" &&
              navigator.serviceWorker.controller
            ) {
              caches.keys().then(function (keys) {
                keys.forEach(function (key) {
                  if (key !== "hyperoffice-pwa-v3") caches.delete(key);
                });
              });
            }
          });
        });
      })
      .catch(function () {});
  });
})();
