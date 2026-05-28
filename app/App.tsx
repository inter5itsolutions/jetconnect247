import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SplashScreen from '@/components/SplashScreen';
import Home from './Home';
import Fleet from './Fleet';
import AircraftDetail from './AircraftDetail';
import QuoteRequest from './QuoteRequest';
import Services from './Services';
import About from './About';
import Dashboard from './Dashboard';
import Blog from './Blog';
import Legal from './Legal';
import Contact from './Contact';
import Training from './Training';
import TrainingPromo from '@/components/TrainingPromo';
import TrainingFooter from '@/components/TrainingFooter';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function FooterSwitch() {
  const { pathname } = useLocation();
  return pathname === '/training' ? <TrainingFooter /> : <Footer />;
}

const SPLASH_MIN_MS = 2500;
const SPLASH_TIMEOUT_MS = 6000;

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  const dismissSplash = useCallback(() => setShowSplash(false), []);

  useEffect(() => {
    const onReady = () => dismissSplash();
    window.addEventListener('app:ready', onReady, { once: true });

    const minTimer = setTimeout(() => {
      window.removeEventListener('app:ready', onReady);
      dismissSplash();
    }, SPLASH_TIMEOUT_MS);

    // Enforce minimum splash duration for a polished feel
    const minSplash = setTimeout(() => {
      window.addEventListener('app:ready', onReady, { once: true });
    }, SPLASH_MIN_MS);

    return () => {
      clearTimeout(minTimer);
      clearTimeout(minSplash);
      window.removeEventListener('app:ready', onReady);
    };
  }, [dismissSplash]);

  return (
    <Router>
      <SplashScreen show={showSplash} />
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/fleet/:slug" element={<AircraftDetail />} />
            <Route path="/quote" element={<QuoteRequest />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/training" element={<Training />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/privacy" element={<Legal />} />
            <Route path="/terms" element={<Legal />} />
          </Routes>
        </main>
        <FooterSwitch />
      </div>
      <TrainingPromo />
    </Router>
  );
}
