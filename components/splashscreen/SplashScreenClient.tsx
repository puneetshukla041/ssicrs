"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen({ onComplete }: { onComplete?: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setMounted(true); // ensures no SSR render
  }, []);

  useEffect(() => {
    if (mounted) {
      const timer = setTimeout(() => {
        setShow(false);
        onComplete?.();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [mounted, onComplete]);

  if (!mounted) return null; // ✅ nothing during SSR

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
          <motion.img
            src="/Logos/splashscreen/splashlogo.png"
            alt="Splash Logo"
            className="w-40 h-40 object-contain"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      )}
    </AnimatePresence>
  );
}
