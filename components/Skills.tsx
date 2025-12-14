import React from 'react';
import { motion } from 'framer-motion';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from 'recharts';
import { SKILLS } from '../constants';

export const Skills: React.FC = () => {
  const techSkills = SKILLS.filter(s => s.category === 'Technical' || s.category === 'Analytical');
  const toolSkills = SKILLS.filter(s => s.category === 'Tools');

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-stone-900 border border-accent/20 p-4 shadow-xl">
          <p className="text-white font-serif mb-2 text-lg">{label}</p>
          <div className="flex items-center gap-3">
             <div className="w-32 bg-stone-800 h-1">
                <div className="h-full bg-accent" style={{width: `${payload[0].value}%`}}></div>
             </div>
             <p className="text-accent text-xs font-mono font-bold">{payload[0].value}%</p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-6xl md:text-7xl font-serif font-medium text-white mb-4">Expertise</h2>
        <div className="w-full h-px bg-stone-800 relative">
            <div className="absolute top-0 left-0 w-24 h-full bg-accent"></div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Radar Chart for Core Competencies */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-stone-900/50 border border-stone-800 p-6 md:p-8 h-[500px] relative"
        >
          <h3 className="text-2xl font-serif text-white mb-8 text-center italic">Core Competencies</h3>
          <ResponsiveContainer width="100%" height="85%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={techSkills}>
              <PolarGrid stroke="#44403c" />
              <PolarAngleAxis dataKey="name" tick={{ fill: '#a8a29e', fontSize: 12, dy: 4, fontFamily: 'Inter', fontWeight: 600, letterSpacing: '0.05em' }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
              <Radar
                name="Skills"
                dataKey="level"
                stroke="#ff4d00"
                strokeWidth={2}
                fill="#ff4d00"
                fillOpacity={0.4}
              />
              <Tooltip content={<CustomTooltip />} cursor={false} />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Bar Chart for Tools */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-stone-900/50 border border-stone-800 p-6 md:p-8 h-[500px] relative"
        >
          <h3 className="text-2xl font-serif text-white mb-8 text-center italic">Tools & Frameworks</h3>
          <ResponsiveContainer width="100%" height="85%">
            <BarChart
              layout="vertical"
              data={toolSkills}
              margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
            >
              <XAxis type="number" domain={[0, 100]} hide />
              <YAxis dataKey="name" type="category" width={120} tick={{ fill: '#a8a29e', fontSize: 12, fontWeight: 500 }} />
              <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(255, 77, 0, 0.1)'}} />
              <Bar dataKey="level" barSize={24} animationDuration={1500}>
                {toolSkills.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#ff4d00' : '#ea580c'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
};