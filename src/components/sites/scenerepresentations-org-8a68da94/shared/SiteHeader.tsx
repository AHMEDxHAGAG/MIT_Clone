"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CsailLogo, MitLogo, SceneRepresentationLogo } from "./icons";

const navItems = [
  { href: "/publications/", label: "Publications", match: "/publications" },
  { href: "https://scenerepresentations.org/talks/", label: "Talks", match: "/talks" },
  { href: "/courses/", label: "Teaching", match: "/courses" },
  { href: "https://scenerepresentations.org/people/", label: "People", match: "/people" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="srg-header">
      <Link aria-label="Scene Representation Group home" className="srg-brand" href="/">
        <SceneRepresentationLogo className="srg-brand-mark" height="80" width="80" />
        <span className="srg-wordmark">Scene Representation Group</span>
      </Link>
      <nav aria-label="Main" className="srg-main-nav">
        {navItems.map((item) => (
          <Link
            className={pathname.startsWith(item.match) ? "active" : undefined}
            href={item.href}
            key={item.label}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="srg-institution-logos">
        <a aria-label="Massachusetts Institute of Technology" href="https://www.mit.edu/">
          <MitLogo height="38" width="72" />
        </a>
        <a aria-label="MIT Computer Science and Artificial Intelligence Laboratory" href="https://www.csail.mit.edu/">
          <CsailLogo height="41" width="72" />
        </a>
      </div>
    </header>
  );
}
