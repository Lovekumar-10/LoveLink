import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  const handleRedirect = () => {
    // Redirects user to the registration page
    window.location.href = '/register'; 
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    /* Removed overflow-hidden and rounded corners from main section */
    <section className="w-full" style={{ backgroundColor: 'var(--bg-main)' }}>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto px-4 py-16 md:py-24 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Left: Image (Kept rounded for modern look, but container is square) */}
        <motion.div variants={itemVariants} className="relative group">
          <div className="relative overflow-hidden rounded-[10px] shadow-2xl aspect-video md:aspect-auto border-none">
            <img 
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1000" 
              alt="Connect"
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
            />
          </div>
        </motion.div>

        {/* Right: Content Section */}
        <div className="flex flex-col space-y-8 text-center md:text-left">
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            We put you in touch with <br />
            <span style={{ color: 'var(--color-primary)' }}>nearby girls and guys!</span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl max-w-xl mx-auto md:mx-0"
            style={{ color: 'var(--text-secondary)' }}
          >
            Join our vibrant community today. Whether you are looking for networking, 
            friendship, or more, we bridge the gap.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start"
          >
            {/* BUTTONS REMAIN CAPSULES */}
            <CapsuleBtn 
              text="Add Profile" 
              isPrimary={true} 
              onClick={handleRedirect} 
            />
            <CapsuleBtn 
              text="Start Search" 
              isPrimary={false} 
              onClick={handleRedirect} 
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Footer Banner - Made Square (Removed rounded-[3rem]) */}
      <div className="w-full">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="w-full p-10 md:p-16 flex flex-col md:flex-row justify-between items-center gap-8 shadow-inner"
          style={{ backgroundColor: 'var(--color-primary)' }}
        >
          <h3 className="text-2xl md:text-4xl font-bold text-white text-center">
            Create your free account today!
          </h3>
          <motion.button
            whileHover={{ scale: 1.05, x: 10 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRedirect}
            /* Signup Button remains a Capsule */
            className="bg-white px-12 py-5 rounded-full font-black shadow-lg flex items-center gap-3 cursor-pointer whitespace-nowrap uppercase tracking-wider"
            style={{ color: 'var(--color-primary)' }}
          >
            Signup Now <span>→</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

/* --- The Specialized Capsule Button --- */
const CapsuleBtn = ({ text, isPrimary, onClick }) => {
  return (
    <motion.button
      initial="initial"
      whileHover="hovered"
      whileTap="pressed"
      onClick={onClick}
      /* This remains rounded-full for the 100% circular effect */
      className="relative px-10 py-4 rounded-full font-bold border-2 overflow-hidden transition-all duration-300 w-full sm:w-auto cursor-pointer flex items-center justify-center uppercase tracking-wide text-sm"
      style={{ 
        borderColor: 'var(--color-primary)',
        color: isPrimary ? '#FFFFFF' : 'var(--color-primary)',
        backgroundColor: isPrimary ? 'var(--color-primary)' : 'transparent'
      }}
    >
      {/* Background Split Effect */}
      <motion.span
        variants={{ initial: { x: "-100%" }, hovered: { x: "-50%" } }}
        className="absolute inset-0 z-0"
        style={{ backgroundColor: 'var(--color-secondary)' }}
      />
      <motion.span
        variants={{ initial: { x: "100%" }, hovered: { x: "50%" } }}
        className="absolute inset-0 z-0"
        style={{ backgroundColor: 'var(--color-secondary)' }}
      />

      <span className="relative z-10 transition-colors duration-300">
        {text}
      </span>
    </motion.button>
  );
};

export default CTASection;