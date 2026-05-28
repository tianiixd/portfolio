import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Reflection from "./components/Reflection";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="w-full min-h-dvh bg-background dark:bg-gray-900 transition-colors flex flex-col">
      <NavBar />
      <main className="grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Reflection />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
