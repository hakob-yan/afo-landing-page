import { CTALink } from "@/components/ui/CTALink";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { COMMUNITY_ID, DISCORD_URL } from "@/lib/constants";

export function CommunitySection() {
  return (
    <section
      id={COMMUNITY_ID}
      className="relative scroll-mt-24 px-5 py-20 md:px-12 lg:px-16"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-afo-purple/40 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-3xl">
        <div className="polygon-clip border border-afo-purple/35 bg-afo-surface px-6 py-10 text-center shadow-[0_0_60px_rgba(123,44,191,0.16)] md:px-12 md:py-14">
          <h2 className="mb-4 text-2xl font-extrabold uppercase tracking-wide text-afo-white md:text-4xl">
            Join the Active Flow One Community
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-afo-muted md:text-lg">
            Follow the development, share feedback, see new gameplay, and be
            part of Active Flow One before launch.
          </p>

          <CTALink
            href={DISCORD_URL}
            variant="primary"
            size="lg"
            pulse
            external
            className="w-full sm:w-auto"
          >
            Join Discord
          </CTALink>

          <p className="mt-8 mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-afo-gold">
            Also follow
          </p>
          <SocialLinks className="justify-center" includeDiscord={false} />
        </div>
      </div>
    </section>
  );
}
