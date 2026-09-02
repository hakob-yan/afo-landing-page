import { CTAGroup } from "@/components/landing/CTAGroup";
import { CyberCityBackground } from "@/components/ui/CyberCityBackground";
import {
  ESTIMATED_PRICE,
  GAMEPLAY_YOUTUBE_EMBED,
  RELEASE_DATE,
} from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center px-5 py-20 md:min-h-[88vh] md:px-12 lg:px-16">
      <CyberCityBackground />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.38em] text-afo-purple-bright md:text-sm">
            Active Flow One
          </p>

          <h1 className="mb-5 text-4xl font-extrabold uppercase leading-[1.05] tracking-wide text-afo-white sm:text-5xl md:text-6xl lg:text-7xl">
            Your Body Is
            <br />
            <span className="text-afo-purple-bright">the Controller.</span>
          </h1>

          <p className="mb-8 max-w-xl text-base leading-relaxed text-afo-muted md:text-lg">
            Run. Jump. Dodge. Move. Your real-world movements control the game.
          </p>

          <CTAGroup className="mb-8" />

          <dl className="flex flex-wrap gap-3">
            <div className="polygon-clip-sm border border-afo-purple/35 bg-afo-surface/80 px-4 py-3">
              <dt className="text-[10px] font-bold uppercase tracking-[0.22em] text-afo-gold">
                Release
              </dt>
              <dd className="mt-1 text-sm font-semibold text-afo-white">
                {RELEASE_DATE}
              </dd>
            </div>
            <div className="polygon-clip-sm border border-afo-purple/35 bg-afo-surface/80 px-4 py-3">
              <dt className="text-[10px] font-bold uppercase tracking-[0.22em] text-afo-gold">
                Estimated Price
              </dt>
              <dd className="mt-1 text-sm font-semibold text-afo-white">
                {ESTIMATED_PRICE}
              </dd>
            </div>
          </dl>
        </div>

        <div className="mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:mx-0 lg:justify-self-end">
          <div className="polygon-clip overflow-hidden border-2 border-afo-purple/40 bg-afo-surface shadow-[0_0_50px_rgba(123,44,191,0.28)]">
            <iframe
              className="aspect-[9/16] w-full"
              src={GAMEPLAY_YOUTUBE_EMBED}
              title="Active Flow One gameplay"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <p className="mt-3 text-center text-xs uppercase tracking-widest text-afo-muted lg:text-left">
            Your body controls the game
          </p>
        </div>
      </div>
    </section>
  );
}
