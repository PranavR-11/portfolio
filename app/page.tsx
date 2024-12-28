import './globals.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import ArtGallery from "./components/ArtGallery";
import Publications from "./components/Publications";
import Certifications from "./components/Certifications";


export default function Home() {
  return (
    <>
      <Navbar />
      <section id="hero" className="min-h-screen py-16 bg-transparent text-white">
        <Hero />
      </section>
      <section id="about" className="min-h-screen py-16 bg-transparent text-white">
        <AboutMe />
      </section>
      <section id="skills" className="min-h-screen py-16 bg-transparent text-white">
        <Skills />
      </section>
      <section
        id="education"
        className="min-h-screen py-16 bg-transparent text-white"
      >
        <Education />
      </section>
      <section
        id="workex"
        className="min-h-screen py-16 bg-transparent text-white"
      >
        <WorkExperience />
      </section>
      <section
        id="projects"
        className="min-h-screen py-16 bg-transparent text-white"
      >
        <Projects />
      </section>
      <section
        id="publications"
        className="min-h-screen py-16 bg-transparent text-white"
      >
        <Publications />
      </section>
      <section
        id="certifications"
        className="min-h-screen py-16 bg-transparent text-white"
      >
        <Certifications />
      </section>
      <section
        id="artgallery"
        className="min-h-screen py-16 bg-transparent text-white"
      >
        <ArtGallery />
      </section>
    </>
  );
}