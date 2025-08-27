import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden bg-[var(--background)] text-[var(--text-dark)]">
      <div className="layout-container flex grow flex-col">
        <Navbar />

        <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          {/* HERO */}
          <section className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            {/* Text */}
            <div className="order-2 md:order-1">
              <h1 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl">
                From lines of code to big ideas.
              </h1>
              <p className="mt-4 text-lg text-[var(--text-muted)]">
                I&apos;m a software and AI engineer passionate about building innovative solutions
                and exploring the intersection of technology and creativity.
              </p>
              <a
                href="/blog"
                className="mt-8 inline-flex items-center justify-center rounded-lg bg-[var(--primary)] px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-opacity-90 hover:shadow-xl"
              >
                Explore My Work
              </a>
            </div>

            {/* Portrait */}
            <div className="order-1 md:order-2">
              <div className="w-full max-w-sm mx-auto overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/abel-hero.jpeg"
                  alt="Portrait of Abel Albuez Sanchez"
                  width={500}
                  height={500}
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>
          </section>

          {/* BLOGS */}
          <section id="blogs" className="py-24">
            <h2 className="text-center text-3xl font-bold tracking-tight">Latest Blogs</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "The Future of AI in Software Development",
                  desc: "Exploring how AI is transforming the software development landscape.",
                },
                {
                  title: "Building Scalable Applications",
                  desc: "A deep dive into designing scalable applications with modern cloud platforms.",
                },
                {
                  title: "The Art of Clean Code",
                  desc: "Mastering the principles of clean code to write maintainable software.",
                },
              ].map((b, i) => (
                <article
                  key={i}
                  className="group transform rounded-2xl bg-[var(--card)] p-6 shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="mb-4 h-40 w-full overflow-hidden rounded-lg bg-[var(--highlight)]/40" />
                  <h3 className="text-lg font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm text-[var(--text-muted)]">{b.desc}</p>
                  <a
                    href="/blog"
                    className="mt-4 inline-block text-sm font-semibold text-[var(--primary)] transition-colors hover:text-[var(--accent)]"
                  >
                    Read More →
                  </a>
                </article>
              ))}
            </div>
          </section>

          {/* EXPERIENCES */}
          <section id="experiences" className="py-24">
            <h2 className="text-center text-3xl font-bold tracking-tight">
              Experiences
            </h2>
            <div className="mx-auto mt-12 max-w-2xl">
              <div className="relative border-l border-[var(--divider)]">
                {[
                  {
                    role: "Software Engineer — Clarika",
                    date: "2024 – 2025",
                  },
                  {
                    role: "Software Engineer — Novatech Dev",
                    date: "2023 – Present",
                  },
                ].map((exp, idx) => (
                  <div key={idx} className="relative pl-10 pb-12">
                    {/* Dot */}
                    <span className="absolute left-[-0.45rem] top-2 h-4 w-4 rounded-full bg-[var(--primary)] border-2 border-white shadow-md"></span>

                    {/* Content */}
                    <h3 className="text-lg font-semibold text-[var(--text-dark)]">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)]">{exp.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>


          {/* EDUCATION */}
          <section id="education" className="py-24">
            <h2 className="text-center text-3xl font-bold tracking-tight">Education</h2>
            <div className="mx-auto mt-12 grid max-w-3xl gap-8 md:grid-cols-2">
              <div className="rounded-2xl bg-[var(--card)] p-6 shadow-lg">
                <h3 className="text-lg font-semibold">Universidad Pontificia Javeriana, Bogotá</h3>
                <p className="text-sm text-[var(--text-muted)]">MSc in Computer Science (2023 – Present)</p>
              </div>
              <div className="rounded-2xl bg-[var(--card)] p-6 shadow-lg">
                <h3 className="text-lg font-semibold">Universidad Acción Pro y Cultura, Santo Domingo</h3>
                <p className="text-sm text-[var(--text-muted)]">BSc in Software Engineering (2018 – 2023)</p>
              </div>
            </div>
          </section>

          {/* ADVENTURES */}
          <section id="adventures" className="py-24">
            <h2 className="text-center text-3xl font-bold tracking-tight">Adventures</h2>
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="aspect-square w-full overflow-hidden rounded-2xl bg-[var(--card)] shadow-lg"
                >
                  <div className="h-full w-full bg-cover bg-center" />
                </div>
              ))}
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </main>
  );
}
