import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ExternalLink, Quote } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import StartJourneyButton from '../common/StartJourneyButton';

const SuccessStories = () => {
  const navigate = useNavigate();

  // Mock Data for the cards
  const stories = [
  { id: 1, name: "Rahul & Anjali", role: "Software Engineer & Architect", img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=500&auto=format&fit=crop" },
  { id: 2, name: "Vikram & Priya", role: "Surgeon & Graphic Designer", img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=500&auto=format&fit=crop" },
  { id: 3, name: "Arjun & Sneha", role: "Data Scientist & Digital Artist", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=500&auto=format&fit=crop" },
  { id: 4, name: "Amit & Pooja", role: "Product Manager & HR Director", img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=500&auto=format&fit=crop" },
  { id: 5, name: "Rohan & Meera", role: "Civil Servant & Professor", img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=500&auto=format&fit=crop" },
  { id: 6, name: "Kabir & Zara", role: "Pilot & Interior Designer", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop" },
  { id: 7, name: "Ishaan & Diya", role: "Investment Banker & Chef", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=500&auto=format&fit=crop" },
  { id: 8, name: "Aryan & Simran", role: "Marketing Head & Psychologist", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop" },
  { id: 9, name: "Siddharth & Ria", role: "Legal Consultant & Journalist", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=500&auto=format&fit=crop" },
  { id: 10, name: "Aditya & Kavya", role: "Cloud Architect & Fashion Stylist", img: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=500&auto=format&fit=crop" },
  { id: 11, name: "Neil & Avni", role: "Cyber Security & Content Creator", img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=500&auto=format&fit=crop" },
  { id: 12, name: "Yash & Kriti", role: "Entrepreneur & Wellness Coach", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=500&auto=format&fit=crop" },
  { id: 13, name: "Sameer & Tanvi", role: "AI Researcher & UI Developer", img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=500&auto=format&fit=crop" },
  { id: 14, name: "Dev & Ishita", role: "Chartered Accountant & Dentist", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop" },
  { id: 15, name: "Varun & Shreya", role: "Mechanical Engineer & NGO Founder", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop" }
];

  // Infinite Scroll Logic: Duplicate items for seamless loop
  const duplicatedStories = [...stories, ...stories];

  return (
    <section className="py-20 overflow-hidden" style={{ backgroundColor: 'var(--color-primary-2)' }}>
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
  <motion.h2 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    /* We use !important styles or direct scale to ensure it hits the "Big" look */
    className="text-[var(--fs-h1)] font-[var(--fw-bold)] text-[var(--text-primary)] leading-[1.1] tracking-tighter"
    style={{ fontSize: 'clamp(32px, 5vw, 64px)' }} 
  >
    Happily Ever <span className="text-[var(--color-primary)]">Afters</span>
  </motion.h2>
  
  <motion.div 
    initial={{ width: 0 }}
    whileInView={{ width: "80px" }}
    className="h-1.5 bg-[var(--color-accent)] mx-auto mt-4 rounded-full"
  />

  <p className="text-[var(--fs-h5)] text-[var(--text-secondary)] mt-6 max-w-2xl mx-auto font-[var(--fw-medium)]">
    Real stories of love found right here. 15,000+ couples and counting.
  </p>
</div>
      {/* HORIZONTAL SCROLLING CONTAINER */}
      <div className="flex w-full overflow-hidden relative group">
        <motion.div 
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 30, 
            repeat: Infinity 
          }}
          // Pause on hover
          whileHover={{ transition: { duration: 60 } }}
        >
          {duplicatedStories.map((story, index) => (
            <motion.div
              key={`${story.id}-${index}`}
              onClick={() => navigate(`/profile/${story.id}`)}
              className="relative w-[250px] h-[300px] flex-shrink-0 cursor-pointer overflow-hidden rounded-[var(--radius-lg)] group/card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all"
              style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
            >
              {/* Background Image with Zoom Effect */}
              <motion.img
                src={story.img}
                alt={story.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30 text-white">
                <Heart size={16} fill="white" className="animate-pulse" />
              </div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white whitespace-normal">
                <Quote size={24} className="text-[var(--color-accent)] mb-2 opacity-80" />
                <h3 className="text-[var(--fs-h5)] font-[var(--fw-bold)] leading-tight">
                  {story.name}
                </h3>
                <p className="text-[var(--fs-caption)] opacity-80 mt-1 font-[var(--fw-medium)] uppercase tracking-wider">
                  {story.role}
                </p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center gap-2 text-[var(--fs-small)] font-[var(--fw-bold)] text-[var(--color-accent)]"
                >
                  View Story <ExternalLink size={14} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom CTA */}
      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
         <StartJourneyButton/>
          
          <p className="mt-4 text-[var(--fs-caption)] text-[var(--color-accent)] font-[var(--fw-medium)] uppercase tracking-widest">
            Join 1M+ Happy Couples
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;