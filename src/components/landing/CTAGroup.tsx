import { CTALink } from "@/components/ui/CTALink";
import { DISCORD_URL, GAMEPLAY_ID } from "@/lib/constants";

type CTAGroupProps = {
  layout?: "stack" | "row";
  size?: "sm" | "md" | "lg";
  pulsePrimary?: boolean;
  className?: string;
  showSecondary?: boolean;
};

export function CTAGroup({
  layout = "stack",
  size = "lg",
  pulsePrimary = true,
  className = "",
  showSecondary = true,
}: CTAGroupProps) {
  const layoutClass =
    layout === "row"
      ? "flex flex-row gap-3"
      : "flex flex-col gap-3 sm:flex-row sm:gap-4";

  return (
    <div className={`${layoutClass} ${className}`}>
      <CTALink
        href={DISCORD_URL}
        variant="primary"
        size={size}
        pulse={pulsePrimary}
        external
        className="w-full sm:w-auto sm:flex-1"
      >
        Join Discord
      </CTALink>
      {showSecondary && (
        <CTALink
          href={`#${GAMEPLAY_ID}`}
          variant="outline"
          size={size}
          className="w-full sm:w-auto sm:flex-1"
        >
          Watch Gameplay
        </CTALink>
      )}
    </div>
  );
}
