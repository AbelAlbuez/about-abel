export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-[var(--divider)] bg-[var(--background)]/80 px-10 py-4 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <svg className="h-8 w-8 text-[var(--primary)]" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.08 24 4 19.25 9.96 8.75l8.08 4.74.01-9.49h11.91l.01 9.49 8.08-4.74L44 19.25 35.92 24 44 28.75l-6 10.5-8.08-4.74-.01 9.49H18.05l-.01-9.49L9.96 39.25 4 28.75 12.08 24Z"
          />
        </svg>
        <h2 className="text-xl font-bold tracking-tight">Abel Albuez Sanchez</h2>
      </div>

      <nav className="flex items-center gap-6 text-sm font-medium">
        {[
          ["Blogs", "/blog"],
          ["Experiences", "#experiences"],
          ["Education", "#education"],
          ["Adventures", "#adventures"],
          ["Contact", "/contact"],
        ].map(([label, href]) => (
          <a key={href} href={href} className="transition-colors text-[var(--text-muted)] hover:text-[var(--text-dark)]">
            {label}
          </a>
        ))}
        <a
          href="/resume"
          className="ml-4 inline-flex items-center justify-center rounded-lg bg-[var(--primary)] px-4 py-2 font-semibold text-white shadow-sm transition-all hover:bg-opacity-90 hover:shadow-md"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
