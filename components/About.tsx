import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Mail, Award, TrendingUp, Layers } from 'lucide-react';
import { EXPERIENCE, RESUME_DATA } from '../constants';

export const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20 flex flex-col items-start"
      >
        <h2 className="text-6xl md:text-7xl font-serif font-medium text-white mb-4">About</h2>
        <div className="w-full h-px bg-stone-800 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-24 h-full bg-accent"></div>
        </div>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Main Bio Card */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-2 bg-stone-900 border border-stone-800 p-10 hover:border-accent/50 transition-all duration-500 group"
        >
          <div className="flex items-center gap-4 mb-8">
             <div className="p-3 bg-accent text-primary">
                 <Layers className="w-6 h-6" />
             </div>
             <h3 className="text-2xl font-serif text-white">The Narrative</h3>
          </div>
          <p className="text-stone-400 leading-8 mb-8 text-lg font-light group-hover:text-stone-300 transition-colors">
            {RESUME_DATA.bio}
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-stone-400 font-mono uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" />
              {RESUME_DATA.location}
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-accent" />
              {RESUME_DATA.email}
            </div>
          </div>
        </motion.div>

        {/* Stats / Highlight Card */}
        <motion.div
          variants={itemVariants}
          className="bg-accent text-primary p-10 flex flex-col justify-between relative overflow-hidden group"
        >
           <div className="absolute top-0 right-0 p-32 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors duration-500"></div>
           
           <div className="space-y-12 relative z-10">
             <div>
               <div className="flex items-center gap-2 mb-2">
                 <TrendingUp className="w-5 h-5 text-primary" />
                 <div className="text-xs font-bold uppercase tracking-widest opacity-70">Experience</div>
               </div>
               <div className="text-6xl font-serif text-primary">6+ <span className="text-xl font-sans font-bold opacity-60">Years</span></div>
             </div>
             
             <div className="h-px bg-primary/20 w-full"></div>
             
             <div>
               <div className="flex items-center gap-2 mb-2">
                 <Award className="w-5 h-5 text-primary" />
                 <div className="text-xs font-bold uppercase tracking-widest opacity-70">Impact</div>
               </div>
               <div className="text-6xl font-serif text-primary">$10M+</div>
             </div>
           </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-3 bg-stone-900 border border-stone-800 p-10 md:p-14"
        >
          <h3 className="text-3xl font-serif text-white mb-12 flex items-center gap-4">
            <Briefcase className="w-6 h-6 text-accent" /> 
            Professional Journey
          </h3>
          <div className="space-y-16">
            {EXPERIENCE.map((job) => (
              <div key={job.id} className="grid grid-cols-1 md:grid-cols-4 gap-8 group">
                <div className="md:col-span-1">
                    <span className="text-sm font-mono text-accent block mb-2">{job.period}</span>
                    <h4 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{job.role}</h4>
                    <div className="text-stone-500 text-sm mt-1">{job.company}</div>
                </div>
                <div className="md:col-span-3 border-l border-stone-800 pl-8 relative">
                   <div className="absolute top-2 -left-[1px] w-0.5 h-8 bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                   <ul className="space-y-4">
                      {job.description.map((desc, idx) => (
                        <li key={idx} className="text-stone-400 leading-relaxed font-light">
                            {desc}
                        </li>
                      ))}
                    </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};