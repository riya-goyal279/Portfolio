import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { FeaturedWork } from "./components/FeaturedWork";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Awards } from "./components/Awards";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { MGSelectProject } from "./pages/MGSelectProject";

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const timeout = setTimeout(() => {
      const element = document.querySelector(location.hash);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [location.pathname, location.hash]);

  return null;
}

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedWork />
      <Skills />
      <About />
      <Experience />
      <Awards />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/mg-select" element={<MGSelectProject />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
