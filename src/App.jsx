import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/home";
import About from "./sections/about";
import Projects from "./sections/projects";
import Skills from "./sections/skills";
import Contacts from "./sections/contacts";
import Footer from "./sections/footer";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Foreground */}
      <main className="relative z-10">
        <div className="container mx-auto max-w-7xl">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contacts />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default App;