import { SOCIAL_LINKS } from "@/lib/constants";

type SocialId = (typeof SOCIAL_LINKS)[number]["id"];

const iconClass = "h-5 w-5";

export function SocialIcon({ id }: { id: SocialId }) {
  switch (id) {
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden>
          <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 1.8H7A2.2 2.2 0 0 0 4.8 7v10A2.2 2.2 0 0 0 7 19.2h10a2.2 2.2 0 0 0 2.2-2.2V7A2.2 2.2 0 0 0 17 4.8zM12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8zm4.85-3.55a.95.95 0 1 1-.95.95.95.95 0 0 1 .95-.95z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden>
          <path d="M14.2 3h2.4c.3 1.7 1.4 3.2 3.1 4v2.3c-1.2 0-2.3-.4-3.2-1v6.6A6.1 6.1 0 1 1 10.3 8.9v2.5a3.6 3.6 0 1 0 2.6 3.4V3z" />
        </svg>
      );
    case "telegram":
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden>
          <path d="M20.6 4.3 3.9 10.7c-1.1.4-1.1 1 .2 1.3l4.3 1.3 1.6 5c.2.6.1.8.8.8.4 0 .6-.2.8-.4l2.3-2.2 4.8 3.5c.9.5 1.5.2 1.7-.8l3-14.2c.3-1.2-.4-1.7-1.8-1.1zM9.4 13.7l8.4-5.3c.4-.3.8 0 .5.3l-7.2 6.5-.3 3.3z" />
        </svg>
      );
    case "discord":
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden>
          <path d="M19.3 5.2A17 17 0 0 0 15 3.6l-.4.8a15.4 15.4 0 0 1 3.7 1.4 15.2 15.2 0 0 0-13.6 0A15 15 0 0 1 8.4 4.4L8 3.6A17 17 0 0 0 3.7 5.2C1.4 8.6.8 11.9 1 15.2a17.4 17.4 0 0 0 5.3 2.7l.8-1.3a11.3 11.3 0 0 1-1.8-.9l.4-.3a12.4 12.4 0 0 0 10.6 0l.4.3a11.3 11.3 0 0 1-1.8.9l.8 1.3a17.4 17.4 0 0 0 5.3-2.7c.3-3.8-.5-7.1-1.7-10zM8.7 13.6c-.8 0-1.5-.8-1.5-1.7s.7-1.7 1.5-1.7 1.5.8 1.5 1.7-.6 1.7-1.5 1.7zm6.6 0c-.8 0-1.5-.8-1.5-1.7s.7-1.7 1.5-1.7 1.5.8 1.5 1.7-.7 1.7-1.5 1.7z" />
        </svg>
      );
  }
}
