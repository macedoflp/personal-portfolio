// Routing.tsx
import { Routes, Route } from 'react-router-dom';
import Template from '../template/template.tsx';
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';

const Routing = () => {
  return (
    <Template>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Template>
  );
};

export default Routing;
