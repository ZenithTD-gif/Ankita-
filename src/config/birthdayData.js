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
    name: "Ankita",
    nickname: "Anki",
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
    title: "Portraits of Grace",
    subtitle: "Capturing your warmth, timeless charm, and radiant smile in every moment",
    photos: [
      {
        id: 1,
        title: "Grace in Bloom",
        caption: "A gentle smile and luminous eyes that carry so much warmth and quiet elegance ✨",
        src: "/assets/photos/photo1.jpg",
        date: "Gentle Radiance",
        rotation: -4,
        scale: 1.02,
        aspect: "landscape",
      },
      {
        id: 2,
        title: "Sunshine Smile",
        caption: "That effortless, endearing charm that naturally makes everything feel brighter 🌸",
        src: "/assets/photos/photo2.jpg",
        date: "Sweet Serenity",
        rotation: 3,
        scale: 0.98,
        aspect: "landscape",
      },
      {
        id: 3,
        title: "Pure Elegance",
        caption: "Draped in timeless traditional grace, breathtaking in every single detail 💫",
        src: "/assets/photos/photo3.jpg",
        date: "Traditional Grace",
        rotation: -2,
        scale: 1.04,
        aspect: "landscape",
      },
      {
        id: 4,
        title: "Golden Glow",
        caption: "Bathed in soft sunlight, looking serene, peaceful, and undeniably beautiful 🌷",
        src: "/assets/photos/photo4.jpg",
        date: "Sunlit Glow",
        rotation: 4,
        scale: 0.96,
        aspect: "landscape",
      },
      {
        id: 5,
        title: "Simply Gorgeous",
        caption: "Radiant, confident, and captivating — a true celebration of your beauty ♡",
        src: "/assets/photos/photo5.jpg",
        date: "Timeless Beauty",
        rotation: -3,
        scale: 1.01,
        aspect: "landscape",
      },
      {
        id: 6,
        title: "Sunlit Charm",
        caption: "A radiant smile, flowers in your hair, and a natural warmth that brightens the whole world ✨",
        src: "/assets/photos/photo6.jpg",
        date: "Sun-Kissed Glow",
        rotation: 3,
        scale: 0.99,
        aspect: "landscape",
      },
    ],
  },

  // Section 3: Special Memories & Compliments
  memories: {
    title: "Little Things That Make You Special ♡",
    subtitle: "Just a few of the countless qualities that make you so uniquely wonderful",
    items: [
      {
        id: 1,
        icon: "Smile",
        tag: "Your Smile",
        quote: "Your smile makes the world a little brighter.",
        detail: "There is a natural, effortless warmth in the way you smile. It lights up any space and brings a sense of comfort and joy to everyone around you.",
        bgGradient: "from-pastel-pink/40 to-cream-200",
      },
      {
        id: 2,
        icon: "Sparkles",
        tag: "Your Beauty",
        quote: "Some beauty is simply beyond words.",
        detail: "It is not just how effortlessly gorgeous you look, but the gentle poise and magnetic charm you carry with every expression.",
        bgGradient: "from-champagne-light/50 to-pastel-pink/30",
      },
      {
        id: 3,
        icon: "Sun",
        tag: "Your Presence",
        quote: "You make ordinary moments feel special.",
        detail: "Just having you around turns simple everyday moments into something memorable, comfortable, and deeply meaningful.",
        bgGradient: "from-dusty-light/20 to-cream-200",
      },
      {
        id: 4,
        icon: "Heart",
        tag: "Your Kindness",
        quote: "A beautiful heart is your greatest charm.",
        detail: "Your thoughtful nature and genuine kindness shine through everything you do. You treat the world with a gentle grace that is rare and precious.",
        bgGradient: "from-pastel-peach to-pastel-pink/30",
      },
      {
        id: 5,
        icon: "Flower2",
        tag: "Your Elegance",
        quote: "Elegance lives in the little things you do.",
        detail: "From the way you speak to the subtle, graceful gestures you make without even noticing, you possess a quiet elegance that is truly timeless.",
        bgGradient: "from-pastel-pink/30 to-champagne-light/40",
      },
      {
        id: 6,
        icon: "Star",
        tag: "One of a Kind",
        quote: "There is only one you, and that's your magic.",
        detail: "In a world of billions, you are uniquely, undeniably irreplaceable. Always stay true to yourself, because the person you are is truly wonderful.",
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
    salutation: "Dearest Ankita,",
    paragraphs: [
      "On this special day, I wanted to pause time for just a little while to celebrate the wonderful, extraordinary soul that you are.",
      "Your warmth, your quiet grace, and the effortless way you bring light into any room have touched my heart in ways that words can never fully capture.",
      "May this new chapter bring you boundless joy, dreams fulfilled, peaceful moments, and a thousand new reasons to smile every single day.",
      "Never forget how truly cherished, appreciated, and special you are to this world — and especially to me.",
    ],
    closing: "Your annoying friend,",
    signature: "Tridip Deka ♡",
  },

  // Section 5: Birthday Cake & Celebration
  celebration: {
    badge: "Make a Wish",
    title: "Happy Birthday, Ankita! 🎂",
    subtitle: "Today is all about you, Ankita — your laughter, your dreams, your day.",
    wishButtonText: "Make a Wish ✨",
    wishDoneText: "Wish Sent to the Stars 🌟",
    wishMessage: "May all your quiet hopes, sweetest dreams, and deepest desires blossom into reality this year, Ankita. You deserve every ounce of magic this world has to offer! ✨🎂🥂",
    candleHint: "Tap the candle flame or button to blow out your birthday candle!",
  },

  // Section 6: Final Surprise & Emotional Farewell
  final: {
    badge: "A Promise For Tomorrow",
    title: "Before You Go... ♡",
    messageParagraph1: "I don't know what the future holds, but I hope your life is always filled with happiness, laughter, and beautiful moments.",
    messageParagraph2: "Keep smiling, keep shining, and never forget how special you are, Ankita.",
    messageParagraph3: "You deserve all the beautiful things in this world. Happy Birthday, Ankita! ❤️",
    footerQuote: "Made With A Little Extra Love ♡",
    sealText: "Forever Cherished — Ankita",
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
