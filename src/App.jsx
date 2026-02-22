import Navbar from "./Layouts/Navbar";
import Footer from "./Layouts/Footer";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Experience from "./Sections/Experience";
import Hero from "./Sections/Hero";
import Projects from "./Sections/Projects";
import Testimonials from "./Sections/Testimonials";
import Education from "./Sections/Education";
import Skills from "./Sections/Skills";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden ">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        {/* <Testimonials /> */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
