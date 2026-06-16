import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Activity, Cpu, Radio, Terminal } from 'lucide-react';
import SpaceInvaders from './components/SpaceInvaders';
import AudioPlayer from './components/AudioPlayer';

export default function App() {
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('neon-invaders-highscore');
    return saved ? parseInt(saved, 10) : 0;
  });

  // Dynamic system status values
  const [metrics, setMetrics] = useState({
    cpu: '18%',
    ram: '42KB',
    temp: '44°C',
    signal: 'STABLE'
  });

  // Simulate hardware metrics fluctuations
  useEffect(() => {
    const interval = setInterval(() => {
      const cpuVal = Math.floor(12 + Math.random() * 15);
      const ramVal = Math.floor(38 + Math.random() * 8);
      const tempVal = Math.floor(40 + Math.random() * 6);
      setMetrics({
        cpu: `${cpuVal}%`,
        ram: `${ramVal}KB`,
        temp: `${tempVal}°C`,
        signal: Math.random() > 0.95 ? 'SIGNAL NOISE' : 'STABLE'
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleScoreUpdate = (score: number) => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('neon-invaders-highscore', score.toString());
    }
  };

  return (
    <div className="h-screen relative overflow-hidden flex flex-col font-sans transition-colors duration-500">

      <div className="fixed inset-0 z-0 bg-[#09030f]" />
      <div className="fixed inset-0 z-0 pointer-events-none crt-vignette" />

      {/* Vaporwave 3D Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-[45vh] md:h-[60vh] vaporwave-grid">
           <div className="h-full w-full vaporwave-grid-inner animate-grid-drift" />
        </div>
      </div>

      {/* Main header block */}
      <header className="relative z-20 h-20 shrink-0 flex items-center px-5 md:px-8 lg:px-12 border-b border-white/10 bg-[#0d0713]/92">
        <div className="flex items-center gap-3.5">
          <div className="relative grid h-11 w-11 place-items-center rounded-lg border border-neon-pink/60 bg-[#18091f]">
            <Radio className="h-5 w-5 text-neon-pink" />
            <span className="absolute -bottom-1 h-px w-7 bg-neon-blue/70" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold italic text-white uppercase leading-none tracking-normal">
              RETRO<span className="text-neon-pink">WAVE</span>
            </h1>
            <p className="text-[8px] md:text-[9px] uppercase tracking-[0.28em] text-white/55 font-mono mt-1">Neon Arcade Core v4.5.1</p>
          </div>
        </div>
      </header>

      {/* Main responsive grid layout */}
      <main className="relative z-10 flex-1 min-h-0 flex flex-col items-center gap-4 p-3 md:p-4 lg:flex-row lg:items-start lg:justify-center lg:px-8 xl:px-10 max-w-[1536px] mx-auto w-full">

        {/* Left Side: System Information & Console Logs */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="hidden xl:flex flex-col gap-4 w-64 xl:w-72 shrink-0"
        >
          <div className="arcade-panel p-4">
            <div className="flex items-center gap-2 mb-2 text-neon-pink">
              <Terminal className="w-4 h-4" />
              <h4 className="text-xs uppercase tracking-[0.16em] font-bold font-mono">MISSION LOG</h4>
            </div>
            <p className="text-[11px] text-white/70 leading-relaxed font-mono">
              Incoming wave. Move with A/D or arrows, fire with Space, and clear the formation before it reaches the grid.
            </p>
          </div>

          <div className="arcade-panel p-4">
            <div className="flex items-center gap-2 mb-2 text-neon-blue">
              <Cpu className="w-4 h-4" />
              <h4 className="text-xs uppercase tracking-[0.16em] font-bold font-mono">ARCADE STATUS</h4>
            </div>
            <div className="text-[10px] space-y-2 font-mono text-white/55">
              <p>CPU: GENESIS-9000-X</p>
              <p>RAM: 64KB DUAL-NEON</p>
              <p>GFX: SCANLINE-EMU-RT</p>
              <p>SND: FM-SYNTH-AUDIO</p>
            </div>
          </div>
        </motion.div>

        {/* Center: Game Cabinet Frame */}
        <div className="flex min-h-0 flex-col items-center w-full flex-1 max-w-[700px] 2xl:max-w-[760px] overflow-hidden">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 15 }}
            className="relative w-full flex justify-center"
          >
             <div className="w-full">
                <SpaceInvaders onScoreUpdate={handleScoreUpdate} highScore={highScore} />
             </div>
          </motion.div>
        </div>

        {/* Right Side: Cassette Deck Audio & Dynamic Status widgets */}
        <div className="w-full lg:w-80 xl:w-[340px] shrink-0 flex min-h-0 flex-col gap-4">
          <AudioPlayer />

          {/* living metrics dashboard card */}
          <div className="arcade-panel p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-neon-blue">
                 <Activity className="w-4 h-4 text-neon-blue" />
                 <h3 className="text-xs uppercase tracking-[0.16em] font-bold font-mono">CABINET STATUS</h3>
              </div>
              <span className="text-[8px] bg-neon-blue/15 text-neon-blue px-2 py-0.5 rounded font-mono font-bold border border-neon-blue/20">LIVE</span>
            </div>

            <div className="divide-y divide-white/10 border-t border-white/10">
              {[
                { label: 'CPU LOAD', value: metrics.cpu, color: 'text-neon-pink' },
                { label: 'MEMORY FREE', value: metrics.ram, color: 'text-neon-green' },
                { label: 'CORE TEMP', value: metrics.temp, color: 'text-neon-yellow' },
                { label: 'GRID SIGNAL', value: metrics.signal, color: 'text-neon-blue' }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between gap-4 py-2.5">
                  <p className="text-[9px] uppercase tracking-[0.08em] text-white/55 font-mono">{item.label}</p>
                  <p className={`text-sm font-bold font-mono ${item.color}`}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Retro scanlines filter effects */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden mix-blend-overlay opacity-15">
        <div className="absolute inset-0 scanline" />
        <div className="scanline-beam animate-scanline" />
      </div>
    </div>
  );
}

