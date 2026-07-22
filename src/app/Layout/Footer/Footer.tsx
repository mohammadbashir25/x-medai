import Link from "next/link";
import XLogo from "@/app/components/ui/x-logo";
import FooterLinkGroup from "./FooterLinkGroup";
import { NAV_LINKS } from "@/app/Layout/Navbar/nav-links";
import { FOOTER_TAGLINE, SERVICES, CONTACT_PROMPT, CONTACT_EMAIL } from "./data";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-footer">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 px-10 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand block */}
          <div className="max-w-xs">
            <Link href="/" className="flex w-fit items-center gap-1.5">
              <XLogo size="sm" variant="navbar" />
              <span className="font-heading text-lg font-semibold tracking-tight text-footer-foreground">
                Media
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-footer-foreground/60">
              {FOOTER_TAGLINE}
            </p>
          </div>

          <FooterLinkGroup
            title="Navigation"
            items={NAV_LINKS.map((link) => ({
              label: link.name,
              href: link.href,
            }))}
          />

          <FooterLinkGroup
            title="Services"
            items={SERVICES.map((service) => ({ label: service }))}
          />

          {/* Contact */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-footer-foreground/50">
              Contact
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-footer-foreground/70">
              {CONTACT_PROMPT}
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-3 inline-block text-sm font-medium text-primary transition-colors duration-200 hover:text-accent"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-footer-foreground/40">
            © {year} xMedia. All rights reserved.
          </p>
          <p className="text-xs text-footer-foreground/40">
            Systems built to perform.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;