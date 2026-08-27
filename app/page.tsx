import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Research from "./components/Research";
import ArtGallery from "./components/ArtGallery";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Stats />
        <Experience />
        <Projects />
        <AboutMe />
        <Research />
        <ArtGallery />
      </main>
      <Contact />
    </>
  );
}
