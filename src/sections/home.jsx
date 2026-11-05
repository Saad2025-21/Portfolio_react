import HeroText from "../components/Herotxt.jsx";
import Astro from "../components/astronaut.jsx";
import Bg from "../components/bg.jsx";

const Home = () => {
  return (
    <section className="relative grid min-h-screen items-center overflow-hidden c-space bg-#0F121A md:grid-cols-[1.1fr_0.9fr]" id="home">
      <HeroText />
      <Astro />
      <Bg />
    </section>
  );
};


export default Home;