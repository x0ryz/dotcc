import { motion } from 'motion/react';
import { Cpu, Globe } from 'lucide-react';
import Card from '../ui/Card';
import { SKILLS, LANGUAGES, SOFT_SKILLS } from '../../data/content';
import { containerVariants, itemVariants } from '../../utils/animations';

const Skills = ({ className }) => {
  return (
    <Card className={`${className} flex flex-col bg-white`}>
      
      {/* --- SECTION 1: TECH STACK --- */}
      <div className="flex items-center gap-2 border-b-2 border-black pb-2 mb-3 sticky top-0 bg-white pt-1">
        <Cpu size={20} />
        <h2 className="font-black uppercase text-lg">Tech Stack</h2>
      </div>
      
      <motion.div 
        className="flex flex-col gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {SKILLS.map((group, i) => (
          <motion.div key={i} className="flex flex-col gap-1.5" variants={itemVariants}>
            <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">
              {group.title}
            </span>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, j) => (
                <motion.span 
                  key={j}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-2 py-1 text-xs font-bold cursor-default border border-black transition-colors bg-gray-100 text-gray-900 hover:bg-gray-200`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* --- SECTION 2: GENERAL --- */}
      <div className="flex items-center gap-2 border-b-2 border-black pb-2 mb-3 mt-6">
        <Globe size={20} />
        <h2 className="font-black uppercase text-lg">General</h2>
      </div>

      <motion.div 
        className="flex flex-col gap-4 pb-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Languages */}
        <motion.div className="flex flex-col gap-1.5" variants={itemVariants}>
          <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Languages</span>
          <div className="flex flex-col gap-1.5">
            {LANGUAGES.map((lang, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 2 }}
                className="flex justify-between items-center text-xs font-bold border border-black px-2 py-1.5 bg-gray-50"
              >
                <span>{lang.name}</span>
                <span className={`px-1.5 py-0.5 text-[10px] ${lang.level === 'Native' ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}>
                  {lang.level}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div className="flex flex-col gap-1.5" variants={itemVariants}>
          <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Soft Skills</span>
          <div className="flex flex-wrap gap-2">
            {SOFT_SKILLS.map((skill, i) => (
              <motion.span 
                key={i}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="px-2 py-1 border border-black text-xs font-bold bg-[#ffde59] cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </motion.div>

    </Card>
  );
};

export default Skills;