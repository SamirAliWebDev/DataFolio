import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-accent text-primary px-8 py-20 md:p-24 overflow-hidden text-center"
      >
        {/* Decorative Typography Background */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none opacity-10">
            <span className="text-[20vw] font-serif font-black leading-none text-white">HIRE</span>
        </div>

        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-serif font-medium text-white mb-8">Ready to Scale?</h2>
          <p className="text-primary/80 mb-12 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            I'm currently available for freelance projects and full-time opportunities. 
            Let's turn your raw data into your biggest competitive advantage.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
             <a 
                href="mailto:alex.analytics@datafolio.dev"
                className="group relative px-10 py-5 bg-primary text-white text-lg font-bold uppercase tracking-widest overflow-hidden hover:text-accent transition-colors duration-300"
              >
                <span className="relative z-10 flex items-center gap-3">
                    Start Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
             </a>
             
             <div className="flex gap-4">
                 <a href="#" className="p-4 border border-primary/20 hover:bg-primary hover:text-white transition-colors duration-300">
                    <Linkedin className="w-6 h-6" />
                 </a>
                 <a href="#" className="p-4 border border-primary/20 hover:bg-primary hover:text-white transition-colors duration-300">
                    <Twitter className="w-6 h-6" />
                 </a>
             </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};