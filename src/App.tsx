import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { FeaturedWork } from './components/FeaturedWork';
import { CaseStudies } from './components/CaseStudies';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Experience } from "./components/Experience";
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Awards } from './components/Awards';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <FeaturedWork />
        <CaseStudies />
        <Skills />
        <About />
        <Experience />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
