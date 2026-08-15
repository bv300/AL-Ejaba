import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-villa py-24">
      <div className="absolute inset-0 bg-blueprint bg-grid opacity-20" />
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl font-display text-3xl leading-tight text-parchment md:text-5xl">
          Have a plot, a villa, or a space in mind?
        </h2>
        <p className="max-w-md text-sm text-parchment/70 md:text-base">
          Tell us the scope — interiors, fit-out or landscaping — and we&apos;ll
          come back with a plan and a number.
        </p>
        <Button href="#contact" variant="primary" className="mt-2">
          Start a Conversation
        </Button>
      </Container>
    </section>
  );
}
