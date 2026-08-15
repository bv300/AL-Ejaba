import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function About() {
  return (
    <section id="about" className="bg-parchment py-28">
      <Container>
        <div className="grid gap-16 md:grid-cols-[1fr_1.2fr]">
          <SectionTitle eyebrow="Who We Are" title="Design led. Site built." />

          <div className="space-y-6 text-ink/75">
            <p className="text-lg leading-relaxed">
              Al Ejaba Al Sareea Technical Services (AAJLTES) is a Dubai-based
              interior design consultancy with a large portfolio of successful
              projects across the middle east. Our experience and passion for
              creativity gives us the skills to meet and exceed our clients&apos;
              expectations.
            </p>
            <p className="leading-relaxed">
              We give shape to our clients&apos; creativity and imagination through
              design and technical consultation — our skilled workmen create
              that ambiance for our clients. Our success relies on the best
              customer relations, innovative solutions, and an ambiance you
              love, in an affordable budget.
            </p>
            <p className="leading-relaxed">
              Beyond delivery, AAJLTES keeps a separate maintenance team that
              looks after every completed project — plumbing, electrical,
              mechanical and general facility management — for timely,
              long-term support.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
