import Intro from "./sections/intro"
import Skills from "./sections/skills"
import Projects from"./sections/projects"
import LeetCodeStats from "./components/leetcode-stats";
import Reviews from "./components/reviews";
// import Landing from "./sections/landing"
function App() {
  return (
    <div>
      
    <Intro></Intro>
    <Skills></Skills>
    <Projects></Projects>
    
		<LeetCodeStats />
		<Reviews />
	
    </div>
  );
}

export default App;
