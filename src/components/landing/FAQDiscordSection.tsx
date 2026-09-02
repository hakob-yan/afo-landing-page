import { Accordion } from "@/components/ui/Accordion";
import { CTALink } from "@/components/ui/CTALink";
import { DISCORD_URL } from "@/lib/constants";

const faqItems = [
  {
    question: "What do I need to play?",
    answer: "A camera and a Windows or Mac computer.",
  },
  {
    question: "How do I control the game?",
    answer:
      "Your body is the controller. Move in front of the camera to run, jump, and dodge.",
  },
  {
    question: "When does it launch?",
    answer: "November 2026 on Steam.",
  },
  {
    question: "How much will it cost?",
    answer: "The estimated price is $4.99–$7.99. The final price may change.",
  },
];

export function FAQDiscordSection() {
  return (
    <section className="px-5 py-20 md:px-12 lg:px-16">
      <div className="mx-auto w-full max-w-xl">
        <h2 className="mb-8 text-center text-xs font-bold uppercase tracking-[0.3em] text-afo-gold">
          FAQ
        </h2>

        <Accordion items={faqItems} />

        <div className="mt-12 flex flex-col items-center gap-4">
          <p className="text-sm text-afo-muted">Questions, feedback, new gameplay</p>
          <CTALink href={DISCORD_URL} variant="primary" size="lg" pulse external>
            Join Discord
          </CTALink>
        </div>
      </div>
    </section>
  );
}
