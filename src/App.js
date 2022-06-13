import TitleSlide from "./title slide";
import AboutMe from "./about me";
import Projects from "./projects";
import Accomplishments from "./accomplishments";
import Navbar from "./navbar";

function App() {
  return (
    <>
      <TitleSlide />
      <AboutMe />
      <Projects id="projects" />
      <Accomplishments id="accomplishments" />
      <Navbar />
    </>
  );
}

export default App;