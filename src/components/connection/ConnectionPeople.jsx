

// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, MapPin, Heart, UserCheck, Briefcase } from 'lucide-react';

// const ConnectionGrid = () => {
//   const [selectedProfile, setSelectedProfile] = useState(null);

//   useEffect(() => {
//     if (selectedProfile) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//   }, [selectedProfile]);

//   const profiles = Array.from({ length: 20 }).map((_, i) => ({
//     id: i + 1,
//     name: i % 2 === 0 ? "Arjun & Sneha" : "Rahul & Anjali",
//     professions: i % 2 === 0 ? "Data Scientist" : "Architect",
//     status: i % 3 === 0 ? "Gold" : "VIP",
//     badgeColor: i % 3 === 0 ? "var(--color-base)" : "var(--color-accent-base)",
//     imageUrl: `https://picsum.photos/seed/${i + 60}/400/600`,
//     location: ["Mumbai", "Delhi", "Pune"][i % 3],
//     age: 26 + (i % 5),
//     bio: "Passionate about exploring new cultures and sustainable living. Looking for a similar zest for life.",
//     interests: ["Travel", "Fitness", "Cooking"]
//   }));

//   return (
//     <div className="bg-[var(--bg-main)] min-h-screen p-3 md:p-8 font-[var(--ff-primary)]">
//       {/* Header - Compact for Mobile */}
//       <div className="max-w-7xl mx-auto mb-6 mt-2 px-1">
//         <h1 className="text-[var(--fs-h4)] md:text-[var(--fs-h2)] font-bold text-[var(--text-primary)]">
//           Featured Matches
//         </h1>
//         <p className="text-[var(--text-light)] text-xs md:text-sm">Verified profiles in your area</p>
//       </div>

//       {/* THE GRID - Multi-column responsive strategy */}
//       <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
//         {profiles.map((profile) => (
//           <motion.div 
//             layoutId={`card-${profile.id}`}
//             key={profile.id}
//             onClick={() => setSelectedProfile(profile)}
//             className="group relative bg-[var(--bg-card)] rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer shadow-sm active:scale-95 transition-transform"
//           >
//             <img 
//               src={profile.imageUrl} 
//               className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
//               alt={profile.name}
//             />
            
//             {/* Darker Gradient for better text readability */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            
//             {/* Status Badge - Smaller for mobile */}
//             <div className="absolute top-2 left-2">
//               <span 
//                 style={{ backgroundColor: profile.badgeColor }}
//                 className="text-[8px] md:text-[10px] text-white font-bold px-2 py-0.5 rounded-md flex items-center gap-1 shadow-lg"
//               >
//                 {profile.status}
//               </span>
//             </div>

//             {/* Compact Info Overlay */}
//             <div className="absolute bottom-0 left-0 right-0 p-3">
//               <h3 className="text-white text-sm md:text-base font-bold truncate">{profile.name}</h3>
//               <div className="flex items-center gap-1 text-[var(--color-accent)] text-[9px] md:text-[11px] font-medium uppercase">
//                 <Briefcase size={10} />
//                 <span className="truncate">{profile.professions}</span>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* ENHANCED MODAL - Mobile Bottom Sheet Style */}
//       <AnimatePresence>
//         {selectedProfile && (
//           <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center">
//             {/* Backdrop */}
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="absolute inset-0 bg-black/60 backdrop-blur-sm"
//               onClick={() => setSelectedProfile(null)}
//             />
            
//             {/* Modal Content */}
//             <motion.div 
//               initial={{ y: "100%" }}
//               animate={{ y: 0 }}
//               exit={{ y: "100%" }}
//               transition={{ type: "spring", damping: 25, stiffness: 200 }}
//               className="relative bg-[var(--bg-card)] w-full md:max-w-2xl h-[85vh] md:h-auto md:max-h-[90vh] rounded-t-[2rem] md:rounded-[2rem] overflow-hidden flex flex-col md:flex-row z-10 shadow-2xl"
//             >
//               {/* FIXED CLOSE BUTTON - High Visibility */}
//               <button 
//                 onClick={() => setSelectedProfile(null)}
//                 className="absolute top-4 right-4 z-[110] bg-[var(--color-accent)] text-white p-2 rounded-full shadow-xl hover:scale-110 active:scale-90 transition-all cursor-pointer"
//               >
//                 <X size={20} />
//               </button>

