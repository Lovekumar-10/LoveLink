import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StartJourneyButton = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState('idle');

  const handleAction = () => {
    setStatus('launching');
    setTimeout(() => {
      setStatus('redirecting');
      setTimeout(() => {
        navigate('/login');
      }, 600);
    }, 400);
  };

  return (
    <div className="flex flex-col items-center mt-8 px-4 w-full">
      <motion.button
        onClick={handleAction}
        initial="rest"
        whileHover={status === 'idle' ? "hover" : ""}
        animate={status !== 'idle' ? "clicked" : "rest"}
        disabled={status !== 'idle'}
        className="relative overflow-hidden flex items-center justify-between 
                   px-5 py-2.5 md:px-6 md:py-3 
                   rounded-full border-2 transition-all duration-300 shadow-md
                   w-full max-w-[240px] md:max-w-[280px]" // Reduced size by ~30%
        style={{
          borderColor: 'var(--border)',
          backgroundColor: 'var(--bg-card)',
          cursor: status === 'idle' ? 'pointer' : 'default',
        }}
      >
        {/* Background Fill Animation */}
        <motion.div
          variants={{
            rest: { x: "-100%" },
            hover: { x: 0 },
            clicked: { x: 0, backgroundColor: 'var(--color-secondary)' }
          }}
          transition={{ duration: 0.4, ease: "circOut" }}
          className="absolute inset-0 z-0"
          style={{ backgroundColor: 'var(--color-primary)' }}
        />

        {/* Text Area */}
        <div className="relative z-10 flex-1 text-left">
          <AnimatePresence mode="wait">
            {status === 'redirecting' ? (
              <motion.span
                key="redirect-text"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-1.5 text-white font-[var(--fw-bold)] text-[11px] md:text-[13px]"
              >
                Connecting... <Sparkles size={12} className="animate-pulse" />
              </motion.span>
            ) : (
              <motion.span
                key="initial-text"
                variants={{
                  rest: { color: 'var(--color-primary)' },
                  hover: { color: '#ffffff' }
                }}
                className="font-[var(--fw-bold)] text-[11px] md:text-[13px] uppercase tracking-wider"
              >
                Start Journey
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Responsive Icon Circle */}
        <div className="relative z-10 flex items-center justify-center 
                        w-7 h-7 md:w-8 md:h-8 
                        rounded-full bg-white shadow-sm overflow-hidden ml-2">
          <AnimatePresence mode="wait">
            {status === 'redirecting' ? (
              <motion.div
                key="heart-icon"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-pink-500"
              >
                <Heart size={16} fill="currentColor" strokeWidth={0} />
              </motion.div>
            ) : (
              <motion.div
                key="arrow-icon"
                animate={status === 'launching' ? { x: 40, opacity: 0 } : { x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{ color: 'var(--color-primary)' }}
              >
                <ArrowRight size={16} strokeWidth={3} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.button>
      
      {/* Responsive Caption */}
      <p className="mt-3 text-[10px] md:text-[11px] text-[var(--text-light)] font-medium text-center">
        Trusted by 15k+ couples
      </p>
    </div>
  );
};

export default StartJourneyButton;