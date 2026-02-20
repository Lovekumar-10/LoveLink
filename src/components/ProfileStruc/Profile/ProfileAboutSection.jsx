import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { User, Moon, Star, Heart } from 'lucide-react';
import { DummyUserContext } from '../../../context/DummyUserContext';

const ProfileAboutSection = () => {
  const { user } = useContext(DummyUserContext);

  if (!user) return <p className="text-center py-20">Loading...</p>;

  // Use dynamic data
  const personalDetails = [
    { key: "Marital Status", val: user.maritalStatus, icon: <Heart size={14} /> },
    { key: "Diet", val: user.diet, icon: <Star size={14} /> },
    { key: "Smoking / Drinking", val: user.smokingDrinking, icon: <User size={14} /> },
    { key: "Physical Status", val: user.physicalStatus, icon: <Star size={14} /> },
  ];

  const astroDetails = [
    { key: "Date of Birth", val: user.dob, icon: <Moon size={14} /> },
    { key: "Gothra", val: user.gothra, icon: <User size={14} /> },
    { key: "Raasi", val: user.raasi, icon: <Star size={14} /> },
    { key: "Manglik", val: user.manglik, icon: <Moon size={14} /> },
  ];

  return (
    <section className="mt-16 space-y-12">
      {/* 1. Bio / Narrative Paragraph */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h2 
          className="font-black uppercase tracking-tighter"
          style={{ fontSize: 'var(--fs-h2)', color: 'var(--text-primary)' }}
        >
          About <span style={{ color: 'var(--color-primary)' }}>{user.name}</span>
        </h2>
        <p 
          className="leading-relaxed max-w-4xl"
          style={{ 
            fontSize: 'var(--fs-body)', 
            color: 'var(--text-secondary)',
            fontFamily: 'var(--ff-secondary)' 
          }}
        >
          {user.about}
        </p>
      </motion.div>

      {/* 2. Structured Data Tables Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <InfoGroup title="Personal Details" data={personalDetails} />
        <InfoGroup title="Horoscope & Astro" data={astroDetails} />
      </div>
    </section>
  );
};

const InfoGroup = ({ title, data }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="w-full"
  >
    <h3 
      className="uppercase font-black tracking-[0.2em] mb-4 border-b-2 w-fit pb-1"
      style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-primary)', borderColor: 'var(--color-primary)' }}
    >
      {title}
    </h3>
    <div 
      className="overflow-hidden border shadow-[var(--shadow-card)]"
      style={{ borderRadius: 'var(--radius-md)', borderColor: 'var(--border)' }}
    >
      {data.map((item, i) => (
        <div 
          key={i} 
          className="grid grid-cols-2 p-4 border-b last:border-0 hover:bg-white transition-colors"
          style={{ backgroundColor: i % 2 === 0 ? 'var(--bg-soft)' : 'var(--bg-card)', borderColor: 'var(--border)' }}
        >
          <div className="flex items-center gap-3">
            <span style={{ color: 'var(--color-primary)' }}>{item.icon}</span>
            <span 
              className="uppercase tracking-wider"
              style={{ fontSize: 'var(--fs-caption)', fontWeight: 'var(--fw-bold)', color: 'var(--text-light)' }}
            >
              {item.key}
            </span>
          </div>
          <span 
            style={{ fontSize: 'var(--fs-small)', fontWeight: 'var(--fw-bold)', color: 'var(--text-primary)', fontFamily: 'var(--ff-secondary)' }}
          >
            {item.val}
          </span>
        </div>
      ))}
    </div>
  </motion.div>
);

export default ProfileAboutSection;
