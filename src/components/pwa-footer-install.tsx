"use client";

import { useCallback, useEffect, useState } from "react";
import { Download } from "lucide-react";
import { PwaIosInstallHint } from "@/components/pwa-ios-install-hint";
import {
  PWA_DISMISSED_EVENT,
  PWA_INSTALLED_EVENT,
  PWA_READY_EVENT,
  canShowFooterInstallLink,
  isIosDevice,
  runPwaInstall,
} from "@/lib/pwa";
import { useDictionary } from "@/i18n/dictionary-provider";

export function PwaFooterInstall() {
  const { dictionary: dict } = useDictionary();
  const [visible, setVisible] = useState(false);
  const [installing, setInstalling] = useState(false);
  const [iosHintOpen, setIosHintOpen] = useState(false);

  const syncVisibility = useCallback(() => {
    setVisible(canShowFooterInstallLink());
  }, []);

  useEffect(() => {
    syncVisibility();

    const onUpdate = () => syncVisibility();
    const onInstalled = () => setVisible(false);

    window.addEventListener(PWA_DISMISSED_EVENT, onUpdate);
    window.addEventListener(PWA_READY_EVENT, onUpdate);
    window.addEventListener(PWA_INSTALLED_EVENT, onInstalled);

    const media = window.matchMedia("(max-width: 1023px)");
    media.addEventListener("change", onUpdate);

    return () => {
      window.removeEventListener(PWA_DISMISSED_EVENT, onUpdate);
      window.removeEventListener(PWA_READY_EVENT, onUpdate);
      window.removeEventListener(PWA_INSTALLED_EVENT, onInstalled);
      media.removeEventListener("change", onUpdate);
    };
  }, [syncVisibility]);

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

  return (
    <>
      <button
        type="button"
        onClick={handleInstall}
        disabled={installing}
        className="md:hidden flex items-center gap-2 text-muted hover:text-brand-400 transition-colors disabled:opacity-60"
      >
        <Download className="h-4 w-4 shrink-0" />
        <span>
          {installing
            ? dict.pwa.installing
            : isIosDevice()
              ? dict.pwa.installIos
              : dict.pwa.install}
        </span>
      </button>

      <PwaIosInstallHint open={iosHintOpen} onClose={() => setIosHintOpen(false)} />
    </>
  );
}
