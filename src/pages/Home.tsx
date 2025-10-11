import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import Features from "../components/Features";
import JoinSection from "../components/JoinSection";

const Home = () => {
  const whatsapp = "https://chat.whatsapp.com/LxCZGjxPP0xH5FTyXoIeje";

  return (
    <main>
      <Navbar />

      <Hero whatsapp={whatsapp} />

      <AboutSection />

      <Features />

      <JoinSection whatsapp={whatsapp} />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Home;

