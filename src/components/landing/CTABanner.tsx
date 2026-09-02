import { CTALink } from "@/components/ui/CTALink";
import { DISCORD_URL, GAMEPLAY_ID } from "@/lib/constants";

type CTABannerProps = {
  headline: string;
  subline?: string;
};

export function CTABanner({ headline, subline }: CTABannerProps) {
  return (
    <div className="polygon-clip relative overflow-hidden border border-afo-purple/35 bg-afo-surface px-6 py-8 text-center shadow-[0_0_40px_rgba(123,44,191,0.18)] md:px-10 md:py-10">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-afo-purple/10 via-transparent to-afo-purple/10" />
      <div className="relative z-10">
        <p className="mb-2 text-lg font-extrabold uppercase tracking-wide text-afo-white md:text-xl">
          {headline}
        </p>
        {subline && <p className="mb-6 text-sm text-afo-muted">{subline}</p>}
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <CTALink href={DISCORD_URL} variant="primary" size="lg" pulse external>
            Join Discord
          </CTALink>
          <CTALink href={`#${GAMEPLAY_ID}`} variant="outline" size="lg">
            Watch Gameplay
          </CTALink>
        </div>
      </div>
    </div>
  );
}
