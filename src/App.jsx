import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
