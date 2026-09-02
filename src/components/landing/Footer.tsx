import Image from "next/image";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { CTALink } from "@/components/ui/CTALink";
import { DISCORD_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-afo-purple/20 px-5 py-10 md:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/Logo.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 rounded-full object-cover"
          />
          <p className="text-xs uppercase tracking-widest text-afo-muted">
            © Active Flow One 2026
          </p>
        </div>

        <SocialLinks highlightDiscord />

        <CTALink href={DISCORD_URL} variant="primary" size="sm" external>
          Join Discord
        </CTALink>
      </div>
    </footer>
  );
}
