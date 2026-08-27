import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Featured from "./components/Featured";
import ArtMarquee from "./components/ArtMarquee";
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
        <Featured />
        <Experience />
        <Projects />
        <ArtMarquee />
        <AboutMe />
        <Research />
        <ArtGallery />
      </main>
      <Contact />
    </>
  );
}
