import { navLinks, site } from "@/data/site";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-brass/20 py-16 text-parchment">
      <Container>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-display text-xl">{site.shortName}</div>
            <p className="mt-3 max-w-xs text-sm text-parchment/60">
              {site.legalName}
            </p>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-brass">
              Navigate
            </div>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-parchment/70 hover:text-brass"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-brass">
              Contact
            </div>
            <ul className="mt-4 space-y-2 text-sm text-parchment/70">
              <li>{site.phone1}</li>
              <li>{site.phone2}</li>
              <li>{site.email}</li>
              <li>{site.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-parchment/10 pt-6 font-mono text-[11px] text-parchment/40 md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </span>
          <span>Dubai, U.A.E</span>
        </div>
      </Container>
    </footer>
  );
}
