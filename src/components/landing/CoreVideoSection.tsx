"use client";

import { useRef, useEffect, useState } from "react";
import { CTAGroup } from "@/components/landing/CTAGroup";
import { GAMEPLAY_ID, GAMEPLAY_YOUTUBE_EMBED } from "@/lib/constants";

export function CoreVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onCanPlay = () => setVideoReady(true);
    const onError = () => setVideoReady(false);

    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("error", onError);
    video.play().catch(() => setVideoReady(false));

    return () => {
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("error", onError);
    };
  }, []);

  return (
    <section
      id={GAMEPLAY_ID}
      className="relative scroll-mt-24 px-5 py-20 md:px-12 lg:px-16"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-afo-bg via-afo-purple/8 to-afo-bg" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.3em] text-afo-gold">
          Gameplay
        </p>
        <h2 className="mb-3 text-center text-3xl font-extrabold uppercase text-afo-white md:text-4xl">
          Your Body Controls the Game
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-base leading-relaxed text-afo-muted md:text-lg">
          Jump, dodge, and sprint in the real world. The camera reads your
          movement and turns it into the run.
        </p>

        <div className="polygon-clip relative overflow-hidden border-2 border-afo-purple/35 shadow-[0_0_50px_rgba(123,44,191,0.22)]">
          <video
            ref={videoRef}
            className={`aspect-video w-full bg-afo-surface object-cover ${videoReady ? "relative z-10" : "absolute inset-0 opacity-0"}`}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/core-mechanism.mp4" type="video/mp4" />
          </video>

          {!videoReady && (
            <div className="relative aspect-video w-full bg-afo-surface">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={GAMEPLAY_YOUTUBE_EMBED}
                title="Active Flow One gameplay"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}
        </div>

        <p className="mt-4 text-center text-sm text-afo-muted">
          Move in front of your camera. The game follows you.
        </p>

        <CTAGroup className="mt-8 justify-center" pulsePrimary={false} showSecondary={false} />
      </div>
    </section>
  );
}
