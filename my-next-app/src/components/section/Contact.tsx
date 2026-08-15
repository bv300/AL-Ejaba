import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { site } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="bg-parchment py-28">
      <Container>
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Get In Touch" title="Let's talk scope." />
            <p className="max-w-md leading-relaxed text-ink/70">
              Reach out directly — we typically respond within the same
              working day.
            </p>

            <div className="mt-10 space-y-6 border-t border-ink/10 pt-8">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-brass">
                  Contact Person
                </div>
                <div className="mt-1 font-display text-lg text-ink">
                  {site.contact}
                </div>
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-brass">
                  Phone
                </div>
                <div className="mt-1 text-ink/80">{site.phone1}</div>
                <div className="text-ink/80">{site.phone2}</div>
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-brass">
                  Email
                </div>
                <div className="mt-1 text-ink/80">{site.email}</div>
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-brass">
                  Address
                </div>
                <div className="mt-1 text-ink/80">{site.address}</div>
              </div>
            </div>
          </div>

          <form className="space-y-5 border border-ink/10 bg-white/40 p-8">
            <div>
              <label className="font-mono text-xs uppercase tracking-[0.2em] text-ink/60">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="mt-2 w-full border border-ink/15 bg-parchment px-4 py-3 text-ink outline-none focus:border-brass"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="font-mono text-xs uppercase tracking-[0.2em] text-ink/60">
                Phone / Email
              </label>
              <input
                type="text"
                name="contact"
                className="mt-2 w-full border border-ink/15 bg-parchment px-4 py-3 text-ink outline-none focus:border-brass"
                placeholder="How should we reach you?"
              />
            </div>
            <div>
              <label className="font-mono text-xs uppercase tracking-[0.2em] text-ink/60">
                Project Scope
              </label>
              <textarea
                name="message"
                rows={4}
                className="mt-2 w-full border border-ink/15 bg-parchment px-4 py-3 text-ink outline-none focus:border-brass"
                placeholder="Villa interiors, fit-out, landscaping..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-ink py-3 font-mono text-xs uppercase tracking-[0.2em] text-parchment transition-colors hover:bg-brass hover:text-ink"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
