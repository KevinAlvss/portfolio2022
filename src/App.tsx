import {
  AboutMe,
  Experiences,
  Footer,
  Presentation,
  Projects,
} from "./components";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

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
