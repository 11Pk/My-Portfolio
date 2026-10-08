import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { profile } from "../profile-data";

const targetName = "PRABHLEEN KAUR".split("");
const shuffledPositions = [6, 2, 8, 9, 1, 0, 12, 5, 4, 10, 3, 7, 11, 13];
const shuffledName = shuffledPositions.map((targetIndex) => ({ letter: targetName[targetIndex], targetIndex }));

function Intro({ onComplete }) {
    const [query, setQuery] = useState("");
    const [name, setName] = useState(shuffledName.map(({ letter }) => letter));
    const [sorting, setSorting] = useState(false);
    const [searchStarted, setSearchStarted] = useState(false);
    const [sorted, setSorted] = useState(false);
    const [sortProgress, setSortProgress] = useState(0);
    const [typed, setTyped] = useState(false);
    const started = useRef(false);
    const advanced = useRef(false);
    const sortTimer = useRef(null);

    useEffect(() => {
        if (typed) return undefined;
        let index = 0;
        const timer = window.setInterval(() => {
            index += 1;
            setQuery("Who is Prabhleen?".slice(0, index));
            if (index >= "Who is Prabhleen?".length) {
                window.clearInterval(timer);
                setTyped(true);
            }
        }, 75);
        return () => window.clearInterval(timer);
    }, [typed]);

    useEffect(() => () => window.clearTimeout(sortTimer.current), []);

    const advanceJourney = useCallback(() => {
        if (!sorted || advanced.current) return;
        advanced.current = true;
        onComplete();
    }, [onComplete, sorted]);

    const startJourney = () => {
        if (started.current) return;
        started.current = true;
        setSearchStarted(true);
        setSorting(true);

        const letters = [...shuffledName];
        let index = 1;
        let cursor = index;
        let key = letters[cursor];

        const step = () => {
            if (cursor > 0 && letters[cursor - 1].targetIndex > key.targetIndex) {
                letters[cursor] = letters[cursor - 1];
                cursor -= 1;
                setName(letters.map(({ letter }) => letter));
                sortTimer.current = window.setTimeout(step, 95);
                return;
            }

            letters[cursor] = key;
            setName(letters.map(({ letter }) => letter));
            index += 1;
            setSortProgress(Math.round((index / letters.length) * 100));
            if (index >= letters.length) {
                setSorting(false);
                setSorted(true);
                setName(targetName);
                return;
            }
            cursor = index;
            key = letters[cursor];
            sortTimer.current = window.setTimeout(step, 150);
        };

        sortTimer.current = window.setTimeout(step, 250);
    };

    useEffect(() => {
        if (!sorted) return undefined;
        const onWheel = (event) => {
            if (event.deltaY > 0) advanceJourney();
        };
        const onKeyDown = (event) => {
            if (event.key === "Enter") advanceJourney();
        };
        window.addEventListener("wheel", onWheel, { passive: true });
        window.addEventListener("keydown", onKeyDown);
        return () => {
            window.removeEventListener("wheel", onWheel);
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [advanceJourney, sorted]);

    const submitQuery = (event) => {
        event.preventDefault();
        startJourney();
    };

    return (
        <main className="relative flex min-h-screen items-center overflow-hidden bg-[#f4f5f1] px-5 text-[#182522]">
            <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative mx-auto w-full max-w-3xl"
            >
                <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-[#73807b]">
                    <span className="h-2 w-2 rounded-full bg-[#286c68]" />
                    Prabhleen Kaur / profile search
                </div>
                {!searchStarted && <h1 className="mb-8 text-4xl font-medium sm:text-6xl">Who is Prabhleen?</h1>}
                <form onSubmit={submitQuery} className="flex items-center gap-3 border-b border-[#182522]/25 pb-4 focus-within:border-[#286c68]">
                    <span className="font-mono text-xl text-[#286c68]">⌕</span>
                    <input
                        aria-label="Ask about Prabhleen"
                        value={query}
                        onChange={(event) => {
                            setTyped(true);
                            setQuery(event.target.value);
                        }}
                        onFocus={() => setTyped(true)}
                        placeholder="Who is Prabhleen?"
                        disabled={searchStarted}
                        className="min-w-0 flex-1 bg-transparent text-lg outline-none placeholder:text-[#73807b]/65 sm:text-xl"
                    />
                    <button type="submit" disabled={searchStarted} className="border border-[#182522] px-4 py-2 font-mono text-xs text-[#182522] transition hover:bg-[#182522] hover:text-white disabled:opacity-50">
                        {sorted ? "PROFILE READY" : searchStarted ? "SEARCHING..." : "SEARCH →"}
                    </button>
                </form>

                {searchStarted && <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="mt-12">
                    <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[#286c68]">Profile found / information technology · NIT Jalandhar</p>
                    <p className="mb-10 max-w-2xl text-base leading-7 text-[#53615c]">{profile.summary}</p>
                    <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[#73807b]">Identity / insertion sort</p>
                    <div aria-label="Prabhleen Kaur, letters being sorted" className="flex flex-wrap gap-x-1 font-mono text-4xl font-semibold sm:text-6xl">
                        {name.map((letter, index) => (
                            <motion.span
                                key={`${index}-${letter}`}
                                animate={{ color: sorting ? "#bb4b2f" : "#182522", y: sorting ? [0, -5, 0] : 0 }}
                                transition={{ duration: 0.25 }}
                                className={letter === " " ? "w-3 sm:w-5" : "inline-block"}
                            >
                                {letter === " " ? "\u00a0" : letter}
                            </motion.span>
                        ))}
                    </div>
                    <div className="mt-6 h-1.5 max-w-xl bg-[#182522]/10" role="progressbar" aria-label="Name insertion sort progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow={sortProgress}>
                        <motion.div className="h-full bg-[#286c68]" animate={{ width: `${sortProgress}%` }} transition={{ duration: 0.2 }} />
                    </div>
                    <p className="mt-3 font-mono text-xs text-[#73807b]">{sorting ? `Comparing positions · ${sortProgress}%` : sorted ? "Identity resolved · insertion sort complete" : "Preparing profile..."}</p>
                    {sorted && <button type="button" onClick={advanceJourney} className="mt-8 border-b border-[#286c68] pb-1 font-mono text-xs text-[#286c68] hover:text-[#bb4b2f]">Explore capabilities ↓ / Enter</button>}
                </motion.div>}
            </motion.div>
        </main>
    );
}

export default Intro;
