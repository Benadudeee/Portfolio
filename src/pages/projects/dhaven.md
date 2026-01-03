---
title: "Dhaven"
date: "2024-11-12"
description: "A particle simulation I made using the html5 canvas"
layout: "../../layouts/ProjectLayout.astro"
image: "../../../public/images/thumbnails/Dhaven_Thumbnail.png"
tags: ["Javascript", "Canvas"]
liveLink: "https://dhaven.netlify.app/"
---

## 📌 Overview
The **HTMLCanvas Particle Simulator** is a browser-based interactive visualization built using native HTML `<canvas>` and vanilla JavaScript. Its purpose is to simulate and animate thousands of particles that respond to forces such as gravity, drag, wind, or mouse interaction, while maintaining smooth performance. This can serve as an educational physics experiment, a visual art tool, or a dynamic UI background for websites.

### 🎯 Key Features
- Real-time particle animation using `requestAnimationFrame()`
- Individual particle physics: position, velocity, mass, lifespan
- Configurable forces (gravity, wind, attraction, repulsion)
- Optional interactivity (mouse movement/click effects)
- Designed for high performance with 5,000–20,000 particles
- Modular architecture for custom particle systems

---

## 🧠 Methodology

### 1️⃣ Planning & System Design
- Define what type of simulation will be built (fireworks, snow, fountain, galaxy, etc.).
- Core components identified:
  - `Particle`
  - `Emitter`
  - `Simulator` or main controller
- Plan the animation loop using:  
  `update → draw → requestAnimationFrame → repeat`

### 2️⃣ Canvas Setup & Initialization
- Insert `<canvas>` in HTML and configure JavaScript to acquire its 2D context.
- Auto-size canvas to viewport dynamically using resize listeners.
- Apply `devicePixelRatio` scaling for crisp visual rendering across devices.

### 3️⃣ Particle Simulation Logic
Every particle contains:
```js
{
  position: { x, y },
  velocity: { x, y },
  acceleration: { x, y },
  lifespan: number,
  color: string
}
