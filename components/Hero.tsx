import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  // Ultra-smooth easing curve (Quartic-like)
  const smoothEase = [0.77, 0, 0.175, 1];

  return (
    <div className="relative w-full h-[60svh] md:h-screen flex flex-row overflow-hidden bg-primary">
      
      {/* Left Panel - Orange */}
      <motion.div 
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.5, ease: smoothEase }}
        className="relative w-1/2 h-full bg-accent flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        
        {/* Text Container with Overflow Hidden for Reveal Effect */}
        <div className="relative overflow-hidden p-2 md:p-10">
             <motion.h1 
                initial={{ y: "120%" }}
                animate={{ y: "0%" }}
                transition={{ delay: 0.5, duration: 1.3, ease: smoothEase }}
                className="text-[13vw] md:text-[16vw] font-serif font-medium text-white leading-none tracking-tighter select-none mix-blend-soft-light"
            >
            DATA
            </motion.h1>
        </div>
        
        {/* Decorative Vertical Line */}
        <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "160px", opacity: 1 }}
            transition={{ delay: 1, duration: 1.2, ease: smoothEase }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] bg-white/40 block"
        />
      </motion.div>

      {/* Right Panel - Dark/Image */}
      <motion.div 
         initial={{ y: "-100%" }}
         animate={{ y: "0%" }}
         transition={{ duration: 1.5, ease: smoothEase }}
         className="relative w-1/2 h-full bg-stone-900 flex items-center justify-center overflow-hidden"
      >
         {/* Background Image with slow scale effect */}
         <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.img 
                initial={{ scale: 1.3, opacity: 0 }}
                animate={{ scale: 1.05, opacity: 0.4 }}
                transition={{ duration: 2.5, ease: "easeOut" }}
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" 
                alt="Portrait"
                className="w-full h-full object-cover grayscale" 
            />
            <div className="absolute inset-0 bg-stone-950/40 mix-blend-multiply"></div>
         </div>

         <div className="relative overflow-hidden z-10 p-2 md:p-10">
             <motion.h1 
                initial={{ y: "120%" }}
                animate={{ y: "0%" }}
                transition={{ delay: 0.6, duration: 1.3, ease: smoothEase }}
                className="text-[13vw] md:text-[16vw] font-serif font-medium text-white leading-none tracking-tighter select-none"
            >
            FOLIO
            </motion.h1>
         </div>
      </motion.div>

      {/* Bottom Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3 pointer-events-none"
      >
        <span className="text-[10px] font-bold tracking-[0.3em] text-white uppercase opacity-60">Scroll</span>
        <div className="w-[1px] h-8 md:h-12 bg-white/20 overflow-hidden relative">
             <motion.div 
               animate={{ y: ["-100%", "100%"] }}
               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-white"
             />
        </div>
      </motion.div>
    </div>
  );
};