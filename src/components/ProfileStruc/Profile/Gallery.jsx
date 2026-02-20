import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

const Gallery = ({ images }) => {
  const [activeImg, setActiveImg] = useState(images[0]);

  return (
    <div className="lg:w-1/2 flex flex-col-reverse md:flex-row gap-4 h-fit lg:sticky lg:top-28">
      {/* Thumbnails - Responsive: Bottom on mobile, Left on Desktop */}
      <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
        {images.map((img, i) => (
          <motion.button 
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveImg(img)}
            className="relative min-w-[70px] w-20 h-20 cursor-pointer  rounded-[var(--radius-md)] overflow-hidden border-2 transition-all"
            style={{ 
              borderColor: activeImg === img ? 'var(--color-accent)' : 'var(--border)',
              opacity: activeImg === img ? 1 : 0.6
            }}
          >
            <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
          </motion.button>
        ))}
      </div>

      {/* Main Big Image */}
      <div 
        className="flex-1 relative aspect-[4/5] overflow-hidden shadow-[var(--shadow-card)]"
        style={{ borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--bg-card)' }}
      >
        <AnimatePresence mode="wait">
          <motion.img 
            key={activeImg}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            src={activeImg} 
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
        
        {/* Like Button */}
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-4 right-4 p-3  rounded-full backdrop-blur-md border border-white/30 text-white cursor-pointer hover:bg-[var(--color-accent)] transition-colors"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
        >
          <Heart size={20} fill={activeImg === images[0] ? "currentColor" : "none"} />
        </motion.button>
      </div>
    </div>
  );
};

export default Gallery;