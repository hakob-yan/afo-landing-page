import { ButtonHTMLAttributes, forwardRef } from "react";

type GlowButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
  size?: "md" | "lg";
};

export const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  function GlowButton(
    { children, variant = "primary", size = "md", className = "", ...props },
    ref,
  ) {
    const base =
      "polygon-clip-sm font-semibold uppercase tracking-wider transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";

    const sizes = {
      md: "px-8 py-3 text-sm",
      lg: "px-10 py-4 text-base",
    };

    const variants = {
      primary:
        "glow-button bg-afo-purple text-afo-white hover:brightness-110 active:scale-[0.98]",
      outline:
        "border-2 border-afo-purple-bright bg-transparent text-afo-white hover:bg-afo-purple/20 active:scale-[0.98]",
    };

    return (
      <button
        ref={ref}
        className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  },
);
