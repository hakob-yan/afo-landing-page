import Link from "next/link";
import { ReactNode } from "react";

type CTALinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  pulse?: boolean;
  external?: boolean;
  className?: string;
};

export function CTALink({
  href,
  children,
  variant = "primary",
  size = "md",
  pulse = false,
  external = false,
  className = "",
}: CTALinkProps) {
  const base =
    "inline-flex items-center justify-center polygon-clip-sm font-semibold uppercase tracking-wider transition-all duration-300 active:scale-[0.98]";

  const sizes = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-8 py-3 text-sm",
    lg: "px-10 py-4 text-base",
  };

  const variants = {
    primary:
      "bg-afo-purple text-afo-white hover:brightness-110 shadow-[0_0_24px_rgba(123,44,191,0.55)]",
    outline:
      "border-2 border-afo-purple-bright bg-transparent text-afo-white hover:bg-afo-purple/20 shadow-[0_0_16px_rgba(167,139,250,0.18)]",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${pulse ? "glow-button" : ""} ${className}`;

  if (external || href.startsWith("#")) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
