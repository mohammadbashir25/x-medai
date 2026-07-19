import Image from "next/image";
import Link from "next/link";
import Container from "../components/ui/Container";
import { LucideMenu } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" }
];

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-transparent">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          {/* logo */}
          <Link href="/" className="flex items-center gap-3">
              <Image src='/logoo.svg' alt="xMedia" width={50} height={50} className=" "/>
              <span className="text-xl font-semibold tracking-tight">xMedia</span>
          </Link>
          {/* Navigations */}
          <div className="hidden items-center gap-10 md:flex">
            { links.map((link)=>(
              <Link key={link.name} href={link.href} className="text-sm text-neutral-400 transition-colors hover:text-white">{link.name}</Link>
            ))}

          </div>
          {/* CTA */}
          <Link href='/contact' className="hidden rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:scale-105 md:block">Start Project</Link>

          {/* Mobile button */}

          <button className="md:hidden text-white">
            <LucideMenu />
          </button>
        </nav>
      </Container>
    </header>
  )
}

export default Navbar
