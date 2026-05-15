import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Music, Volume2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Track {
  id: number;
  title: string;
  artist: string;
  url: string;
}

const DUMMY_TRACKS: Track[] = [
  { id: 1, title: "Midnight City Dreams", artist: "VaporPulse", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
  { id: 2, title: "Cyberpunk Horizon", artist: "RetroFuture", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
  { id: 3, title: "Neon Nights", artist: "SynthWaveX", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" }
];

export default function AudioPlayer() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentTrack = DUMMY_TRACKS[currentTrackIndex];

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(console.error);
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrackIndex]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % DUMMY_TRACKS.length);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + DUMMY_TRACKS.length) % DUMMY_TRACKS.length);
    setIsPlaying(true);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const p = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(p || 0);
    }
  };

  const handleEnded = () => {
    handleNext();
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-morphism rounded-2xl p-6 w-full max-w-md shadow-2xl relative overflow-hidden"
    >
      <div className="flex items-center gap-6 relative z-10">
        <div className="w-20 h-20 bg-neon-purple/20 rounded-lg flex items-center justify-center border border-neon-pink/30 relative">
          <motion.div
            animate={isPlaying ? { rotate: 360 } : {}}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <Music className="w-10 h-10 text-neon-pink" />
          </motion.div>
          {isPlaying && (
             <span className="absolute -top-1 -right-1 flex h-3 w-3">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
               <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-green"></span>
             </span>
          )}
        </div>
        
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTrack.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
            >
              <h3 className="font-bold text-lg text-neon-blue neon-text-blue truncate">{currentTrack.title}</h3>
              <p className="text-sm text-neon-purple opacity-80 uppercase tracking-widest font-mono">{currentTrack.artist}</p>
            </motion.div>
          </AnimatePresence>
          
          <div className="mt-4 flex items-center gap-3">
            <button onClick={handlePrev} className="p-2 hover:text-neon-pink transition-colors">
              <SkipBack className="w-5 h-5" />
            </button>
            <button 
              onClick={togglePlay} 
              className="w-10 h-10 bg-neon-pink rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            >
              {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white translate-x-0.5" />}
            </button>
            <button onClick={handleNext} className="p-2 hover:text-neon-pink transition-colors">
              <SkipForward className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="h-1 bg-white/10 rounded-full w-full overflow-hidden">
          <motion.div 
             className="h-full bg-neon-pink shadow-lg shadow-neon-pink"
             animate={{ width: `${progress}%` }}
             transition={{ duration: 0.1 }}
          />
        </div>
      </div>

      <audio 
        ref={audioRef}
        src={currentTrack.url}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />
      
      {/* Background Glow */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-neon-pink/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-neon-purple/10 blur-3xl rounded-full" />
    </motion.div>
  );
}
