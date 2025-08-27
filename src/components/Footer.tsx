export default function Footer() {
  return (
    <footer className="border-t border-[var(--divider)] bg-[var(--card)]">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex gap-6">
            <a className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text-dark)]" href="/contact">Contact</a>
            <a className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text-dark)]" href="/resume">Resume</a>
          </div>

          <div className="flex gap-6">
            <a className="transition-colors text-[var(--text-muted)] hover:text-[var(--primary)]" href="https://www.instagram.com/stackedbyabel/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
            <a className="transition-colors text-[var(--text-muted)] hover:text-[var(--primary)]" href="https://github.com/AbelAlbuez" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
            <a className="transition-colors text-[var(--text-muted)] hover:text-[var(--primary)]" href="https://x.com/AbelAlbuez" target="_blank" rel="noopener noreferrer" aria-label="X">X</a>
            <a className="transition-colors text-[var(--text-muted)] hover:text-[var(--primary)]" href="https://www.youtube.com/@abelalbuez" target="_blank" rel="noopener noreferrer" aria-label="YouTube">YouTube</a>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-[var(--text-muted)]">
          © {new Date().getFullYear()} Abel Albuez Sanchez. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
