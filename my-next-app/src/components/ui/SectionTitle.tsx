import { cn } from "@/lib/utils";

export default function SectionTitle({
  eyebrow,
  title,
  align = "left",
  dark = false,
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={cn("mb-12", align === "center" && "text-center")}>
      <div
        className={cn(
          "mb-3 flex items-center gap-3 font-mono text-xs tracking-[0.25em] uppercase",
          dark ? "text-brass-light" : "text-brass",
          align === "center" && "justify-center"
        )}
      >
        <span className="h-px w-8 bg-current" />
        {eyebrow}
      </div>
      <h2
        className={cn(
          "font-display text-4xl md:text-5xl leading-[1.05] tracking-tight",
          dark ? "text-parchment" : "text-ink"
        )}
      >
        {title}
      </h2>
    </div>
  );
}
