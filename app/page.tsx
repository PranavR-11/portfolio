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
      <Hero />
      <AboutMe />
      <Skills />
      <Education />
      <WorkExperience />
      <Projects />
      <Publications />
      <Certifications />
      <ArtGallery />
    </>
  );
}