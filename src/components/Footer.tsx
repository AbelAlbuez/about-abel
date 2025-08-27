export default function Footer() {
  return (
    <footer className="flex justify-center">
      <div className="flex max-w-[960px] flex-1 flex-col">
        <div className="flex flex-col gap-6 px-5 py-10 text-center @container">
          <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
            <a className="text-muted text-base leading-normal min-w-40 hover:text-brand" href="/contact">Contact</a>
            <a className="text-muted text-base leading-normal min-w-40 hover:text-brand" href="/resume">Resume</a>
          </div>

          {/* Socials */}
          <div className="flex flex-wrap justify-center gap-4 text-muted">
            <a href="https://www.instagram.com/stackedbyabel/" target="_blank" rel="noopener noreferrer" className="hover:text-brand">
              Instagram
            </a>
            <a href="https://github.com/AbelAlbuez" target="_blank" rel="noopener noreferrer" className="hover:text-brand">
              GitHub
            </a>
            <a href="https://x.com/AbelAlbuez" target="_blank" rel="noopener noreferrer" className="hover:text-brand">
              X (Twitter)
            </a>
            <a href="https://www.youtube.com/@abelalbuez" target="_blank" rel="noopener noreferrer" className="hover:text-brand">
              YouTube
            </a>
          </div>

          <p className="text-muted">© {new Date().getFullYear()} Abel Albuez Sanchez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
