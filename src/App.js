import { useState } from "react";
import Intro from "./sections/intro";
import Journey from "./sections/journey";
import Portfolio from "./sections/portfolio";

function App() {
  const [stage, setStage] = useState("search");

  const advanceJourney = () => {
    setStage((current) =>
      current === "skills"
        ? "projects"
        : current === "projects"
          ? "evidence"
          : "portfolio",
    );
  };

  return (
    <div>
      {stage === "search" && <Intro onComplete={() => setStage("skills")} />}
      {["skills", "projects", "evidence"].includes(stage) && (
        <Journey stage={stage} onNext={advanceJourney} />
      )}
      {stage === "portfolio" && <Portfolio />}
    </div>
  );
}

export default App;