//               {/* Image Section */}
//               <div className="w-full md:w-1/2 h-64 md:h-full relative shrink-0">
//                 <img src={selectedProfile.imageUrl} className="w-full h-full object-cover" alt="Hero" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent md:hidden" />
//               </div>

//               {/* Info Section - Scrollable for data safety */}
//               <div className="flex-1 p-6 overflow-y-auto bg-[var(--bg-card)]">
//                 <div className="flex items-center gap-2 mb-2">
//                   <span className="bg-[var(--bg-soft)] text-[var(--color-accent-base)] text-[10px] font-bold px-2 py-1 rounded-md border border-[var(--border)]">
//                     VERIFIED MATCH
//                   </span>
//                 </div>
                
//                 <h2 className="text-2xl font-bold text-[var(--text-primary)]">{selectedProfile.name}</h2>
//                 <p className="text-[var(--color-accent-base)] font-semibold text-sm mb-4">{selectedProfile.professions}</p>

//                 <div className="grid grid-cols-2 gap-2 mb-6">
//                   <div className="flex items-center gap-2 bg-[var(--bg-main)] p-2 rounded-xl text-xs">
//                     <MapPin size={14} className="text-[var(--text-light)]" />
//                     {selectedProfile.location}
//                   </div>
//                   <div className="flex items-center gap-2 bg-[var(--bg-main)] p-2 rounded-xl text-xs">
//                     <UserCheck size={14} className="text-[var(--text-light)]" />
//                     {selectedProfile.age} Yrs
//                   </div>
//                 </div>

//                 <div className="mb-6">
//                   <h4 className="text-[var(--text-light)] font-bold text-[10px] uppercase tracking-tighter mb-2">Bio</h4>
//                   <p className="text-[var(--text-secondary)] text-sm leading-relaxed italic italic">"{selectedProfile.bio}"</p>
//                 </div>

//                 {/* Footer Actions - Sticky-ready */}
//                 <div className="mt-auto flex gap-2 pt-4">
//                   <button className="flex-1 bg-[var(--color-primary)] text-white py-3 rounded-xl font-bold text-sm shadow-lg active:scale-95 transition-transform cursor-pointer">
//                     Connect
//                   </button>
//                   <button className="w-12 h-12 border border-[var(--border)] rounded-xl flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-colors cursor-pointer">
//                     <Heart size={20} />
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default ConnectionGrid;











import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { X, MapPin, Heart, UserCheck, Briefcase, Zap } from 'lucide-react';

