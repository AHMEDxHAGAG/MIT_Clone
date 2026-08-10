import { ThemeToggle } from "./ThemeToggle";

export function SiteFooter() {
  return (
    <footer className="srg-footer">
      <div className="srg-footer-meta">
        <span>© 2021 – 2026 Scene Representation Group</span>
        <ThemeToggle />
      </div>
      <nav aria-label="Institutional links">
        <a className="srg-arrow-link" href="https://www.mit.edu/aboutmit/">About MIT</a>
        <a className="srg-arrow-link" href="https://www.csail.mit.edu/about">About CSAIL</a>
      </nav>
    </footer>
  );
}
