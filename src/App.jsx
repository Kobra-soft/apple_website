import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Footer from "./components/Footer";
import * as Sentry from "@sentry/react";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Navbar2 />
      <Hero />
      <Highlights />
      <Model />
      <Footer />

      {/* <Features />
      <HowItWorks /> */}
    </main>
  );
};

export default Sentry.withProfiler(App);
