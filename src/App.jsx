import Contact from "./components/Contact";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Tech from "./components/Tech";

function App() {
  return (
    <>
      <div class="[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] fixed -z-10 min-h-screen w-full"></div>

      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <NavBar />
        <Hero />
        <Tech />
        <Projects/>
        <Contact />
      </main>
    </>
  );
}

export default App;
