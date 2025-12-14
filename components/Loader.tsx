import React from 'react';
import { motion } from 'framer-motion';

export const Loader: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-accent"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
    >
      <div className="relative overflow-hidden flex gap-4 md:gap-12">
        <motion.h2
          className="text-[10vw] font-serif font-medium text-white text-center leading-none tracking-tighter"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
        >
          DATA
        </motion.h2>
        <motion.h2
          className="text-[10vw] font-serif font-medium text-white text-center leading-none tracking-tighter"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1, delay: 0.1, ease: [0.77, 0, 0.175, 1] }}
        >
          FOLIO
        </motion.h2>
      </div>
      
      <motion.div 
        className="mt-8 flex gap-2 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
        <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0.1s]"></div>
        <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0.2s]"></div>
      </motion.div>
    </motion.div>
  );
};