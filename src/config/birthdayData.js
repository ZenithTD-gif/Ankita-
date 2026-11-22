/**
 * ====================================================================
 * CENTRALIZED BIRTHDAY CONFIGURATION
 * ====================================================================
 * You can customize all text, names, dates, memories, and photos here.
 * To change photos: drop image files (e.g. photo1.jpg) into /public/assets/photos/
 * and update the image paths below.
 */

export const birthdayData = {
  // Recipient details
  recipient: {
    name: "Beautiful",
    nickname: "My Angel",
    birthdate: "Today",
    yearCelebrated: "2024",
  },

  // Section 1: Opening Screen
  opening: {
    badge: "For the Most Special Person in the Universe",
    title: "A Little World Made Just For You ♡",
    subtitle: "Someone special deserves something truly unforgettable.",
    buttonText: "Open Your Surprise ♡",
    scrollHint: "Scroll down to begin your journey",
  },

  // Section 2: Scrapbook Photo Gallery
  // Note: Place actual photos into /public/assets/photos/photo1.jpg, etc.
  gallery: {
    title: "Moments & Memories",
    subtitle: "A digital scrapbook woven with light, beauty, and smiles",
    photos: [
      {
        id: 1,
        title: "Radiant Joy",
        caption: "That smile that effortlessly illuminates everything around you ✨",
        src: "/assets/photos/photo1.jpg",
        date: "Special Memory",
        rotation: -4,
        scale: 1.02,
        aspect: "portrait", // portrait, square, landscape
      },
      {
        id: 2,
        title: "Pure Magic",
        caption: "A little sunshine captured in one perfect moment 🌸",
        src: "/assets/photos/photo2.jpg",
        date: "Golden Hour",
        rotation: 3,
        scale: 0.98,
        aspect: "square",
      },
      {
        id: 3,
        title: "Quiet Elegance",
        caption: "Graceful, gentle, and forever unforgettable 💫",
        src: "/assets/photos/photo3.jpg",
        date: "Sweet Serenity",
        rotation: -2,
        scale: 1.04,
        aspect: "portrait",
      },
      {
        id: 4,
        title: "Timeless Laughter",
        caption: "Laughter looks so breathtaking on you 🌷",
        src: "/assets/photos/photo4.jpg",
        date: "Cherished Moment",
        rotation: 5,
        scale: 0.96,
        aspect: "landscape",
      },
      {
        id: 5,
        title: "Soft Whispers",
        caption: "Some moments stay etched in the heart forever ♡",
        src: "/assets/photos/photo5.jpg",
        date: "Dreamy Days",
        rotation: -3,
        scale: 1.01,
        aspect: "portrait",
      },
      {
        id: 6,
        title: "Starlit Heart",
        caption: "The world is simply a warmer place with you in it ✨",
        src: "/assets/photos/photo6.jpg",
        date: "Pure Happiness",
        rotation: 4,
        scale: 0.99,
        aspect: "square",
      },
    ],
  },

  // Section 3: Special Memories & Compliments
  memories: {
    title: "Little Things That Make You Special ♡",
    subtitle: "Just a few of the million reasons why you are celebrated today and every day",
    items: [
      {
        id: 1,
        icon: "Sparkles",
        tag: "Your Radiance",
        quote: "Your smile makes everything brighter.",
        detail: "No matter how overcast the day may feel, your presence brings an undeniable warmth that turns ordinary seconds into memories.",
        bgGradient: "from-pastel-pink/40 to-cream-200",
      },
      {
        id: 2,
        icon: "Sun",
        tag: "Pure Light",
        quote: "A little sunshine in one picture.",
        detail: "You carry a gentle warmth that naturally makes everyone around you feel valued, peaceful, and truly at ease.",
        bgGradient: "from-champagne-light/50 to-pastel-pink/30",
      },
      {
        id: 3,
        icon: "Heart",
        tag: "Unforgettable",
        quote: "Some moments are simply unforgettable.",
        detail: "The subtle glances, the shared laughter, the quiet kindness — every single instant spent with you is a treasure.",
        bgGradient: "from-dusty-light/20 to-cream-200",
      },
      {
        id: 4,
        icon: "Smile",
        tag: "Your Joy",
        quote: "Keep smiling, beautiful.",
        detail: "Your happiness is infectious, genuine, and pure. May that gorgeous smile never fade from your face.",
        bgGradient: "from-pastel-peach to-pastel-pink/30",
      },
      {
        id: 5,
        icon: "Flower2",
        tag: "Quiet Grace",
        quote: "Elegance in the smallest gestures.",
        detail: "The gentle kindness you show without even realizing it makes you genuinely one of the rarest souls.",
        bgGradient: "from-pastel-pink/30 to-champagne-light/40",
      },
      {
        id: 6,
        icon: "Star",
        tag: "Endless Wonder",
        quote: "A universe of beauty within you.",
        detail: "Today celebrates not just your birth, but the beauty and kindness you continually bring into this world.",
        bgGradient: "from-cream-200 to-dusty-light/25",
      },
    ],
  },

  // Section 4: Physical 3D Envelope & Letter
  letter: {
    badge: "From the bottom of my heart",
    envelopeTitle: "Something Special For You 💌",
    envelopeSubtitle: "Sealed with warmth, wrapped with fondness",
    openButtonText: "Open My Little Letter",
    closeButtonText: "Fold & Close Letter",
    salutation: "Dearest,",
    paragraphs: [
      "On this special day, I wanted to pause time for just a little while to celebrate the wonderful, extraordinary soul that you are.",
      "Your warmth, your quiet grace, and the effortless way you bring light into any room have touched my heart in ways that words can never fully capture.",
      "May this new chapter bring you boundless joy, dreams fulfilled, peaceful moments, and a thousand new reasons to smile every single day.",
      "Never forget how truly cherished, appreciated, and special you are to this world — and especially to me.",
    ],
    closing: "With all my love, warmth, and warmest wishes,",
    signature: "Always Yours ♡",
  },

  // Section 5: Birthday Cake & Celebration
  celebration: {
    badge: "Make a Wish",
    title: "Happy Birthday, Beautiful! 🎂",
    subtitle: "Today is all about you — your laughter, your dreams, your day.",
    wishButtonText: "Make a Wish ✨",
    wishDoneText: "Wish Sent to the Stars 🌟",
    wishMessage: "May all your quiet hopes, sweetest dreams, and deepest desires blossom into reality this year. You deserve every ounce of magic this world has to offer! ✨🎂🥂",
    candleHint: "Tap the candle flame or button to blow out your birthday candle!",
  },

  // Section 6: Final Surprise & Emotional Farewell
  final: {
    badge: "A Promise For Tomorrow",
    title: "Before You Go... ♡",
    messageParagraph1: "I don't know what the future holds, but I hope your life is always filled with happiness, laughter, and beautiful moments.",
    messageParagraph2: "Keep smiling, keep shining, and never forget how special you are.",
    messageParagraph3: "You deserve all the beautiful things in this world. Happy Birthday! ❤️",
    footerQuote: "Made With A Little Extra Love ♡",
    sealText: "Forever Cherished",
  },

  // Music settings
  music: {
    title: "Lover (Remix)",
    subtitle: "Taylor Swift feat. Shawn Mendes",
    youtubeId: "b5Zay_Hd_7Q", // Taylor Swift - Lover (Remix) Feat. Shawn Mendes (Official Audio)
    audioSrc: "/assets/music/lover-remix.mp3",
    defaultVolume: 0.75,
  },
};
