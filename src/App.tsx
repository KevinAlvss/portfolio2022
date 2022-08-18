import {
  AboutMe,
  Experiences,
  Footer,
  Presentation,
  Projects,
} from "./components";
import "aos/dist/aos.css";

function App() {
  return (
    <>
      <Presentation />
      <AboutMe />
      <Experiences />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
