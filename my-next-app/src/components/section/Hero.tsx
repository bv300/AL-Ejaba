import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink pt-20"
    >
      {/* blueprint grid backdrop */}
      <div className="absolute inset-0 bg-blueprint bg-grid opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/60 to-ink" />

      {/* corner coordinate marks, referencing architectural drawings */}
      <span className="absolute left-6 top-24 font-mono text-[10px] tracking-[0.3em] text-brass/60 md:left-10">
        25.2582° N
      </span>
      <span className="absolute right-6 top-24 font-mono text-[10px] tracking-[0.3em] text-brass/60 md:right-10">
        55.3047° E
      </span>

      <Container className="relative">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-brass uppercase">
            <span className="h-px w-8 bg-brass" />
            Dubai — Interior Design &amp; Technical Services
          </div>

          <h1 className="font-display text-5xl leading-[1.02] tracking-tight text-parchment md:text-7xl">
            We draft the villa
            <br />
            before we build it.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-parchment/70 md:text-lg">
            Al Ejaba Al Sareea Technical Services gives shape to our clients&apos;
            creativity — interior design, fit-out, landscaping and facility
            management, delivered by the same team from first sketch to
            handover.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#projects" variant="primary">
              View Projects
            </Button>
            <Button href="#contact" variant="outline">
              Speak to Us
            </Button>
          </div>
        </div>

        <div className="mt-20 grid max-w-2xl grid-cols-3 gap-8 border-t border-brass/20 pt-8">
          <div>
            <div className="font-display text-3xl text-parchment">30+</div>
            <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-parchment/50">
              Villas Delivered
            </div>
          </div>
          <div>
            <div className="font-display text-3xl text-parchment">4</div>
            <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-parchment/50">
              Core Services
            </div>
          </div>
          <div>
            <div className="font-display text-3xl text-parchment">UAE</div>
            <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-parchment/50">
              Wide Coverage
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
