import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-paper overflow-x-hidden">
      <div className="layout-container flex grow flex-col">
        <Navbar />

        <div className="px-6 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex w-full max-w-[960px] flex-1 flex-col">
            {/* HERO */}
            <section className="@container">
              <div className="flex flex-col gap-6 px-4 py-10 @[480px]:gap-8 @[864px]:flex-row">
                <div className="relative w-full overflow-hidden rounded-lg @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-full aspect-[4/5] md:aspect-[16/10]">
                  <Image
                    src="/abel-hero.jpeg"
                    alt="Abel Albuez Sanchez"
                    fill
                    className="object-cover"
                    // mueve el encuadre hacia arriba
                    style={{ objectPosition: "50% 20%" }}
                    priority
                  />
                </div>

                <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center">
                  <div className="flex flex-col gap-2 text-left">
                    <h1 className="text-ink text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                      From lines of code to big ideas. Software and AI Engineer
                    </h1>
                    <h2 className="text-ink text-sm @[480px]:text-base">
                      I'm a software and AI engineer passionate about building innovative solutions. Explore my portfolio to see my work and learn more about my experience.
                    </h2>
                  </div>
                  <a
                    href="/blog"
                    className="inline-flex min-w-[84px] max-w-[480px] items-center justify-center rounded-lg h-12 px-5 bg-brand text-paper text-base font-bold tracking-[0.015em]"
                  >
                    Explore My Work
                  </a>
                </div>
              </div>
            </section>

            {/* BLOGS */}
            <h2 className="text-ink text-[22px] font-bold tracking-[-0.015em] px-4 pb-3 pt-5">Blogs</h2>
            {[
              {
                k: "1",
                tag: "Tech Insights",
                title: "The Future of AI in Software Development",
                desc: "Explore how AI is transforming software development, from automating tasks to enhancing code quality.",
              },
              {
                k: "2",
                tag: "Coding Tips",
                title: "Best Practices for Writing Clean Code",
                desc: "Learn essential tips and techniques for writing clean, maintainable, and efficient code.",
              },
              {
                k: "3",
                tag: "Project Showcase",
                title: "Building a Scalable Web Application",
                desc: "A case study on developing a scalable web application using modern technologies and best practices.",
              },
            ].map((b) => (
              <div key={b.k} className="p-4">
                <div className="flex items-stretch justify-between gap-4 rounded-lg">
                  <div className="flex flex-col gap-1 flex-[2_2_0px]">
                    <p className="text-muted text-sm">{b.tag}</p>
                    <p className="text-ink text-base font-bold leading-tight">{b.title}</p>
                    <p className="text-muted text-sm">{b.desc}</p>
                  </div>
                  <div className="w-full aspect-video rounded-lg bg-slate-200 flex-1" />
                </div>
              </div>
            ))}

            {/* Experiences Section */}
            <section className="px-8 py-10">
              <h2 className="text-2xl font-bold mb-6">Experiences</h2>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-semibold">Software Engineer – Clarika</h3>
                  <p className="text-sm text-gray-400">2024 - 2025 | Remote (Canada)</p>
                  <p className="text-gray-300">Worked on client portals, marketing automation, and real-time tracking systems.</p>
                </li>
                <li>
                  <h3 className="font-semibold">Software Engineer – Novatech Dev</h3>
                  <p className="text-sm text-gray-400">2023 - Present | Remote (US)</p>
                  <p className="text-gray-300">Built warranty management platforms using React, Next.js, and .NET Core.</p>
                </li>
              </ul>
            </section>

            {/* Education Section */}
            <section className="px-8 py-10">
              <h2 className="text-2xl font-bold mb-6">Education</h2>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-semibold">MSc in Computer Science</h3>
                  <p className="text-sm text-gray-400">2023 - Present | Universidad Pontificia Javeriana, Bogotá</p>
                </li>
                <li>
                  <h3 className="font-semibold">BSc in Software Engineering</h3>
                  <p className="text-sm text-gray-400">2018 - 2023 | Universidad Acción Pro y Cultura, Santo Domingo</p>
                </li>
              </ul>
            </section>


            {/* ADVENTURES */}
            <h2 className="text-ink text-[22px] font-bold tracking-[-0.015em] px-4 pb-3 pt-5">Adventures</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {["Exploring the Mountains", "Cityscape Views", "Coastal Retreat"].map((title, i) => (
                <div key={i} className="flex flex-col gap-3 pb-3">
                  <div className="w-full rounded-lg bg-slate-200 aspect-video" />
                  <div>
                    <p className="text-ink text-base font-medium leading-normal">{title}</p>
                    <p className="text-muted text-sm leading-normal">
                      {i === 0 && "Hiking through the scenic trails of the mountains."}
                      {i === 1 && "Capturing the vibrant city life and architecture."}
                      {i === 2 && "Relaxing by the serene coastline and enjoying the sea breeze."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
