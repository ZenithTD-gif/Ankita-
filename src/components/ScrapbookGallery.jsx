import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Sparkles, Heart, Flower } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';

// Aesthetic placeholder component when no photo is uploaded yet (strictly avoids fake faces)
function AestheticPhotoCard({ photo, isLightbox = false }) {
  const [imageError, setImageError] = useState(false);

  if (!imageError && photo.src) {
    return (
      <img
        src={photo.src}
        alt={photo.title}
        onError={() => setImageError(true)}
        className={`w-full ${isLightbox ? 'max-h-[75vh] w-auto max-w-full object-contain' : 'h-64 sm:h-72 object-cover object-center'} rounded-lg transition-transform duration-500`}
        loading="lazy"
      />
    );
  }

  // Romantic floral scrapbook placeholder
  return (
    <div className={`w-full ${isLightbox ? 'h-96' : 'h-64 sm:h-72'} rounded-lg bg-gradient-to-br from-pastel-pink/40 via-cream-200 to-pastel-peach/60 border-2 border-dashed border-pastel-rose/40 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group`}>
      {/* Decorative floral watermark */}
      <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-15 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-dusty-deep">
          <circle cx="50" cy="50" r="40" />
        </svg>
      </div>

      <div className="w-14 h-14 rounded-full bg-white/80 border border-champagne-gold/50 shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
        <Camera className="w-6 h-6 text-dusty-rose" />
      </div>

      <span className="font-serif text-base font-medium text-dusty-dark mb-1">
        {photo.title}
      </span>
      <span className="text-xs font-handwritten text-dusty-deep/75 max-w-[200px] leading-tight">
        Drop your photo here: <br />
        <code className="text-[11px] font-mono text-dusty-deep bg-white/70 px-1 py-0.5 rounded">
          {photo.src.replace('/assets/', '')}
        </code>
      </span>
    </div>
  );
}

export default function ScrapbookGallery() {
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const photos = birthdayData.gallery.photos;

  const openLightbox = (index) => {
    setActivePhotoIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
    document.body.style.overflow = 'auto';
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery-section" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-pastel-pink/70 border border-pastel-rose/30 text-dusty-deep text-xs font-medium uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5 text-champagne-gold" />
          <span>Birthday Portrait Scrapbook</span>
          <Heart className="w-3.5 h-3.5 text-dusty-rose fill-dusty-rose" />
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl text-dusty-dark font-medium mb-4">
          {birthdayData.gallery.title}
        </h2>
        <p className="font-sans text-base sm:text-lg text-dusty-deep/80 font-light max-w-lg mx-auto">
          {birthdayData.gallery.subtitle}
        </p>
      </div>

      {/* 3D Scrapbook Floating Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 relative z-10">
        {photos.map((photo, index) => {
          // Floating animation variations
          const floatClass = index % 3 === 0 
            ? 'animate-float-slow' 
            : index % 3 === 1 
              ? 'animate-float-medium' 
              : 'animate-float-reverse';

          return (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className={`relative cursor-pointer transition-all duration-500 ease-out hover:z-30 hover:scale-105 ${floatClass}`}
              style={{
                transform: `rotate(${photo.rotation}deg)`,
                animationDelay: `${index * 0.7}s`,
              }}
            >
              {/* Washi Tape / Gold Pin Ornament at top */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                {index % 2 === 0 ? (
                  // Washi tape
                  <div className="w-20 h-6 bg-champagne-light/80 backdrop-blur-sm border-l-2 border-r-2 border-champagne-gold/40 shadow-sm -rotate-2 opacity-90" />
                ) : (
                  // Gold stamp pin
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-champagne-gold to-champagne-dark shadow-md border border-white flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-white opacity-80" />
                  </div>
                )}
              </div>

              {/* Polaroid Frame Container */}
              <div className="bg-white/90 backdrop-blur-md p-4 pb-6 rounded-2xl shadow-polaroid hover:shadow-polaroid-hover border border-pastel-pink/50 transition-all duration-300">
                {/* Photo area with delicate inner shadow */}
                <div className="relative rounded-lg overflow-hidden bg-cream-50 shadow-inner">
                  <AestheticPhotoCard photo={photo} />

                  {/* Corner floral garnish */}
                  <div className="absolute bottom-2 right-2 pointer-events-none opacity-70">
                    <span className="text-sm">🌸</span>
                  </div>
                </div>

                {/* Handwritten Polaroid Caption */}
                <div className="mt-4 px-1 text-center">
                  <p className="font-handwritten text-xl sm:text-2xl text-dusty-deep leading-snug">
                    {photo.caption}
                  </p>
                  <div className="mt-2 flex items-center justify-between text-[11px] font-sans text-dusty-light tracking-wide px-2">
                    <span>{photo.date}</span>
                    <span className="font-serif italic text-dusty-rose/80">Tap to expand 🔍</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox / Full-screen Photo Viewer */}
      {activePhotoIndex !== null && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-dusty-dark/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300"
        >
          {/* Lightbox Modal Card */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-cream-100/95 backdrop-blur-xl border border-white/80 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col items-center animate-in zoom-in-95 duration-300"
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-dusty-deep flex items-center justify-center shadow-sm transition-all hover:scale-105 active:scale-95"
              aria-label="Close photo view"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevPhoto}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-dusty-deep shadow-md flex items-center justify-center transition-all hover:scale-110 active:scale-95"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextPhoto}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-dusty-deep shadow-md flex items-center justify-center transition-all hover:scale-110 active:scale-95"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Photo In Lightbox */}
            <div className="w-full flex justify-center mb-6 overflow-hidden rounded-xl bg-white/60 p-2 shadow-inner">
              <AestheticPhotoCard photo={photos[activePhotoIndex]} isLightbox={true} />
            </div>

            {/* Caption & Details in Lightbox */}
            <div className="text-center max-w-lg">
              <span className="inline-block px-3 py-1 rounded-full bg-pastel-pink text-dusty-deep text-xs font-medium mb-2">
                {photos[activePhotoIndex].date}
              </span>
              <h3 className="font-serif text-2xl text-dusty-dark font-medium mb-2">
                {photos[activePhotoIndex].title}
              </h3>
              <p className="font-handwritten text-2xl text-dusty-rose leading-relaxed">
                "{photos[activePhotoIndex].caption}"
              </p>
              <div className="mt-4 text-xs font-sans text-dusty-light">
                Photo {activePhotoIndex + 1} of {photos.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
