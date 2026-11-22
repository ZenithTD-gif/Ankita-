# ✨ A Little World Made Just For You ♡
### Premium Romantic 3D Birthday Surprise Website

A cinematic, interactive 3D birthday surprise web experience with luxury Pinterest-inspired aesthetics, gentle floral scrapbooking, realistic 3D envelope and letter, interactive birthday cake with candle blow-out and confetti, procedural romantic ambient music, and a dreamy evening finale.

---

## 🎨 Design Language & Visual Palette
- **Primary:** Soft pastel pink (`#fce7f0`, `#fbcfe8`, `#f4a5ae`)
- **Secondary:** Warm ivory and cream (`#fffdfa`, `#fdf8f0`, `#faf2e6`)
- **Accent:** Dusty rose (`#c08081`, `#e2a9b0`, `#9c5963`)
- **Highlights:** Champagne gold (`#e6ca65`, `#fbf4dc`, `#c5a059`)
- **Typography:**
  - Headings: *Playfair Display*
  - Body: *Poppins*
  - Calligraphy & Letters: *Great Vibes* & *Caveat*

---

## 🌟 Sections & Interactive Features

1. **Website Opening (The First Impression)**
   - 3D glassmorphism floating card with responsive tilt, glowing champagne border, and light reflection sheen.
   - Her name displayed prominently with greeting: *"A Little World Made Just For You ♡"*.
   - Interactive button: *"Open Your Surprise ♡"* with pastel petal confetti burst and smooth scroll transition.

2. **Her Photo Gallery (3D Interactive Scrapbook)**
   - Polaroid-style photo frames with realistic shadows, washi tape & gold wax pin accents.
   - Autonomous floating and 3D rotation at varying angles and depths.
   - Interactive Lightbox with full-screen zoom, keyboard navigation, previous/next controls, and handwritten captions.
   - Drop-in photo system inside `public/assets/photos/` with zero fake faces and elegant fallback placeholders.

3. **Special Memories ("Little Things That Make You Special ♡")**
   - Staggered glass cards with customized compliments, radiant gradients, and delicate icons.

4. **The Special Birthday Letter (3D Envelope & Handwritten Keepsake)**
   - Cream paper envelope with gold foil trim and dusty rose wax seal with heart stamp.
   - On click: wax seal opens, envelope flap rotates in 3D, and the letter unfolds smoothly with realistic paper movement, revealing handwritten calligraphy line-by-line.

5. **Birthday Countdown & Celebration**
   - 3D pastel birthday cake with layered frosting, strawberry & floral garnishes.
   - Realistic candle with flickering animated flame.
   - *"Make a Wish ✨"* interaction: tap candle or button to blow out flame, launch luxury champagne/pastel confetti explosion, send balloons floating into the sky, and reveal a blessing.

6. **Background Music Experience**
   - Minimal luxury floating glass music player.
   - Procedural Web Audio API romantic melody generator with soft piano/celeste arpeggios that requires zero external files, plus support for custom MP3s at `public/assets/music/romantic-melody.mp3`.
   - Play/pause, equalizer animation, and volume slider.

7. **Final Surprise (The Emotional Evening Finale)**
   - Atmospheric shift to a dreamy pastel twilight sky with glowing moonlight, starry sparkles, and gentle clouds.
   - Interactive glowing heart with pulsing heartbeat and stardust bursts.
   - Parting message: *"Before You Go... ♡"* and *"Made With A Little Extra Love ♡"*.

8. **Autonomous 3D Animation Engine**
   - Continuous 60 FPS canvas-based ambient motion (drifting floral petals, champagne gold sparkles, floating hearts, and soft light rays) running autonomously without requiring mouse hover.

---

## 🛠️ Personalization (How to Customize)

All personalized details are centralized in a single file:
👉 **[`src/config/birthdayData.js`](file:///Users/tridipdeka/Desktop/crush/src/config/birthdayData.js)**

You can easily change:
- Her name & nicknames
- Opening greetings and quotes
- Photo captions and dates
- Memory cards and compliments
- Birthday letter paragraphs and signature
- Birthday wish blessings and closing quotes

### Adding Her Photos:
Drop 6 photos into `public/assets/photos/`:
- `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, `photo4.jpg`, `photo5.jpg`, `photo6.jpg`

---

## 🚀 Running the Project

```bash
# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
