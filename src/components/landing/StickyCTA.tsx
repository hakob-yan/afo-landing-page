"use client";

import { useEffect, useState } from "react";
import { CTALink } from "@/components/ui/CTALink";
import { DISCORD_URL } from "@/lib/constants";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-afo-purple/30 bg-afo-bg/90 px-4 py-3 shadow-[0_-8px_32px_rgba(4,0,6,0.6)] backdrop-blur-lg transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      aria-hidden={!visible}
    >
      <div className="mx-auto flex max-w-lg justify-center">
        <CTALink
          href={DISCORD_URL}
          variant="primary"
          size="lg"
          pulse
          external
          className="w-full"
        >
          Join Discord
        </CTALink>
      </div>
    </div>
  );
}
