import { ReactNode } from "react";

type PolygonCardProps = {
  children: ReactNode;
  className?: string;
  glow?: boolean;
};

export function PolygonCard({ children, className = "", glow = false }: PolygonCardProps) {
  return (
    <div
      className={`polygon-clip relative bg-afo-card p-6 ${
        glow
          ? "shadow-[0_0_30px_rgba(194,178,202,0.15)] before:absolute before:inset-0 before:border before:border-afo-glow/20"
          : "border border-afo-glow/10"
      } ${className}`}
    >
      {children}
    </div>
  );
}