const ConnectionGrid = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  
  // Drag-to-close logic
  const dragY = useMotionValue(0);
  const opacity = useTransform(dragY, [0, 200], [1, 0]);

  useEffect(() => {
    if (selectedProfile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProfile]);

  const profiles = Array.from({ length: 20 }).map((_, i) => ({
    id: i + 1,
    name: i % 2 === 0 ? "Arjun & Sneha" : "Rahul & Anjali",
    professions: i % 2 === 0 ? "Data Scientist" : "Architect",
    status: i % 3 === 0 ? "Gold" : "VIP",
    badgeColor: i % 3 === 0 ? "var(--color-base)" : "var(--color-accent-base)",
    imageUrl: `https://picsum.photos/seed/${i + 60}/400/600`,
    location: ["Mumbai", "Delhi", "Pune"][i % 3],
    age: 26 + (i % 5),
    bio: "Passionate about exploring new cultures and sustainable living. Looking for a similar zest for life. We love weekend getaways and experimental cooking!",
    interests: ["Travel", "Fitness", "Cooking", "Design", "Music"]
  }));

  return (
    <div className="bg-[var(--bg-main)] min-h-screen p-3 md:p-8 font-[var(--ff-primary)]">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-6 mt-2 px-1">
        <h1 className="text-[var(--fs-h4)] md:text-[var(--fs-h2)] font-bold text-[var(--text-primary)] flex items-center gap-2">
          <Zap className="text-[var(--color-accent)]" size={24} />
          Featured Matches
        </h1>
        <p className="text-[var(--text-light)] text-xs md:text-sm">Swipe through verified profiles</p>
      </div>

      {/* THE GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
        {profiles.map((profile) => (
          <motion.div 
            key={profile.id}
            whileTap={{ scale: 0.97 }}
            onClick={() => setSelectedProfile(profile)}
            className="group relative bg-[var(--bg-card)] rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer shadow-sm hover:shadow-md transition-shadow"
          >
            <img 
              src={profile.imageUrl} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              alt={profile.name}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            <div className="absolute top-2 left-2">
              <span style={{ backgroundColor: profile.badgeColor }} className="text-[8px] md:text-[10px] text-white font-bold px-2 py-0.5 rounded-md shadow-lg flex items-center gap-1">
                {profile.status}
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-3">
              <h3 className="text-white text-sm md:text-base font-bold truncate">{profile.name}</h3>
              <p className="text-[var(--color-accent)] text-[9px] md:text-[11px] font-medium uppercase tracking-wider">
                {profile.professions}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* SWIPEABLE MODAL */}
      <AnimatePresence>
        {selectedProfile && (
          <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center overflow-hidden">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ opacity }}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setSelectedProfile(null)}
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.y > 100) setSelectedProfile(null);
              }}
              style={{ y: dragY }}
              className="relative bg-[var(--bg-card)] w-full md:max-w-3xl h-[90vh] md:h-auto md:max-h-[85vh] rounded-t-[2.5rem] md:rounded-[2rem] shadow-2xl flex flex-col md:flex-row overflow-hidden touch-none md:touch-auto"
            >
              {/* Drag Handle for Mobile */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-gray-300 rounded-full z-[120] md:hidden" />

              {/* CLOSE BUTTON - Fixed Position */}
              <button 
                onClick={() => setSelectedProfile(null)}
                className="absolute top-5 right-5 z-[130] bg-[var(--color-accent)] text-white p-2.5 rounded-full shadow-lg active:scale-75 transition-transform cursor-pointer hidden md:block"
              >
                <X size={20} />
              </button>

              {/* Image Section */}
              <div className="w-full md:w-[45%] h-72 md:h-auto relative shrink-0">
                <img src={selectedProfile.imageUrl} className="w-full h-full object-cover" alt="Profile" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent md:hidden" />
              </div>

              {/* Info Section - Now with Scroll safety */}
              <div className="flex-1 p-6 md:p-8 flex flex-col overflow-hidden bg-[var(--bg-card)]">
                <div className="flex-1 overflow-y-auto pr-1 custom-scrollbar touch-auto">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-[var(--bg-soft)] text-[var(--color-accent-base)] text-[10px] font-bold px-2 py-1 rounded-md border border-[var(--border)]">
                      VERIFIED MATCH
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-black text-[var(--text-primary)] leading-tight">{selectedProfile.name}</h2>
                  <p className="text-[var(--color-accent-base)] font-bold text-base mt-1">{selectedProfile.professions}</p>

                  <div className="flex flex-wrap gap-2 my-5">
                    <div className="flex items-center gap-1.5 bg-[var(--bg-main)] px-3 py-2 rounded-xl text-xs font-semibold">
                      <MapPin size={14} className="text-[var(--color-accent)]" /> {selectedProfile.location}
                    </div>
                    <div className="flex items-center gap-1.5 bg-[var(--bg-main)] px-3 py-2 rounded-xl text-xs font-semibold">
                      <UserCheck size={14} className="text-[var(--color-accent)]" /> {selectedProfile.age} Yrs
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-[var(--text-light)] font-bold text-[10px] uppercase tracking-[0.2em] mb-2">About Us</h4>
                    <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed italic text-balance">
                      "{selectedProfile.bio}"
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProfile.interests.map(item => (
                      <span key={item} className="text-[10px] bg-[var(--bg-soft)] px-2 py-1 rounded-md font-bold text-[var(--text-light)]">#{item}</span>
                    ))}
                  </div>
                </div>

                {/* Sticky Footer Actions */}
                <div className="pt-4 flex gap-3 border-t border-gray-100 bg-[var(--bg-card)]">
                  <button className="flex-1 bg-[var(--color-primary)] text-white py-4 rounded-2xl font-black text-sm tracking-wide shadow-xl active:scale-95 transition-all cursor-pointer">
                    Connect Now
                  </button>
                  <button className="w-14 h-14 border-2 border-[var(--border)] rounded-2xl flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-100 transition-all active:scale-90 cursor-pointer">
                    <Heart size={24} fill="currentColor" className="opacity-20 hover:opacity-100" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ConnectionGrid;