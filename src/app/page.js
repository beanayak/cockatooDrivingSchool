import HeroSection from "./components/HeroSection";
import Testimonial from "./components/Testimonial";
import Facts from "./components/Facts";
import Contact from "./components/Contact";
import About from "./components/About";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Services from "./components/Services";
export default function Home() {
  return (
    <> 
      <HeroSection />
      <Facts />
      <Services />
      <About />
      <Contact />
      <Testimonial />
      <ScrollToTopButton />
    </>
  )
}
