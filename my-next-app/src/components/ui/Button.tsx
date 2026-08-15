import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-200";

  const variants: Record<string, string> = {
    primary: "bg-brass text-ink hover:bg-brass-light",
    outline: "border border-brass/50 text-parchment hover:border-brass hover:bg-brass/10",
    ghost: "text-ink hover:text-brass",
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
