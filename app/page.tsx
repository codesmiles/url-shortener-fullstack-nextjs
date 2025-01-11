import Footer from "./components/blocks/Footer";
import Navbar from "./components/blocks/Navbar";
import Hero from "./components/blocks/Hero";
import Boost from "./components/blocks/Boost";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
      <Boost />
      <Footer />
    </>
  );
}
