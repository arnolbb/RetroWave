---
name: RetroWave Arcade & Lounge
description: A high-fidelity vaporwave arcade game and music lounge theme using high-contrast neon highlights.
colors:
  neon-pink: "#FF71CE"
  neon-blue: "#01CDFE"
  neon-green: "#05FFA1"
  neon-purple: "#B967FF"
  neon-yellow: "#FFFB96"
  dark-bg-start: "#0b0114"
  dark-bg-end: "#1a1025"
  light-bg-start: "#f7e8ff"
  light-bg-end: "#e4c1ff"
typography:
  display:
    fontFamily: "Space Grotesk, sans-serif"
    fontWeight: 700
  body:
    fontFamily: "Space Grotesk, sans-serif"
    fontWeight: 400
  mono:
    fontFamily: "JetBrains Mono, monospace"
    fontWeight: 400
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  xl: "16px"
components:
  glass-panel:
    backgroundColor: "rgba(255, 255, 255, 0.4)"
    backdropFilter: "blur(12px)"
    rounded: "{rounded.xl}"
    border: "1px solid rgba(255, 255, 255, 0.2)"
  neon-border:
    boxShadow: "0 0 5px #FF71CE, 0 0 10px #B967FF"
---

## Overview
A visual system designed to invoke retro 80s vaporwave aesthetics. High-contrast neon accents sit on top of dark space-purple gradient backdrops or dreamy light pastel purples. Scanlines and CRT animations add analog grit, while glass-morphic cards separate modular user interface panels.

## Colors
All primary visual indicators use high-saturation neon tokens:
- **Neon Pink (#FF71CE)**: Used for action-oriented highlights, player objects, and primary brand markers.
- **Neon Blue (#01CDFE)**: Represents standard interactive elements, track information, and normal scores.
- **Neon Green (#05FFA1)**: Indicates positive feedback, success state signals, and player bullet lasers.
- **Neon Purple (#B967FF)**: Soft background glows, decorative sun backdrops, and secondary typography.
- **Neon Yellow (#FFFB96)**: Used for high scores, secondary visual warnings, and warnings/accents.

**The Contrast Rule.** Under no circumstances should neon-colored text sit directly on a white or light gray background without a dark glass-morphism overlay or drop-shadow. All interface text must be legible and stand out cleanly.

## Typography
The system uses distinct typefaces:
- **Space Grotesk**: Utilized for clean, modern headings and general UI body text. Letter spacing for headings should be snug.
- **JetBrains Mono**: Reserved for retro computer logs, timers, system statuses, and score counts.
- **Playfair Display**: Available for custom serif titles or decorative quotes.

**The Monospace Code Rule.** Monospace text must always be capitalized when used as a status badge, system metric, or action label.

## Elevation
Instead of traditional shadows, elevation in RetroWave is achieved via glow effects and backdrop filters:
- **Level 1 (Glow)**: Elements use pink and purple neon borders with outer box shadows (`neon-border`).
- **Level 2 (Glass Backdrop)**: Modals and cards float with a transparent glass effect (`glass-morphism`), blending elements into the animated backdrop.

## Components
Key visual modules in the design system:
- **Glass Card**: Uses `glass-morphism` with a subtle white border (`border-white/20`) and blur effect to containerize UI sections.
- **Game Window**: Housed inside a dark canvas with a bounding glow and scanlines overlay.
- **Audio Control Node**: A modular widget featuring track titles, a progress bar, and play/skip control icons.

## Do's and Don'ts
- **DO** use animated neon glow drops for positive state changes (e.g. score increments, track play state).
- **DO** keep scanline overlays at low opacity (20%-30%) to ensure it does not compromise readability.
- **DON'T** use flat, corporate solid gray colors for any background or text.
- **DON'T** place neon yellow text on light background panels without appropriate dark shadow backing.
- **DON'T** let letters touch in display titles; keep letter-spacing comfortable.