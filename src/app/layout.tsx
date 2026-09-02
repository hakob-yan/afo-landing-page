import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Active Flow One — Your Body Is the Controller",
  description:
    "A body-controlled endless runner. Run, jump, dodge, and move — your real-world movements control the game. Join the community before the November 2026 Steam launch.",
  openGraph: {
    title: "Active Flow One — Your Body Is the Controller",
    description:
      "Run. Jump. Dodge. Move. Your real-world movements control the game.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${exo2.variable} h-full antialiased`}>
      <body className="min-h-full bg-afo-bg text-afo-white">{children}</body>
    </html>
  );
}
