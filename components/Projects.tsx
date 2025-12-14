import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';

export const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-6xl md:text-7xl font-serif font-medium text-white mb-4">Selected Work</h2>
        <div className="w-full h-px bg-stone-800 relative">
            <div className="absolute top-0 left-0 w-24 h-full bg-accent"></div>
        </div>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
            visible: { transition: { staggerChildren: 0.15 } }
        }}
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="group relative bg-stone-900 border border-stone-800 overflow-hidden hover:border-accent transition-colors duration-500"
          >
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply"></div>
              
              <div className="absolute top-4 right-4 flex gap-2">
                 {project.github && (
                  <a href={project.github} className="p-2 bg-black text-white hover:bg-accent transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {project.link && (
                  <a href={project.link} className="p-2 bg-black text-white hover:bg-accent transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                </h3>
                <div className="w-12 h-0.5 bg-stone-700 group-hover:bg-accent transition-colors duration-500"></div>
              </div>
              
              <p className="text-stone-400 text-sm mb-8 leading-relaxed font-light">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-stone-800 text-stone-400 group-hover:text-white transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Hover Indicator */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};