import Template from "./template/Template";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
const App = () => {
  return (
    <Template>
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
    </Template>
  );
};

export default App;
