import { About } from './components/About';
import { Background } from './components/Background';
import { Capabilities } from './components/Capabilities';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { useSpotlight } from './hooks/useSpotlight';

export default function App() {
  useSpotlight();
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Background />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Capabilities />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
