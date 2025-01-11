import Footer from "./components/blocks/Footer";
import Navbar from "./components/blocks/Navbar";
import Hero from "./components/blocks/Hero";
import Statistics from "./components/blocks/Statistics";
import Boost from "./components/blocks/Boost";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Statistics />
      </main>
      <Boost />
      <Footer />
    </>
  );
}
