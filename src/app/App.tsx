import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';

export default function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // After intro animation, show main content
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="size-full min-h-screen bg-[#0a0a0f] overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!showContent ? (
          <Hero key="hero" />
        ) : (
          <Portfolio key="portfolio" />
        )}
      </AnimatePresence>
    </div>
  );
}
