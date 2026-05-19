import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Reflection from "./components/Reflection";

function App() {
  return (
    <div className="w-full min-h-dvh bg-background flex flex-col">
      <NavBar />
      <main className="grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Reflection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
