import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Highlights from './components/Highlights';
import Model from './components/Model';
import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />

      {/* <Features />
      <HowItWorks />
      <Footer />  */}
    </main>
  )
}

export default Sentry.withProfiler(App);