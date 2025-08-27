"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/blog", label: "Blogs" },
  { href: "/experiences", label: "Experiences" },
  { href: "/education", label: "Education" },
  { href: "/adventures", label: "Adventures" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-line px-10 py-3">
      <div className="flex items-center gap-4 text-ink">
        <svg className="size-4" viewBox="0 0 48 48" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd"
            d="M12.08 24 4 19.25 9.96 8.75l8.08 4.74.01-9.49h11.91l.01 9.49 8.08-4.74L44 19.25 35.92 24 44 28.75l-6 10.5-8.08-4.74-.01 9.49H18.05l-.01-9.49L9.96 39.25 4 28.75 12.08 24Z"/>
        </svg>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Abel Albuez Sanchez</h2>
      </div>
      <nav className="flex flex-1 justify-end gap-8">
        <ul className="flex items-center gap-9">
          {links.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm font-medium leading-normal ${
                  pathname === l.href ? "text-brand" : "text-ink"
                } hover:text-brand`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
