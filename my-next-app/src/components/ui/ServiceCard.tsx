import { Service } from "@/types";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group relative border border-ink/10 bg-parchment p-8 transition-colors duration-300 hover:border-brass/60">
      <span className="font-mono text-xs tracking-[0.2em] text-brass">
        {service.code}
      </span>
      <h3 className="mt-4 font-display text-2xl text-ink">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink/70">
        {service.description}
      </p>
      <ul className="mt-6 space-y-2 border-t border-ink/10 pt-4">
        {service.points.map((point) => (
          <li
            key={point}
            className="flex items-start gap-2 font-mono text-xs text-ink/60"
          >
            <span className="mt-1 h-1 w-1 shrink-0 bg-brass" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
