import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Sparkles, Heart } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { label: "Active Members", value: "500K+", icon: <Users size={20} /> },
    { label: "Matches Made", value: "120K+", icon: <Heart size={20} /> },
    { label: "Verified Profiles", value: "100%", icon: <ShieldCheck size={20} /> },
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-4 overflow-hidden">
      <div className="max-w-7xl px-4  mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Visual/Image Component */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.pixabay.com/photo/2024/04/27/01/12/couple-8722786_640.jpg" 
                alt="Happy Couple" 
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            
            {/* Decorative Floating Card */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-4 md:right-10 z-20 bg-[var(--color-primary)] text-white p-6 rounded-xl shadow-xl max-w-[200px]"
            >
              <Sparkles className="mb-2 text-[var(--color-accent)]" />
              <p className="font-bold text-lg">Founded on Trust</p>
              <p className="text-xs opacity-90">Helping you write your own forever story.</p>
            </motion.div>

            {/* Background Shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--color-secondary)]/5 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-bold">
              <Heart size={14} fill="currentColor" />
              <span>About LoveLink</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-(--fw-bold) text-(--color-secondary) leading-tight">
              Where Technology Meets <span className="text-(--color-primary)">Tradition</span>
            </h2>
            
            <p className="text-(--text-secondary) text-lg leading-relaxed">
              At LoveLink, we believe that finding a life partner shouldn't be left to chance. 
              We've combined advanced matchmaking algorithms with deep cultural understanding 
              to create a space where meaningful connections thrive.
            </p>

            <div className="space-y-4">
              <p className="text-[var(--text-primary)] font-medium">
                Why thousands choose LoveLink:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Manual Profile Screening", "AI-Powered Matching", "Privacy-First Approach", "Dedicated Support"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                      <Check size={12} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-100">
              {stats.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="text-[var(--color-primary)] mb-1 flex justify-center md:justify-start">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-[var(--color-secondary)]">{stat.value}</div>
                  <div className="text-[10px] md:text-xs uppercase tracking-wider text-[var(--text-light)]">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// Internal Check Icon helper
const Check = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default AboutSection;