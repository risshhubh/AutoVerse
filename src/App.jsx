import React, { useState, useEffect, useLayoutEffect } from 'react'
import { motion } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'
import { SMOOTH_TRANSITION } from './animationConstants';
import Lenis from 'lenis'
import CarModal from './components/CarModal'
import StaggeredMenu from './components/StaggeredMenu'
import Brands from './components/Brands';
import BodyStyles from './components/BodyStyles';
import CommandSearch from './components/CommandSearch';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Homepage from './components/Homepage';
import VehicleDetails from './components/VehicleDetails';
import 'lenis/dist/lenis.css'

const menuItems = [
  {
    label: 'Home',
    ariaLabel: 'Go to home page',
    link: '/'
  },
  {
    label: 'Body-Styles',
    ariaLabel: 'Filter by body style',
    link: '/body-styles',
    subItems: [
      { label: 'Sedan', link: '/body-styles#sedan' },
      { label: 'Hatchback', link: '/body-styles#hatchback' },
      { label: 'SUV', link: '/body-styles#suv' },
      { label: 'Coupe', link: '/body-styles#coupe' },
      { label: 'Electric', link: '/body-styles#electric' }
    ]
  },
  {
    label: 'Brands',
    ariaLabel: 'Filter by brand',
    link: '/brands',
    subItems: [
      { label: 'Toyota', link: '/brands#toyota' },
      { label: 'Honda', link: '/brands#honda' },
      { label: 'Ford', link: '/brands#ford' },
      { label: 'Tesla', link: '/brands#tesla' },
      { label: 'BMW', link: '/brands#bmw' }
    ]
  },
  { label: 'Experience', ariaLabel: 'Virtual experience', link: '/#experience' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
  { label: 'GitHub', link: 'https://github.com/risshhubh' },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/rishabh-srivastava-5a509232a/' }
];



import { WishlistProvider } from './context/WishlistContext';
import Wishlist from './components/Wishlist';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useLayoutEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

function App() {
  const [selectedCar, setSelectedCar] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Handle Search toggle
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };

    const handleOpenSearch = () => {
      setIsSearchOpen(true);
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open-search', handleOpenSearch);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-search', handleOpenSearch);
    };
  }, []);

  const handleSelectCarFromSearch = (car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  }

  // Initialize Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      delete window.lenis;
    }
  }, [])

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedCar(null)
  }

  return (
    <WishlistProvider>
      <div className="min-h-screen bg-pastel-light text-pastel-blue font-sans selection:bg-gradient-to-b from-transparent to-pastel-sky/10">
        <ScrollToTop />
        <CommandSearch
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onSelectCar={handleSelectCarFromSearch}
        />

        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#000000"
          openMenuButtonColor="#000000"
          changeMenuColorOnOpen={true}
          colors={['#000000', '#0A0A0A']}
          accentColor="#94A3B8"
          textColor="#94A3B8"
        />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/body-styles" element={<BodyStyles />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vehicle/:id" element={<VehicleDetails />} />
        </Routes>

        {/* Car Modal - Global */}
        <CarModal
          car={selectedCar}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />

        <Footer />
      </div>
    </WishlistProvider>
  )
}

export default App