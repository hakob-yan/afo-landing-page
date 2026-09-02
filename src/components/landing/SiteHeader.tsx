import Image from "next/image";
import { CTALink } from "@/components/ui/CTALink";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { COMMUNITY_ID, DISCORD_URL, GAMEPLAY_ID } from "@/lib/constants";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-afo-purple/20 bg-afo-bg/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-10">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <Image
            src="/Logo.png"
            alt="Active Flow One"
            width={44}
            height={44}
            className="h-10 w-10 rounded-full object-cover md:h-11 md:w-11"
            priority
          />
          <span className="truncate text-sm font-extrabold uppercase tracking-[0.18em] text-afo-white">
            Active Flow One
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.18em] text-afo-muted lg:flex"
        >
          <a href={`#${GAMEPLAY_ID}`} className="hover:text-afo-white">
            Gameplay
          </a>
          <a href={`#${COMMUNITY_ID}`} className="hover:text-afo-white">
            Community
          </a>
          <a href="#steam" className="hover:text-afo-white">
            Steam
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <SocialLinks className="hidden sm:flex" includeDiscord={false} />
          <CTALink
            href={DISCORD_URL}
            variant="primary"
            size="sm"
            external
            className="shrink-0"
          >
            Join Discord
          </CTALink>
        </div>
      </div>
    </header>
  );
}
