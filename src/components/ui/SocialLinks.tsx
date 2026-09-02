import { SOCIAL_LINKS } from "@/lib/constants";
import { SocialIcon } from "@/components/ui/SocialIcons";

type SocialLinksProps = {
  className?: string;
  highlightDiscord?: boolean;
  includeDiscord?: boolean;
};

export function SocialLinks({
  className = "",
  highlightDiscord = false,
  includeDiscord = true,
}: SocialLinksProps) {
  const links = includeDiscord
    ? SOCIAL_LINKS
    : SOCIAL_LINKS.filter((link) => link.id !== "discord");
  return (
    <nav aria-label="Community links" className={`flex items-center gap-2 ${className}`}>
      {links.map((link) => {
        const isDiscord = link.id === "discord";
        return (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            title={link.label}
            className={`inline-flex items-center justify-center rounded-full border p-2.5 transition-colors ${
              isDiscord && highlightDiscord
                ? "border-afo-purple bg-afo-purple text-afo-white hover:brightness-110"
                : "border-afo-glow/20 text-afo-muted hover:border-afo-purple/60 hover:text-afo-white"
            }`}
          >
            <SocialIcon id={link.id} />
          </a>
        );
      })}
    </nav>
  );
}
