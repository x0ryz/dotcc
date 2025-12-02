import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';

// Utils & Data
import { containerVariants, itemVariants } from './utils/animations';
import { PERSONAL_INFO } from './data/content';

// Components
import Card from './components/ui/Card';
import Socials from './components/sections/Socials';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';

export default function App() {
  return (
    <div className="h-screen w-full bg-[#f0f0f0] p-6 flex items-center justify-center font-mono text-gray-900 selection:bg-black selection:text-white">

      {/* Grid Layout Configuration */}
      <motion.div
        className="grid w-full max-w-[1200px] h-full max-h-[950px] gap-4 grid-cols-[1.3fr_1fr_1fr_1.75fr] grid-rows-[0.3fr_0.4fr_1fr_0.7fr_1fr]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        <Card className="col-span-4 flex flex-row justify-between items-center px-8 py-8 bg-[#ffde59]">
          <div className="flex flex-col">
            <h1 className="text-4xl font-black uppercase tracking-tighter">{PERSONAL_INFO.name}</h1>
            <div className="flex items-center gap-2 mt-1">
              <Terminal size={18} />
              <span className="text-lg font-bold tracking-widest">{PERSONAL_INFO.role}</span>
            </div>
          </div>
        </Card>

        {/* 2. Photo Placeholder */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, rotate: -2 }}
          className="border-2 border-black bg-gray-200 flex items-center justify-center text-xs font-bold uppercase tracking-widest row-span-2 row-start-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group cursor-pointer"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-100 to-gray-400 opacity-50"></div>
          <span className="z-10">YOUR PHOTO</span>
        </motion.div>

        {/* 3. Socials Component */}
        <Socials className="col-span-2 row-start-2" />

        {/* 4. About Me (Structured) */}
        <Card className="col-span-2 col-start-2 row-start-3 flex flex-col justify-between p-5 bg-white">

          {/* Header */}
          <div className="flex justify-between items-start mb-2">
            <h2 className="font-black uppercase bg-black text-white px-2 py-0.5 text-sm inline-block">
              About Me
            </h2>
            <span className="font-mono text-[10px] text-gray-400 opacity-60">
              // WHOAMI
            </span>
          </div>

          {/* Main Text */}
          <p className="text-sm font-medium leading-relaxed mb-4 text-gray-800">
            I am an 18-year-old <span className="font-bold border-b-2 border-[#ffde59]">Computer Science student</span> (2nd year) based in Lutsk.
            My passion lies in the <b>Backend</b> — I love designing systems that are invisible but essential.
            Currently deep-diving into High-Load architectures.
          </p>

          {/* Footer Stats Grid */}
          <div className="grid grid-cols-2 gap-3 mt-auto pt-3 border-t-2 border-black border-dashed">

            {/* Education */}
            <div className="flex flex-col">
              <span className="text-[9px] font-black uppercase text-gray-400 tracking-wider">Education</span>
              <span className="text-xs font-bold leading-tight">LNTU, Ukraine</span>
              <span className="text-[10px] text-gray-500">Bachelor's Degree</span>
            </div>

            {/* Goals */}
            <div className="flex flex-col">
              <span className="text-[9px] font-black uppercase text-gray-400 tracking-wider">Career Goal</span>
              <span className="text-xs font-bold leading-tight">Junior Backend Dev</span>
              <span className="text-[10px] text-gray-500">Ready to start ASAP</span>
            </div>

          </div>
        </Card>

        {/* 5. Skills Component */}
        <Skills className="row-span-3 col-start-4 row-start-2" />

        {/* 6. Projects Component */}
        <Projects className="col-span-2 row-span-2 col-start-1 row-start-4" />

        {/* 7. Gif/Decorative Block */}
        <Card className="!p-0 border-2 border-black bg-gray-100 flex items-center justify-center text-gray-500 font-medium uppercase tracking-widest col-start-3 row-start-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]">
          {/* <span className="bg-white px-2 py-1 border border-black text-xs font-bold rotate-[-5deg]">YOUR GIF</span> */}
          <img src="https://i.pinimg.com/originals/06/e1/48/06e14860c81f156869cf228c3fcebbc8.gif" alt="" />
        </Card>

        {/* 8. Contact / Email */}
        <Card className="col-span-2 col-start-3 row-start-5 bg-[#7afcff] flex items-center justify-between px-8 hover:bg-[#5ce1e6] cursor-pointer transition-colors group">
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase mb-1">Open to collaboration?</span>
            <span className="text-2xl font-black group-hover:underline">{PERSONAL_INFO.email}</span>
          </div>
          <div className="bg-black text-white p-2 rounded-full group-hover:rotate-45 transition-transform">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
        </Card>

      </motion.div>
    </div>
  );
}