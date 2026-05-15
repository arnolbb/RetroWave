/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Moon, Sun, Monitor, Radio } from 'lucide-react';
import SpaceInvaders from './components/SpaceInvaders';
import AudioPlayer from './components/AudioPlayer';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('neon-theme');
    return saved ? saved === 'dark' : true;
  });
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('neon-invaders-highscore');
    return saved ? parseInt(saved, 10) : 0;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('neon-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('neon-theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleScoreUpdate = (score: number) => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('neon-invaders-highscore', score.toString());
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden flex flex-col font-sans">
      {/* Background Layer moved to layout wrapper for better dark mode support */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#f7e8ff] to-[#e4c1ff] dark:from-[#0b0114] dark:to-[#1a1025] transition-colors duration-500" />
      
      {/* Animated Vaporwave Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-[40vh] md:h-[60vh] vaporwave-grid">
           <div className="h-full w-full vaporwave-grid-inner animate-grid-drift" />
        </div>
      </div>

      {/* Retro Sun / Backdrop */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 z-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
        <div className="w-full h-full rounded-full bg-gradient-to-t from-neon-pink via-neon-purple to-transparent opacity-20 dark:opacity-30 blur-2xl" />
        <div className="absolute inset-0 rounded-full border-b-8 border-neon-pink/40 translate-y-4" />
      </div>

      {/* Main Content */}
      <header className="relative z-20 flex justify-between items-center p-4 md:p-6 lg:px-12">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-neon-pink rounded-lg shadow-lg shadow-neon-pink/20">
            <Radio className="text-white w-5 h-5 md:w-6 md:h-6" />
          </div>
          <div>
            <h1 className="text-lg md:text-2xl font-bold tracking-tighter italic text-neon-purple dark:text-white uppercase leading-none">
              Retro<span className="text-neon-pink">Wave</span>
            </h1>
            <p className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] opacity-60 font-mono">System v4.2.0</p>
          </div>
        </div>

        <button 
          onClick={toggleDarkMode}
          className="p-3 glass-morphism rounded-full hover:scale-110 transition-transform text-neon-purple dark:text-neon-yellow shadow-xl"
        >
          {darkMode ? <Sun className="w-5 h-5 md:w-6 md:h-6" /> : <Moon className="w-5 h-5 md:w-6 md:h-6" />}
        </button>
      </header>

      <main className="relative z-10 flex-1 flex flex-col items-center p-4 gap-8 lg:gap-12 lg:flex-row lg:items-start lg:justify-center">
        {/* Left Side: Instructions / Meta */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden xl:flex flex-col gap-6 w-64 mt-20"
        >
          <div className="glass-morphism p-4 rounded-xl border-l-4 border-l-neon-pink">
            <h4 className="text-xs uppercase tracking-widest font-bold text-neon-pink mb-2">Operation</h4>
            <p className="text-sm opacity-70 leading-relaxed font-mono">Defend the sector against the digital invasion. Use the synth rhythms to maintain focus.</p>
          </div>
          
          <div className="glass-morphism p-4 rounded-xl border-l-4 border-l-neon-blue">
            <h4 className="text-xs uppercase tracking-widest font-bold text-neon-blue mb-2">Hardware</h4>
            <div className="text-[10px] space-y-2 font-mono opacity-50">
              <p>CPU: GENESIS-9000</p>
              <p>RAM: 64KB NEON-CORE</p>
              <p>GFX: SCANLINE-RTX</p>
            </div>
          </div>
        </motion.div>

        {/* Center: Game Window */}
        <div className="flex flex-col items-center w-full max-w-full overflow-hidden">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 15 }}
            className="relative w-full flex justify-center"
          >
             <div className="absolute -inset-4 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue rounded-xl blur-2xl opacity-10 animate-pulse hidden md:block" />
             <div className="w-full max-w-[600px]">
                <SpaceInvaders onScoreUpdate={handleScoreUpdate} highScore={highScore} />
             </div>
          </motion.div>
        </div>

        {/* Right Side: Music Player & Stats */}
        <div className="w-full max-w-md flex flex-col gap-6">
          <AudioPlayer />
          
          <div className="glass-morphism p-6 rounded-2xl flex flex-col gap-4">
            <div className="flex items-center gap-2 text-neon-blue">
               <Monitor className="w-4 h-4" />
               <h3 className="text-xs uppercase tracking-widest font-bold">System Status</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Latency', value: '1.2ms' },
                { label: 'Uptime', value: '100%' },
                { label: 'Signal', value: 'Stable' },
                { label: 'Mood', value: 'Synth' }
              ].map((item, i) => (
                <div key={i} className="bg-black/5 dark:bg-black/20 p-3 rounded-lg border border-white/10">
                  <p className="text-[9px] uppercase tracking-tighter opacity-50">{item.label}</p>
                  <p className="text-sm font-mono text-neon-blue dark:text-neon-blue">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="relative z-20 p-8 text-center text-[10px] opacity-40 font-mono tracking-widest uppercase">
          &copy; 198X Cyber-Entertainment Systems | Built with Neon
      </footer>

      {/* Global Filter Effects */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden mix-blend-overlay opacity-20">
        <div className="absolute inset-0 scanline" />
        <div className="scanline-beam animate-scanline" />
      </div>
    </div>
  );
}
