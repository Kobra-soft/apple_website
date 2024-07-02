import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Footer from "./components/Footer";
import * as Sentry from "@sentry/react";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      {/* <Navbar2 /> DELETE AFTER TESTING */}
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(App);
