import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Image as ImageIcon, Trash2 } from 'lucide-react';

const GalleryEdit = ({ images, onUpdate }) => {
  
  // Function to remove an image by index
  const removeImage = (indexToRemove) => {
    const updatedImages = images.filter((_, index) => index !== indexToRemove);
    onUpdate('images', null, updatedImages);
  };

  // Function to add a new image placeholder (or you can prompt for a URL)
  const addImage = () => {
    const url = prompt("Enter Image URL:");
    if (url) {
      onUpdate('images', null, [...images, url]);
    }
  };

  return (
    <div 
      className="p-6 space-y-6 border shadow-[var(--shadow-card)]" 
      style={{ 
        backgroundColor: 'var(--bg-card)', 
        borderRadius: 'var(--radius-lg)', 
        borderColor: 'var(--border)' 
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ImageIcon size={20} className="text-[var(--color-primary)]" />
          <h3 
            className="font-black uppercase tracking-tighter" 
            style={{ fontSize: 'var(--fs-h4)', color: 'var(--text-primary)' }}
          >
            Profile Gallery
          </h3>
        </div>
        <span style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-light)', fontWeight: 'var(--fw-bold)' }}>
          {images.length} / 6 Photos
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <AnimatePresence>
          {images.map((img, i) => (
            <motion.div
              key={img + i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative aspect-square group"
            >
              <img 
                src={img} 
                alt={`preview-${i}`} 
                className="w-full h-full object-cover border-2 shadow-sm"
                style={{ borderRadius: 'var(--radius-md)', borderColor: 'var(--border)' }}
              />
              
              {/* Delete Overlay */}
              <button
                onClick={() => removeImage(i)}
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-[var(--radius-md)]"
              >
                <div className="bg-white p-2 rounded-full text-red-500 hover:scale-110 transition-transform">
                  <Trash2 size={18} />
                </div>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Add Image Button */}
        {images.length < 6 && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={addImage}
            className="aspect-square border-2 border-dashed flex flex-col items-center justify-center gap-2 transition-colors hover:bg-[var(--bg-soft)]"
            style={{ 
              borderRadius: 'var(--radius-md)', 
              borderColor: 'var(--border)',
              color: 'var(--text-light)'
            }}
          >
            <div className="p-3 rounded-full bg-[var(--bg-main)] text-[var(--color-primary)]">
              <Plus size={24} />
            </div>
            <span style={{ fontSize: 'var(--fs-caption)', fontWeight: 'var(--fw-bold)' }} className="uppercase tracking-widest">
              Add Photo
            </span>
          </motion.button>
        )}
      </div>
      
      <p style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-light)' }} className="italic">
        * Tip: High quality portrait images (4:5 ratio) work best for your profile.
      </p>
    </div>
  );
};

export default GalleryEdit;