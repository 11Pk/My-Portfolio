import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { achievements, resumeProjects as projects, skillGroups as categories } from "../profile-data";

function Journey({ stage, onNext }) {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [projectIndex, setProjectIndex] = useState(0);
    const lastWheel = useRef(0);
    const touchStart = useRef(null);
    const shownCategories = selectedCategory === "All"
        ? categories
        : categories.filter((category) => category.name === selectedCategory);
    const project = projects[projectIndex];

    const advance = useCallback(() => {
        if (stage === "projects" && projectIndex < projects.length - 1) {
            setProjectIndex((current) => current + 1);
        } else {
            onNext();
        }
    }, [onNext, projectIndex, stage]);

    useEffect(() => {
        const onKeyDown = (event) => {
            const activeElement = document.activeElement;
            if (event.key !== "Enter" || ["BUTTON", "A"].includes(activeElement?.tagName)) return;
            advance();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [advance]);

    const advanceOnScroll = (event) => {
        if (event.deltaY <= 0 || Date.now() - lastWheel.current < 850) return;
        lastWheel.current = Date.now();
        advance();
    };

    const handleTouchEnd = (event) => {
        if (touchStart.current === null) return;
        if (touchStart.current - event.changedTouches[0].clientY > 50) advance();
        touchStart.current = null;
    };

    return (
        <main onWheel={advanceOnScroll} onTouchStart={(event) => { touchStart.current = event.touches[0].clientY; }} onTouchEnd={handleTouchEnd} className="min-h-screen overflow-hidden bg-[#f4f5f1] px-5 py-10 text-[#182522] sm:px-10">
            <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-6xl flex-col">
                <header className="mb-12 flex items-center justify-between border-b border-[#182522]/15 pb-4 font-mono text-xs uppercase tracking-[0.16em] text-[#73807b]">
                    <span>Profile computation / Enter or scroll to continue</span>
                    <span>{stage === "skills" ? "02 / 04" : stage === "projects" ? "03 / 04" : "04 / 04"}</span>
                </header>

                {stage === "skills" && (
                    <section className="flex flex-1 flex-col justify-center">
                        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
                            <p className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-[#bb4b2f]">Capabilities / mapped</p>
                            <h1 className="max-w-3xl text-4xl font-semibold sm:text-6xl">A broad toolkit, arranged by what it builds.</h1>
                        </motion.div>
                        <div className="my-8 flex flex-wrap gap-2" aria-label="Filter skill categories">
                            {["All", ...categories.map((category) => category.name)].map((name) => (
                                <button key={name} onClick={() => setSelectedCategory(name)} aria-pressed={selectedCategory === name}
                                    className={`border px-3 py-2 font-mono text-xs transition ${selectedCategory === name ? "border-[#286c68] bg-[#286c68]/5 text-[#286c68]" : "border-[#182522]/20 text-[#53615c] hover:border-[#286c68]"}`}>
                                    {name}
                                </button>
                            ))}
                        </div>
                        <div className="mx-auto mb-6 flex items-center justify-center gap-3 font-mono text-[10px] uppercase tracking-wider text-[#73807b]">
                            <span className="grid h-9 w-9 place-items-center rounded-full border border-[#286c68] text-[#286c68]">PK</span>
                            <span className="h-px w-10 bg-[#286c68]/45" />
                            <span>Skills / grouped by domain</span>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {shownCategories.map((category, categoryIndex) => (
                                <motion.article key={category.name} initial={{ opacity: 0, scale: 0.25 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: categoryIndex * 0.11, type: "spring", stiffness: 110 }}
                                    className="border border-[#182522]/15 bg-white/70 p-5">
                                    <h2 className="mb-4 flex items-center gap-2 border-b border-[#182522]/10 pb-3 font-mono text-sm" style={{ color: category.color }}>
                                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: category.color }} />{category.name}
                                    </h2>
                                    <div className="grid grid-cols-2 gap-2">
                                        {category.skills.map((skill, index) => (
                                            <motion.span key={skill.name} initial={{ opacity: 0, scale: 0.35 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: categoryIndex * 0.1 + index * 0.06 }}
                                                className="flex min-w-0 items-center gap-2 border border-[#182522]/10 px-2 py-2 text-xs text-[#53615c]">
                                                {skill.logo ? <img src={skill.logo} alt="" className="h-5 w-5 shrink-0 object-contain" loading="lazy" /> : <span aria-hidden="true" className="grid h-5 w-5 shrink-0 place-items-center font-mono text-[9px] font-bold" style={{ color: category.color }}>{skill.name.slice(0, 2).toUpperCase()}</span>}
                                                <span className="leading-4">{skill.name}</span>
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                        <button onClick={onNext} className="mt-8 self-start border-b border-[#286c68] pb-1 font-mono text-xs text-[#286c68] hover:text-[#bb4b2f]">Explore projects ↓ / Enter</button>
                    </section>
                )}

                {stage === "projects" && (
                    <section className="flex flex-1 flex-col justify-center">
                        <div className="mb-7 flex items-end justify-between gap-4">
                            <div>
                                <p className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-[#bb4b2f]">Project stack / retrieval</p>
                                <h1 className="text-4xl font-semibold sm:text-6xl">Built, then shipped.</h1>
                            </div>
                            <span className="shrink-0 font-mono text-sm text-[#73807b]">{String(projectIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
                        </div>
                        <div className="grid gap-5 md:grid-cols-[13rem_1fr]">
                            <aside className="border border-[#182522]/15 bg-white/70 p-4">
                                <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-[#73807b]">Side stack / select build</p>
                                <div className="space-y-2">
                                    {projects.map((item, index) => <button key={item.id} type="button" onClick={() => setProjectIndex(index)} aria-current={projectIndex === index ? "true" : undefined} className={`w-full border-l-2 px-3 py-3 text-left transition ${projectIndex === index ? "border-[#bb4b2f] bg-[#bb4b2f]/5" : "border-[#182522]/15 hover:border-[#286c68]"}`}><span className="block font-mono text-[10px] text-[#73807b]">BUILD / 0{index + 1}</span><span className="mt-1 block text-sm font-semibold">{item.title}</span></button>)}
                                </div>
                            </aside>
                            <motion.article key={project.id} initial={{ opacity: 0, scale: 0.88, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.35 }} className="grid overflow-hidden border border-[#182522]/15 bg-white/75 md:grid-cols-[0.85fr_1.15fr]">
                                {project.image ? <div className="min-h-64 bg-[#182522]/5"><img src={project.image} alt={`${project.title} project preview`} className="h-full min-h-64 w-full object-cover" /></div> : <div className="flex min-h-64 flex-col justify-center bg-[#e9eeea] p-6"><p className="mb-5 font-mono text-[10px] uppercase tracking-wider text-[#73807b]">System architecture</p>{project.architecture.map((item, index) => <div key={item} className="flex items-center gap-3"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[#286c68]/40 font-mono text-[10px] text-[#286c68]">0{index + 1}</span><span className="text-sm text-[#53615c]">{item}</span></div>)}</div>}
                                <div className="flex flex-col justify-center p-6 sm:p-8">
                                    <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-[#286c68]">{project.subtitle}</p>
                                    <h2 className="mb-4 text-3xl font-semibold">{project.title}</h2>
                                    <p className="leading-7 text-[#53615c]">{project.description}</p>
                                    <div className="my-6 flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="border border-[#182522]/15 px-2.5 py-1 font-mono text-[10px] text-[#53615c]">{technology}</span>)}</div>
                                    <ul className="space-y-2 border-t border-[#182522]/10 pt-4">{project.outcomes.map((outcome) => <li key={outcome} className="text-sm text-[#286c68]">↗ {outcome}</li>)}</ul>
                                </div>
                            </motion.article>
                        </div>
                        <div className="mt-5 flex items-center justify-between">
                            <button onClick={() => setProjectIndex((index) => Math.max(index - 1, 0))} disabled={projectIndex === 0} className="font-mono text-xs text-[#53615c] hover:text-[#182522] disabled:opacity-30">← Previous project</button>
                            <button onClick={advance} className="font-mono text-xs text-[#286c68] hover:text-[#bb4b2f]">{projectIndex < projects.length - 1 ? "Retrieve next project →" : "View achievements →"}</button>
                        </div>
                    </section>
                )}

                {stage === "evidence" && (
                    <section className="flex flex-1 flex-col justify-center">
                        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[#bb4b2f]">Evidence / recognition</p>
                        <h1 className="mb-8 max-w-3xl text-4xl font-semibold sm:text-6xl">Results, contributions, and practice.</h1>
                        <div className="mb-8 grid grid-cols-3 border-y border-[#182522]/15 py-5 text-center sm:text-left">
                            <div><strong className="block font-mono text-3xl text-[#286c68]">600+</strong><span className="text-xs text-[#53615c]">LeetCode</span></div>
                            <div><strong className="block font-mono text-3xl text-[#bb4b2f]">TOP 5</strong><span className="text-xs text-[#53615c]">SIH nationally</span></div>
                            <div><strong className="block font-mono text-3xl text-[#aa6b17]">5+</strong><span className="text-xs text-[#53615c]">production PRs</span></div>
                        </div>
                        <div className="divide-y divide-[#182522]/15 border-y border-[#182522]/15">
                            {achievements.map((item, index) => <motion.article key={item.title} initial={{ opacity: 0, x: -22 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.08 }} className="grid gap-3 py-4 sm:grid-cols-[6rem_1fr]"><span className="font-mono text-xs text-[#286c68]">{item.metric}</span><div><h2 className="text-sm font-semibold">{item.title}</h2><p className="mt-1 text-sm leading-6 text-[#53615c]">{item.detail}</p></div></motion.article>)}
                        </div>
                        <button onClick={onNext} className="mt-8 self-start border-b border-[#286c68] pb-1 font-mono text-xs text-[#286c68] hover:text-[#bb4b2f]">Open the portfolio ↓ / Enter</button>
                    </section>
                )}
            </div>
        </main>
    );
}

export default Journey;
