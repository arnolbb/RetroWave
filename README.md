<div align="center">

# 🕹️ RETROWAVE

**A vaporwave arcade experience built with React, Canvas, and synthwave soul.**

*Space Invaders-inspired shooter · Cassette deck audio player · CRT aesthetics · 60fps gameplay*

</div>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎮 **Playable Arcade Game** | Full Space Invaders-style shooter with waves, boss battles, power-ups, shields, combo multipliers, and persistent high scores |
| 📼 **Cassette Deck Player** | Synthwave audio player with animated tape reels, equalizer bars, track controls, and volume slider |
| 🖥️ **CRT Visual System** | Scanline overlays, vignette effects, perspective vaporwave grid, screen shake, and neon glow rendering |
| 🏆 **Progression System** | Wave scaling, boss encounters every 5 waves, UFO bonus spawns, 5 power-up types, and combo-based score multipliers |
| 📱 **Responsive Layout** | Three-column desktop layout with on-screen touch controls for mobile |
| ♿ **Accessible** | ARIA live regions, keyboard focus management, screen reader announcements, and `prefers-reduced-motion` support |
| 🔊 **Procedural Audio** | Web Audio API synth for all game sound effects — no audio files needed |

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | **React 19** + **TypeScript** |
| Build | **Vite 6** |
| Styling | **Tailwind CSS 4** with custom design tokens |
| Animation | **Motion** (Framer Motion successor) |
| Rendering | **HTML5 Canvas 2D** at 800×600 internal resolution |
| Audio | **Web Audio API** (procedural synthesis) |
| Icons | **Lucide React** |

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/arnolbb/RETROWAVE.git
cd RETROWAVE

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other Commands

```bash
npm run build    # Production build → dist/
npm run preview  # Preview production build locally
npm run lint     # TypeScript type checking
```

## 🎮 Controls

### Desktop

| Key | Action |
|-----|--------|
| `A` / `D` or `←` / `→` | Move ship left / right |
| `Space` | Fire |
| `P` | Pause / Resume |

### Mobile

On-screen directional controls appear below the game screen on touch devices.

### In-Game Menu

The game starts at the **Main Menu** with options to:
- **START RUN** — Begin a new game
- **VIEW CONTROLS** — See keyboard reference
- **AUDIO SETTINGS** — Toggle SFX and adjust volume

## ⚡ Power-Ups

| Type | Effect | Duration |
|------|--------|----------|
| 🛡️ Shield | Absorbs hits (stacks up to 3) | Until depleted |
| 🔫 Double Shot | Fires two bullets simultaneously | 8 seconds |
| 🏎️ Rapid Fire | Reduced cooldown between shots | 8 seconds |
| ❤️ Extra Life | +1 life (max 5) | Permanent |
| ⚡ Laser Beam | Continuous beam that damages all targets in its path | 3 seconds |

## 📁 Project Structure

```
RETROWAVE/
├── src/
│   ├── App.tsx                      # Main layout: header, sidebar, game, telemetry
│   ├── main.tsx                     # React entry point
│   ├── index.css                    # Tailwind config, design tokens, CRT effects
│   ├── components/
│   │   ├── SpaceInvaders.tsx        # Game component: loop, rendering, input
│   │   └── AudioPlayer.tsx          # Cassette deck audio player
│   └── game/
│       ├── types.ts                 # TypeScript interfaces for all game entities
│       ├── constants.ts             # Color palette, dimensions, tuning parameters
│       └── SoundManager.ts          # Web Audio API sound effects synthesizer
├── index.html
├── vite.config.ts
├── tsconfig.json
├── package.json
├── DESIGN.md                        # Visual design system documentation
├── PRODUCT.md                       # Product strategy and design principles
└── .env.example
```

## 🎨 Design System

The visual identity is built around a **neon-on-dark vaporwave** palette:

| Token | Hex | Usage |
|-------|-----|-------|
| `neon-pink` | `#FF71CE` | Player ship, primary actions, brand accent |
| `neon-blue` | `#01CDFE` | Interactive elements, scores, labels |
| `neon-green` | `#05FFA1` | Player bullets, success feedback, thrusters |
| `neon-purple` | `#B967FF` | Background glows, secondary UI, invader type |
| `neon-yellow` | `#FFFB96` | High scores, UFOs, warnings |

**Typography:** Space Grotesk (UI) · JetBrains Mono (scores, system text) · Playfair Display (decorative)

All color tokens are defined as CSS custom properties in `index.css` and mirrored in `src/game/constants.ts` for canvas rendering.

## 📝 Notes

- Dark-mode only — the design is intentional.
- High scores and audio settings persist via `localStorage`.
- Demo audio tracks are streamed from [SoundHelix](https://www.soundhelix.com/) sample URLs.
- The game runs at a fixed internal resolution (800×600) and scales via CSS.

## 📄 License

This project is not yet licensed. Feel free to fork and experiment.
