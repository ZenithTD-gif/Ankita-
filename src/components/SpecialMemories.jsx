import React from 'react';
import { Sparkles, Sun, Heart, Smile, Flower2, Star } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';

const iconMap = {
  Sparkles: Sparkles,
  Sun: Sun,
  Heart: Heart,
  Smile: Smile,
  Flower2: Flower2,
  Star: Star,
};

export default function SpecialMemories() {
  const { title, subtitle, items } = birthdayData.memories;

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-pastel-pink/20 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-200 border border-dusty-light/30 text-dusty-deep text-xs uppercase tracking-widest font-medium mb-3 shadow-sm">
          <Heart className="w-3.5 h-3.5 text-dusty-rose fill-dusty-rose" />
          <span>Treasured Thoughts</span>
          <Sparkles className="w-3.5 h-3.5 text-champagne-gold" />
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl text-dusty-dark font-medium mb-4">
          {title}
        </h2>
        <p className="font-sans text-base sm:text-lg text-dusty-deep/80 font-light max-w-lg mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Memory Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {items.map((item, index) => {
          const IconComponent = iconMap[item.icon] || Sparkles;

          return (
            <div
              key={item.id}
              className="group relative rounded-3xl bg-white/80 backdrop-blur-md p-8 border border-white/90 shadow-glass hover:shadow-glass-hover transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Subtle gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none`} />

              {/* Decorative top icon & tag */}
              <div className="relative z-10 flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-pastel-pink/50 border border-pastel-rose/30 flex items-center justify-center text-dusty-rose shadow-sm group-hover:scale-110 group-hover:bg-pastel-pink transition-all duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                <span className="text-xs font-medium font-sans uppercase tracking-wider text-dusty-light bg-cream-100 px-3 py-1 rounded-full border border-dusty-light/20">
                  {item.tag}
                </span>
              </div>

              {/* Main Compliment Quote */}
              <div className="relative z-10 mb-6">
                <h3 className="font-handwritten text-2xl sm:text-3xl text-dusty-dark font-medium leading-tight mb-3">
                  "{item.quote}"
                </h3>
                <p className="font-sans text-sm text-dusty-deep/80 leading-relaxed font-light">
                  {item.detail}
                </p>
              </div>

              {/* Delicate card footer decoration */}
              <div className="relative z-10 pt-4 border-t border-pastel-pink/50 flex items-center justify-between text-xs text-dusty-light font-serif">
                <span>0{item.id} / 0{items.length}</span>
                <span className="flex items-center gap-1 text-champagne-gold">
                  <Sparkles className="w-3.5 h-3.5" />
                  Always true
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
