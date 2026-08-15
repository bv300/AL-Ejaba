import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { formatAED } from "@/lib/utils";
import { projects } from "@/data/site";

const reasons = [
  {
    code: "A",
    title: "One team, start to finish",
    body: "Design, fit-out and landscaping run under a single team — no handover gaps between contractors.",
  },
  {
    code: "B",
    title: "Maintenance doesn't stop at handover",
    body: "A dedicated maintenance team stays on for plumbing, electrical and mechanical support after the project ends.",
  },
  {
    code: "C",
    title: "Built for the budget you set",
    body: "Innovative solutions and an ambiance clients love, kept inside an affordable, agreed budget.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-ink py-28">
      <Container>
        <SectionTitle eyebrow="Why AAJLTES" title="Built on a track record." dark />

        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-8">
            {reasons.map((reason) => (
              <div key={reason.code} className="flex gap-5">
                <span className="font-display text-2xl text-brass">
                  {reason.code}
                </span>
                <div>
                  <h3 className="font-display text-xl text-parchment">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-parchment/60">
                    {reason.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* project ledger — the spec-sheet signature element */}
          <div id="projects" className="border border-brass/25">
            <div className="flex items-center justify-between border-b border-brass/25 bg-brass/5 px-6 py-4">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-brass">
                Project Ledger
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-parchment/40">
                Selected works
              </span>
            </div>
            <div className="max-h-[440px] overflow-y-auto">
              {projects.map((project, i) => (
                <div
                  key={`${project.name}-${i}`}
                  className="flex items-center justify-between gap-4 border-b border-parchment/10 px-6 py-4 last:border-0"
                >
                  <div className="min-w-0">
                    <div className="truncate font-display text-base text-parchment">
                      {project.name}
                    </div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-parchment/40">
                      {project.location} · {project.scope}
                    </div>
                  </div>
                  <div className="shrink-0 font-mono text-sm text-brass-light">
                    {formatAED(project.value)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
