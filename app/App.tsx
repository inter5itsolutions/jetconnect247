// import { useState, useEffect, useCallback } from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import SplashScreen from '@/components/SplashScreen';
// import Home from './Home';
// import Fleet from './Fleet';
// import AircraftDetail from './AircraftDetail';
// import QuoteRequest from './QuoteRequest';
// import Services from './Services';
// import About from './About';
// import Dashboard from './Dashboard';
// import Blog from './Blog';
// import Legal from './Legal';
// import Contact from './Contact';
// import Training from './Training';
// import TrainingPromo from '@/components/TrainingPromo';
// import TrainingFooter from '@/components/TrainingFooter';
// import Maintenance from './Maintenance';

// function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }

// function FooterSwitch() {
//   const { pathname } = useLocation();
//   return pathname === '/training' ? <TrainingFooter /> : <Footer />;
// }

// const SPLASH_MIN_MS = 2500;
// const SPLASH_TIMEOUT_MS = 6000;

// export default function App() {
//   const [showSplash, setShowSplash] = useState(true);

//   const dismissSplash = useCallback(() => setShowSplash(false), []);

//   useEffect(() => {
//     const onReady = () => dismissSplash();
//     window.addEventListener('app:ready', onReady, { once: true });

//     const minTimer = setTimeout(() => {
//       window.removeEventListener('app:ready', onReady);
//       dismissSplash();
//     }, SPLASH_TIMEOUT_MS);

//     // Enforce minimum splash duration for a polished feel
//     const minSplash = setTimeout(() => {
//       window.addEventListener('app:ready', onReady, { once: true });
//     }, SPLASH_MIN_MS);

//     return () => {
//       clearTimeout(minTimer);
//       clearTimeout(minSplash);
//       window.removeEventListener('app:ready', onReady);
//     };
//   }, [dismissSplash]);

//   return (
//     <Router>
//       {/* <SplashScreen show={showSplash} />
//       <ScrollToTop /> */}
//       <div className="min-h-screen flex flex-col">
//         {/* <Navbar /> */}
//         <main className="flex-grow">
//           <Routes>
//             {/* <Route path="/" element={<Home />} /> */}
//             <Route path="/" element={<Maintenance />} />
//             {/* <Route path="/fleet" element={<Fleet />} /> */}
//             {/* <Route path="/fleet/:slug" element={<AircraftDetail />} /> */}
//             {/* <Route path="/quote" element={<QuoteRequest />} /> */}
//             {/* <Route path="/services" element={<Services />} /> */}
//             {/* <Route path="/about" element={<About />} /> */}
//             {/* <Route path="/contact" element={<Contact />} /> */}
//             {/* <Route path="/training" element={<Training />} /> */}
//             {/* <Route path="/dashboard" element={<Dashboard />} /> */}
//             {/* <Route path="/blog" element={<Blog />} /> */}
//             {/* <Route path="/privacy" element={<Legal />} /> */}
//             {/* <Route path="/terms" element={<Legal />} /> */}
//           </Routes>
//         </main>
//         {/* <FooterSwitch /> */}
//       </div>
//       {/* <TrainingPromo /> */}
//     </Router>
//   );
// }


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
import Maintenance from './Maintenance';

/* ------------------------------------------------------------------ */
/*  MAINTENANCE SWITCH                                                 */
/*                                                                     */
/*  Flip this ONE value to lock / unlock the whole site:               */
/*    true  -> every URL shows the Maintenance page only               */
/*    false -> the full app runs exactly as before                     */
/*                                                                     */
/*  Optional: override per deployment with an env var instead of       */
/*  editing code (Vite):  VITE_MAINTENANCE_MODE=false                  */
/* ------------------------------------------------------------------ */
const MAINTENANCE_DEFAULT = true;

const MAINTENANCE_MODE: boolean = (() => {
  return MAINTENANCE_DEFAULT;
})();

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

/* The original app, untouched. Only mounts when maintenance is OFF. */
function MainApp() {
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

export default function App() {
  // No router, splash, navbar or footer: whatever URL is visited,
  // the maintenance page is the only thing rendered.
  if (MAINTENANCE_MODE) return <Maintenance />;

  return <MainApp />;
}