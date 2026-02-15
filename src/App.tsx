
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Background from './components/Background';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen text-white selection:bg-fuchsia-500/30">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Services />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
