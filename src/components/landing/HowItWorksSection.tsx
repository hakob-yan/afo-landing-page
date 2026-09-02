import { PolygonCard } from "@/components/ui/PolygonCard";

const steps = [
  {
    number: "1",
    title: "Set Up",
    description: "Camera, PC, or Mac. No controller.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
        <rect x="6" y="12" width="36" height="24" rx="2" stroke="#C084FC" strokeWidth="2" />
        <rect x="18" y="36" width="12" height="4" fill="#7B2CBF" />
        <circle cx="24" cy="24" r="4" fill="#C084FC" opacity="0.9" />
        <rect x="38" y="18" width="4" height="8" rx="1" fill="#C2B2CA" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Move",
    description: "Your body is tracked in real time.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
        <circle cx="24" cy="10" r="4" stroke="#C084FC" strokeWidth="2" />
        <line x1="24" y1="14" x2="24" y2="28" stroke="#C2B2CA" strokeWidth="2" />
        <line x1="24" y1="18" x2="14" y2="24" stroke="#C2B2CA" strokeWidth="2" />
        <line x1="24" y1="18" x2="34" y2="24" stroke="#C2B2CA" strokeWidth="2" />
        <line x1="24" y1="28" x2="16" y2="40" stroke="#C2B2CA" strokeWidth="2" />
        <line x1="24" y1="28" x2="32" y2="40" stroke="#C2B2CA" strokeWidth="2" />
        <circle cx="14" cy="24" r="2" fill="#F9BB30" />
        <circle cx="34" cy="24" r="2" fill="#F9BB30" />
        <circle cx="16" cy="40" r="2" fill="#F9BB30" />
        <circle cx="32" cy="40" r="2" fill="#F9BB30" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Play",
    description: "Run, jump, and dodge through the city.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
        <polygon points="24,4 44,40 4,40" stroke="#C084FC" strokeWidth="2" fill="none" />
        <line x1="8" y1="40" x2="40" y2="40" stroke="#7B2CBF" strokeWidth="2" />
        <circle cx="24" cy="28" r="3" fill="#C084FC" />
        <path d="M30 20 L38 16" stroke="#C2B2CA" strokeWidth="2" strokeLinecap="round" />
        <path d="M32 24 L42 22" stroke="#C2B2CA" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function HowItWorksSection() {
  return (
    <section className="px-5 py-20 md:px-12 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="mb-2 text-center text-xs font-bold uppercase tracking-[0.3em] text-afo-gold">
          How It Works
        </h2>
        <p className="mb-10 text-center text-2xl font-bold uppercase text-afo-white md:text-3xl">
          Play With Your Body
        </p>

        <div className="flex flex-col gap-5 md:grid md:grid-cols-3 md:gap-6">
          {steps.map((step) => (
            <PolygonCard key={step.number} glow>
              <div className="mb-4 flex items-center justify-between">
                <span className="text-2xl font-extrabold text-afo-gold">
                  {step.number}
                </span>
                {step.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold uppercase tracking-wide text-afo-purple-bright">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-afo-muted">
                {step.description}
              </p>
            </PolygonCard>
          ))}
        </div>
      </div>
    </section>
  );
}
