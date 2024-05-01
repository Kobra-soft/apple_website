/* import Hero from './components/Hero'; */
import Navbar from './components/Navbar';
import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Navbar />
      <Navbar />
      <Navbar />
      <Navbar />
      <Navbar />
      <Navbar />
      <Navbar />
      <Navbar />
      <Navbar />
      <Navbar />
      <Navbar />
      <Navbar />
      <Navbar />
      <Navbar />
      <Navbar />
      <Navbar />
      {/* <Hero /> */}
      {/* <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer /> */}
    </main>
  )
}

export default Sentry.withProfiler(App);