import Link from "next/link";

type FooterItem = {
  label: string;
  href?: string;
};

type FooterLinkGroupProps = {
  title: string;
  items: FooterItem[];
};

const FooterLinkGroup = ({ title, items }: FooterLinkGroupProps) => {
  return (
    <div>
      <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-footer-foreground/50">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item.label}>
            {item.href ? (
              <Link
                href={item.href}
                className="text-sm text-footer-foreground/80 transition-colors duration-200 hover:text-primary"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-sm text-footer-foreground/70">{item.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkGroup;