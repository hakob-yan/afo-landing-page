import { CTABanner } from "@/components/landing/CTABanner";
import { CyberCityBackground } from "@/components/ui/CyberCityBackground";

const benefits = [
  {
    headline: "No controller. You are the input.",
    sub: "Jump, dodge, and sprint with your body.",
  },
  {
    headline: "Desktop cardio that actually plays like a game.",
    sub: "An endless runner driven by real movement.",
  },
  {
    headline: "Built for the run, not the menu.",
    sub: "Fast, physical, and easy to pick up.",
  },
];

export function BenefitsSection() {
  return (
    <section className="relative overflow-hidden px-5 py-20 md:px-12 lg:px-16">
      <CyberCityBackground className="opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-afo-bg via-transparent to-afo-bg" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <h2 className="mb-10 text-center text-2xl font-extrabold uppercase leading-tight text-afo-white md:text-4xl">
          Move First.
          <br />
          <span className="text-afo-purple-bright">Play Second.</span>
        </h2>

        <div className="flex flex-col gap-5">
          {benefits.map((benefit) => (
            <div
              key={benefit.headline}
              className="polygon-clip-sm border border-afo-purple/20 bg-afo-surface/80 px-6 py-5 backdrop-blur-sm"
            >
              <p className="text-lg font-bold text-afo-white md:text-xl">
                {benefit.headline}
              </p>
              <p className="mt-1 text-sm text-afo-muted">{benefit.sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <CTABanner
            headline="Be in the community before launch"
            subline="Follow development, share feedback, and see new gameplay on Discord."
          />
        </div>
      </div>
    </section>
  );
}
