import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";


export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Project />
    <Contact />
    </>
  );
}
