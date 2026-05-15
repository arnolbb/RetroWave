import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion } from 'motion/react';
import { Trophy, ArrowLeft, ArrowRight, Zap } from 'lucide-react';

interface GameObject {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface Invader extends GameObject {
  alive: boolean;
  type: number;
}

interface Bullet extends GameObject {
  active: boolean;
}

const INVADER_ROWS = 4;
const INVADER_COLS = 8;
const INVADER_WIDTH = 30;
const INVADER_HEIGHT = 20;
const PLAYER_WIDTH = 40;
const PLAYER_HEIGHT = 20;
const BULLET_WIDTH = 3;
const BULLET_HEIGHT = 10;
const BASE_WIDTH = 600;
const BASE_HEIGHT = 400;

export default function SpaceInvaders({ onScoreUpdate, highScore }: { onScoreUpdate: (s: number) => void, highScore: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  // Refs for game state to avoid re-renders during loop
  const gameStateRef = useRef({
    player: { x: 280, y: 370 },
    invaders: [] as Invader[],
    bullets: [] as Bullet[],
    invaderBullets: [] as Bullet[],
    direction: 1,
    moveTimer: 0,
    keys: {} as Record<string, boolean>,
    frame: 0
  });

  const resetGame = useCallback(() => {
    const invaders: Invader[] = [];
    for (let r = 0; r < INVADER_ROWS; r++) {
      for (let c = 0; c < INVADER_COLS; c++) {
        invaders.push({
          x: c * (INVADER_WIDTH + 15) + 50,
          y: r * (INVADER_HEIGHT + 15) + 50,
          width: INVADER_WIDTH,
          height: INVADER_HEIGHT,
          alive: true,
          type: r
        });
      }
    }
    gameStateRef.current = {
      player: { x: 280, y: 370 },
      invaders,
      bullets: [],
      invaderBullets: [],
      direction: 1,
      moveTimer: 0,
      keys: gameStateRef.current.keys,
      frame: 0
    };
    setScore(0);
    setGameOver(false);
    setIsPaused(false);
  }, []);

  const shoot = useCallback(() => {
    if (gameOver || isPaused) return;
    if (gameStateRef.current.bullets.length < 3) {
      gameStateRef.current.bullets.push({
        x: gameStateRef.current.player.x + PLAYER_WIDTH / 2 - BULLET_WIDTH / 2,
        y: gameStateRef.current.player.y - 10,
        width: BULLET_WIDTH,
        height: BULLET_HEIGHT,
        active: true
      });
    }
  }, [gameOver, isPaused]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      gameStateRef.current.keys[e.code] = true;
      if (e.code === 'Space') {
        e.preventDefault();
        shoot();
      }
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      gameStateRef.current.keys[e.code] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [shoot]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const loop = () => {
      if (!isPaused && !gameOver) {
        update();
      }
      draw();
      animationFrameId = requestAnimationFrame(loop);
    };

    const update = () => {
      const state = gameStateRef.current;
      
      // Move Player
      if (state.keys['ArrowLeft'] || state.keys['KeyA']) state.player.x -= 5;
      if (state.keys['ArrowRight'] || state.keys['KeyD']) state.player.x += 5;
      state.player.x = Math.max(0, Math.min(BASE_WIDTH - PLAYER_WIDTH, state.player.x));

      // Move Bullets
      state.bullets.forEach((b) => {
        b.y -= 7;
        if (b.y < 0) b.active = false;
      });
      state.bullets = state.bullets.filter(b => b.active);

      // Move Invaders
      state.moveTimer++;
      const speed = Math.max(2, 40 - (score / 100));
      if (state.moveTimer > speed) {
        state.moveTimer = 0;
        let edge = false;
        state.invaders.forEach(inv => {
          if (!inv.alive) return;
          inv.x += 10 * state.direction;
          if (inv.x > BASE_WIDTH - INVADER_WIDTH || inv.x < 0) edge = true;
        });

        if (edge) {
          state.direction *= -1;
          state.invaders.forEach(inv => {
            if (!inv.alive) return;
            inv.y += 20;
            if (inv.y > state.player.y - 20) setGameOver(true);
          });
        }
      }

      // Collisions
      state.bullets.forEach(b => {
        state.invaders.forEach(inv => {
          if (inv.alive && b.x < inv.x + inv.width && b.x + b.width > inv.x && b.y < inv.y + inv.height && b.y + b.height > inv.y) {
            inv.alive = false;
            b.active = false;
            setScore(prev => {
              const newScore = prev + 10;
              onScoreUpdate(newScore);
              return newScore;
            });
          }
        });
      });

      if (state.invaders.length > 0 && state.invaders.every(i => !i.alive)) {
        resetGame();
      }
    };

    const draw = () => {
      const state = gameStateRef.current;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.shadowBlur = 10;

      // Player
      ctx.shadowColor = '#FF71CE';
      ctx.fillStyle = '#FF71CE';
      ctx.fillRect(state.player.x, state.player.y, PLAYER_WIDTH, PLAYER_HEIGHT);
      ctx.fillRect(state.player.x + PLAYER_WIDTH/2 - 4, state.player.y - 5, 8, 5);

      // Bullets
      ctx.shadowColor = '#05FFA1';
      ctx.fillStyle = '#05FFA1';
      state.bullets.forEach(b => {
        ctx.fillRect(b.x, b.y, b.width, b.height);
      });

      // Invaders
      state.invaders.forEach(inv => {
        if (!inv.alive) return;
        const colors = ['#B967FF', '#01CDFE', '#FFFB96', '#FF71CE'];
        ctx.shadowColor = colors[inv.type % colors.length];
        ctx.fillStyle = colors[inv.type % colors.length];
        
        ctx.fillRect(inv.x, inv.y, inv.width, inv.height);
        ctx.fillStyle = '#000';
        ctx.fillRect(inv.x + 5, inv.y + 5, 4, 4);
        ctx.fillRect(inv.x + inv.width - 9, inv.y + 5, 4, 4);
      });

      if (gameOver) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.shadowColor = '#FF71CE';
        ctx.fillStyle = '#FF71CE';
        ctx.font = 'bold 30px "Space Grotesk"';
        ctx.textAlign = 'center';
        ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2);
        ctx.font = '16px "Space Grotesk"';
        ctx.fillText('CLICK TO TRY AGAIN', canvas.width / 2, canvas.height / 2 + 50);
      }

      if (isPaused && !gameOver) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.shadowColor = '#01CDFE';
        ctx.fillStyle = '#01CDFE';
        ctx.font = 'bold 30px "Space Grotesk"';
        ctx.textAlign = 'center';
        ctx.fillText('READY?', canvas.width / 2, canvas.height / 2);
        ctx.font = '16px "Space Grotesk"';
        ctx.fillText('TAP/CLICK TO START', canvas.width / 2, canvas.height / 2 + 40);
      }
    };

