export const DISCORD_URL = "https://discord.gg/awHhrvVrR";
export const GAMEPLAY_ID = "gameplay";
export const COMMUNITY_ID = "community";

export const GAMEPLAY_YOUTUBE_ID = "I9pzFMqB4qc";
export const GAMEPLAY_YOUTUBE_EMBED = `https://www.youtube.com/embed/${GAMEPLAY_YOUTUBE_ID}`;

export const RELEASE_DATE = "November 2026";
export const ESTIMATED_PRICE = "$4.99–$7.99";

/** Secondary community links, in nav/footer order. Discord stays last and is the primary destination. */
export const SOCIAL_LINKS = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/activeflowone/",
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@activeflowone",
  },
  {
    id: "telegram",
    label: "Telegram",
    href: "https://t.me/activeflowone",
  },
  {
    id: "discord",
    label: "Discord",
    href: DISCORD_URL,
  },
] as const;
