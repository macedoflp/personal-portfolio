// Routing.tsx
import { Routes, Route } from 'react-router-dom';
import Template from '../template/Template.tsx';
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import Page404 from '../pages/Page404';

const Routing = () => {
  return (
    <Template>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/not-found" element={<Page404 />} />
      </Routes>
    </Template>
  );
};

export default Routing;
