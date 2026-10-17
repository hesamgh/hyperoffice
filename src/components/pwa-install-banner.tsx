"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Download, X } from "lucide-react";
import { PwaIosInstallHint } from "@/components/pwa-ios-install-hint";
import {
  PWA_INSTALLED_EVENT,
  PWA_READY_EVENT,
  canShowInstallBanner,
  dismissInstallBanner,
  isIosDevice,
  runPwaInstall,
  waitForDeferredPrompt,
} from "@/lib/pwa";
import { useDictionary } from "@/i18n/dictionary-provider";

export function PwaInstallBanner() {
  const { dictionary: dict } = useDictionary();
  const [visible, setVisible] = useState(false);
  const [installing, setInstalling] = useState(false);
  const [iosHintOpen, setIosHintOpen] = useState(false);

  const syncVisibility = useCallback(() => {
    setVisible(canShowInstallBanner());
  }, []);

  useEffect(() => {
    syncVisibility();

    const onReady = () => syncVisibility();
    const onInstalled = () => setVisible(false);

    window.addEventListener(PWA_READY_EVENT, onReady);
    window.addEventListener(PWA_INSTALLED_EVENT, onInstalled);

    const media = window.matchMedia("(max-width: 1023px)");
    const onViewportChange = () => syncVisibility();
    media.addEventListener("change", onViewportChange);

    if (!isIosDevice()) {
      void waitForDeferredPrompt(12000).then(() => syncVisibility());
    }

    return () => {
      window.removeEventListener(PWA_READY_EVENT, onReady);
      window.removeEventListener(PWA_INSTALLED_EVENT, onInstalled);
      media.removeEventListener("change", onViewportChange);
    };
  }, [syncVisibility]);

  const handleDismiss = () => {
    dismissInstallBanner();
    setVisible(false);
  };

  const handleInstall = async () => {
    if (installing) return;

    if (isIosDevice()) {
      setIosHintOpen(true);
      return;
    }

    setInstalling(true);

    try {
      const outcome = await runPwaInstall();
      if (outcome === "accepted") {
        setVisible(false);
      }
    } finally {
      setInstalling(false);
      syncVisibility();
    }
  };

  if (!visible) return null;

  const installLabel = isIosDevice() ? dict.pwa.installIos : dict.pwa.install;

  return (
    <>
      <div
        className="md:hidden pwa-install-banner-wrap fixed inset-x-0 bottom-0 z-30"
        role="region"
        aria-label={dict.pwa.install}
      >
        <div className="pwa-install-banner-panel">
          <div className="flex items-start gap-3">
            <div className="shrink-0 rounded-xl overflow-hidden bg-surface-elevated ring-1 ring-white/10">
              <Image
                src="/icons/icon-192.png"
                alt=""
                width={44}
                height={44}
                className="h-11 w-11"
                aria-hidden
              />
            </div>

            <div className="min-w-0 flex-1 text-start">
              <p className="text-sm font-semibold text-white leading-snug">
                {dict.pwa.installTitle}
              </p>
              <p className="mt-0.5 text-xs text-muted leading-relaxed">
                {dict.pwa.installDescription}
              </p>
            </div>

            <button
              type="button"
              onClick={handleDismiss}
              className="shrink-0 -mt-0.5 -ms-1 rounded-lg p-1.5 text-muted hover:text-white hover:bg-white/5 transition-colors"
              aria-label={dict.pwa.dismiss}
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <button
            type="button"
            onClick={handleInstall}
            disabled={installing}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-500 disabled:opacity-60"
          >
            <Download className="h-4 w-4 shrink-0" />
            <span>{installing ? dict.pwa.installing : installLabel}</span>
          </button>
        </div>
      </div>

      <PwaIosInstallHint open={iosHintOpen} onClose={() => setIosHintOpen(false)} />
    </>
  );
}