    resetGame();
    loop();

    return () => cancelAnimationFrame(animationFrameId);
  }, [resetGame, onScoreUpdate]);

  const handleCanvasClick = () => {
    if (gameOver) {
      resetGame();
    } else if (isPaused) {
      setIsPaused(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="flex justify-between w-full font-mono text-neon-blue uppercase tracking-tighter text-xs md:text-sm">
        <div className="flex items-center gap-2">
          <span>Score:</span>
          <motion.span 
            key={score}
            initial={{ scale: 1.2, color: '#05FFA1' }}
            animate={{ scale: 1, color: '#01CDFE' }}
            className="font-bold text-sm md:text-xl"
          >
            {String(score).padStart(6, '0')}
          </motion.span>
        </div>
        <div className="flex items-center gap-2 text-neon-pink">
          <Trophy className="w-3 h-3 md:w-4 md:h-4" />
          <span>Best:</span>
          <span className="font-bold">{String(highScore).padStart(6, '0')}</span>
        </div>
      </div>

      <div ref={containerRef} className="relative group w-full aspect-[3/2] neon-border rounded-lg bg-black overflow-hidden select-none touch-none">
        <canvas 
          ref={canvasRef} 
          width={BASE_WIDTH} 
          height={BASE_HEIGHT} 
          onClick={handleCanvasClick}
          className="w-full h-full cursor-crosshair bg-[radial-gradient(circle_at_center,_#1a1025_0%,_#0b0114_100%)] block"
        />
        
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute inset-0 scanline" />
        </div>
      </div>

      {/* Mobile Controls */}
      <div className="grid grid-cols-3 gap-4 w-full max-w-[400px] mt-2 lg:hidden">
        <button 
          onPointerDown={() => gameStateRef.current.keys['ArrowLeft'] = true}
          onPointerUp={() => gameStateRef.current.keys['ArrowLeft'] = false}
          className="h-16 glass-morphism rounded-xl flex items-center justify-center active:scale-95 transition-transform"
        >
          <ArrowLeft className="w-8 h-8 text-neon-blue" />
        </button>
        <button 
          onPointerDown={shoot}
          className="h-16 glass-morphism rounded-xl flex items-center justify-center active:bg-neon-pink/20 transition-all"
        >
          <Zap className="w-8 h-8 text-neon-pink" />
        </button>
        <button 
          onPointerDown={() => gameStateRef.current.keys['ArrowRight'] = true}
          onPointerUp={() => gameStateRef.current.keys['ArrowRight'] = false}
          className="h-16 glass-morphism rounded-xl flex items-center justify-center active:scale-95 transition-transform"
        >
          <ArrowRight className="w-8 h-8 text-neon-blue" />
        </button>
      </div>

      <div className="hidden lg:flex text-[10px] text-neon-blue/50 font-mono uppercase tracking-[0.2em] gap-8">
        <span>[A/D] MOVE</span>
        <span>[SPACE] SHOOT</span>
      </div>
    </div>
  );
}
