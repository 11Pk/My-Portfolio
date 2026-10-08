import { motion } from "motion/react";
import {
  achievements,
  education,
  experience,
  profile,
  resumeProjects,
  skillGroups,
} from "../profile-data";

const sections = ["about", "projects", "experience", "skills", "achievements", "contact"];

function SkillIcon({ skill }) {
  return skill.logo ? (
    <img className="h-5 w-5 object-contain" src={skill.logo} alt="" loading="lazy" />
  ) : (
    <span aria-hidden="true" className="grid h-5 w-5 place-items-center font-mono text-[10px] font-bold text-[#286c68]">
      {skill.name.slice(0, 2).toUpperCase()}
    </span>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-[#f4f5f1] text-[#182522]">
      <header className="sticky top-0 z-30 border-b border-[#182522]/10 bg-[#f4f5f1]/95 backdrop-blur">
        <nav aria-label="Portfolio sections" className="mx-auto flex max-w-6xl items-center gap-5 overflow-x-auto px-5 py-4 text-xs sm:gap-7">
          <a href="#about" className="shrink-0 font-mono font-semibold text-[#286c68]">PK / portfolio</a>
          {sections.map((section) => (
            <a key={section} href={`#${section}`} className="shrink-0 capitalize text-[#53615c] transition hover:text-[#bb4b2f]">{section}</a>
          ))}
          <a href="/Prabhleen-Kaur-Resume.pdf" download className="ml-auto shrink-0 border border-[#286c68] px-3 py-2 font-mono text-[11px] text-[#286c68] hover:bg-[#286c68] hover:text-white">Download CV ↓</a>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-5 sm:px-8">
        <section id="about" className="scroll-mt-24 border-b border-[#182522]/15 py-16 sm:py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_0.72fr] md:items-end">
            <div>
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.14em] text-[#bb4b2f]">Information Technology · NIT Jalandhar</p>
              <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] sm:text-7xl">Prabhleen Kaur</h1>
              <p className="mt-5 font-mono text-sm text-[#286c68]">Full-stack development / AI systems / algorithms</p>
            </div>
            <div className="border-l-2 border-[#bb4b2f] pl-5">
              <p className="text-base leading-7 text-[#53615c]">{profile.summary}</p>
              <div className="mt-7 grid grid-cols-2 gap-5 border-t border-[#182522]/15 pt-5 text-sm">
                <div><span className="block font-mono text-[10px] uppercase tracking-wider text-[#73807b]">Degree</span><span className="mt-1 block">{education.degree}</span></div>
                <div><span className="block font-mono text-[10px] uppercase tracking-wider text-[#73807b]">CGPA</span><span className="mt-1 block">{education.cgpa} / 10</span></div>
                <div className="col-span-2"><span className="block font-mono text-[10px] uppercase tracking-wider text-[#73807b]">Education</span><span className="mt-1 block">{education.school} · {education.dates}</span></div>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-[#182522]/15 pt-5">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#73807b]">Relevant coursework</span>
            <p className="mt-2 max-w-4xl text-sm leading-6 text-[#53615c]">{education.coursework}</p>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 border-b border-[#182522]/15 py-16 sm:py-20">
          <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
            <div><p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-[#bb4b2f]">Selected work / {String(resumeProjects.length).padStart(2, "0")}</p><h2 className="text-3xl font-semibold sm:text-4xl">Projects</h2></div>
            <span className="font-mono text-xs text-[#73807b]">Design → implementation → measured result</span>
          </div>
          <div className="divide-y divide-[#182522]/15 border-y border-[#182522]/15">
            {resumeProjects.map((project, index) => (
              <motion.article key={project.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4 }} className="grid gap-6 py-8 md:grid-cols-[4rem_1fr_0.8fr]">
                <span className="font-mono text-sm text-[#bb4b2f]">0{index + 1}</span>
                <div>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-1 font-mono text-xs text-[#286c68]">{project.subtitle}</p>
                  <p className="mt-4 max-w-xl text-sm leading-6 text-[#53615c]">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="border border-[#182522]/15 px-2 py-1 font-mono text-[10px] text-[#53615c]">{technology}</span>)}</div>
                </div>
                <div className="md:border-l md:border-[#182522]/10 md:pl-6">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#73807b]">Implementation</span>
                  <div className="mt-3 flex flex-wrap gap-2">{project.architecture.map((item, itemIndex) => <span key={item} className="border-l-2 px-2 py-1 text-xs" style={{ borderColor: ["#bb4b2f", "#286c68", "#aa6b17", "#4f5c98"][itemIndex % 4] }}>{item}</span>)}</div>
                  <ul className="mt-5 space-y-2">{project.outcomes.map((outcome) => <li key={outcome} className="flex gap-2 text-xs leading-5 text-[#53615c]"><span className="text-[#286c68]">↗</span>{outcome}</li>)}</ul>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="experience" className="scroll-mt-24 border-b border-[#182522]/15 py-16 sm:py-20">
          <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-[#bb4b2f]">Leadership / community</p>
          <h2 className="mb-8 text-3xl font-semibold sm:text-4xl">Experience</h2>
          <div className="divide-y divide-[#182522]/15 border-y border-[#182522]/15">
            {experience.map((item) => (
              <article key={item.organization} className="grid gap-2 py-5 sm:grid-cols-[1fr_auto] sm:gap-8">
                <div><h3 className="font-semibold">{item.role} <span className="font-normal text-[#53615c]">· {item.organization}</span></h3><p className="mt-2 max-w-3xl text-sm leading-6 text-[#53615c]">{item.detail}</p></div>
                <span className="font-mono text-xs text-[#73807b]">{item.date}</span>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-[#53615c]"><span className="font-semibold text-[#182522]">Debate:</span> Rahat Debate Tournament, Asian Parliamentary format; competed against 70+ teams over 5+ rounds.</p>
        </section>

        <section id="skills" className="scroll-mt-24 border-b border-[#182522]/15 py-16 sm:py-20">
          <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-[#bb4b2f]">Technical toolkit</p>
          <h2 className="mb-8 text-3xl font-semibold sm:text-4xl">Skills</h2>
          <div className="grid gap-x-10 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.name} className="border-t border-[#182522]/15 py-5">
                <h3 className="mb-4 font-mono text-xs" style={{ color: group.color }}>{group.name}</h3>
                <ul className="flex flex-wrap gap-x-5 gap-y-3">{group.skills.map((skill) => <li key={skill.name} className="flex items-center gap-2 text-sm"><SkillIcon skill={skill} /><span>{skill.name}</span></li>)}</ul>
              </div>
            ))}
            <div className="border-t border-[#182522]/15 py-5"><h3 className="mb-4 font-mono text-xs text-[#aa6b17]">Collaboration</h3><p className="text-sm text-[#53615c]">Leadership · Event Management · Public Speaking</p></div>
          </div>
        </section>

        <section id="achievements" className="scroll-mt-24 border-b border-[#182522]/15 py-16 sm:py-20">
          <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-[#bb4b2f]">Evidence / recognition</p>
          <h2 className="mb-8 text-3xl font-semibold sm:text-4xl">Achievements</h2>
          <div className="mb-8 grid grid-cols-3 border-y border-[#182522]/15 py-5 text-center sm:text-left">
            <div><strong className="block text-2xl font-semibold text-[#286c68]">600+</strong><span className="text-xs text-[#53615c]">LeetCode problems</span></div>
            <div><strong className="block text-2xl font-semibold text-[#bb4b2f]">TOP 5</strong><span className="text-xs text-[#53615c]">SIH 2025</span></div>
            <div><strong className="block text-2xl font-semibold text-[#aa6b17]">1ST</strong><span className="text-xs text-[#53615c]">HackMol 7.0 · Women’s Track</span></div>
          </div>
          <div className="divide-y divide-[#182522]/15">
            {achievements.map((item) => <article key={item.title} className="grid gap-2 py-4 sm:grid-cols-[6rem_1fr]"><span className="font-mono text-xs text-[#286c68]">{item.metric}</span><div><h3 className="text-sm font-semibold">{item.title}</h3><p className="mt-1 text-sm leading-6 text-[#53615c]">{item.detail}</p></div></article>)}
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 py-16 sm:py-20">
          <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
            <div><p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-[#bb4b2f]">Contact</p><h2 className="text-3xl font-semibold sm:text-4xl">Let’s make useful things.</h2><div className="mt-6 flex flex-col items-start gap-3 text-sm sm:flex-row sm:gap-7"><a className="text-[#286c68] hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a><a className="text-[#286c68] hover:underline" href={`tel:${profile.phone.replaceAll(" ", "")}`}>{profile.phone}</a><a className="text-[#286c68] hover:underline" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a></div></div>
            <a href="/Prabhleen-Kaur-Resume.pdf" download className="inline-flex items-center gap-3 border border-[#182522] px-4 py-3 font-mono text-xs transition hover:bg-[#182522] hover:text-white"><span aria-hidden="true">↓</span> Download Resume</a>
          </div>
          <footer className="mt-12 flex flex-wrap justify-between gap-3 border-t border-[#182522]/15 pt-4 font-mono text-[10px] text-[#73807b]"><span>Prabhleen Kaur · NIT Jalandhar</span><button type="button" onClick={() => window.print()} className="hover:text-[#286c68]">Print / Save PDF</button></footer>
        </section>
      </main>
    </div>
  );
}

export default Portfolio;
