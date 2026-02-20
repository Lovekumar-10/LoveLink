import React from "react";
import { motion } from "framer-motion";
import { Heart, ExternalLink, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FeaturedProfiles = () => {
  const navigate = useNavigate();
  // const handleRedirect = (id) => {
  //   window.location.href = `/profile/${id}`;
  // };
  //   const handleRedirect = (userId) => {
  //   // Navigate to /profile and pass userId as a query or state
  //   navigate(`/profile`, { state: { userId } });
  // };

  // Generating 20 users with the detailed format you requested
  const users = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: i % 2 === 0 ? "Arjun & Sneha" : "Rahul & Anjali", // Using couple-style naming if preferred
    role: i % 2 === 0 ? "Data Scientist & Artist" : "Engineer & Architect",
    tag: i % 4 === 0 ? "GOLD" : "VIP",
    img: `https://i.pravatar.cc/500?u=${i + 100}`,
    isOnline: true,
  }));

  return (
    <section
      className="py-20 overflow-hidden"
      style={{ backgroundColor: "var(--bg-main)" }}
    >
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[var(--fw-bold)] text-[var(--text-primary)] leading-[1.1] tracking-tighter"
          style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
        >
          Featured <span className="text-[var(--color-primary)]">Members</span>
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          className="h-1.5 mx-auto mt-4 rounded-full"
          style={{ backgroundColor: "var(--color-primary)" }}
        />

        <p className="text-[var(--fs-h5)] text-[var(--text-secondary)] mt-6 max-w-2xl mx-auto font-[var(--fw-medium)]">
          Connect with high-achieving professionals and creative souls.
        </p>
      </div>

      {/* DYNAMIC GRID - 20 Users */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {users.map((user, index) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (index % 4) * 0.1 }}
              viewport={{ once: true }}
              onClick={() => navigate(`/profile/${user.id}`)}
              // onClick={() => handleRedirect(user.id)}
              className="relative h-[380px] flex-shrink-0 cursor-pointer overflow-hidden rounded-[var(--radius-lg)] group/card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all border border-[var(--border)]"
              style={{ backgroundColor: "var(--bg-card)" }}
            >
              {/* Background Image with Zoom Effect */}
              <motion.img
                src={user.img}
                alt={user.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
              />

              {/* Overlay Gradient (Matches Success Stories) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Top Floating Badge (Status & Tag) */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                {/* Gold/VIP Badge - Styled like your requested detail */}
                <div
                  className="px-3 py-1 rounded-md text-[10px] font-black tracking-widest flex items-center gap-1 shadow-lg"
                  style={{
                    backgroundColor:
                      user.tag === "GOLD" ? "#EAB308" : "var(--color-primary)",
                    color: "#fff",
                  }}
                >
                  <ShieldCheck size={12} /> {user.tag}
                </div>

                {/* Heart/Live Indicator */}
                <div className="bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30 text-white">
                  <Heart
                    size={16}
                    fill={user.isOnline ? "white" : "none"}
                    className={user.isOnline ? "animate-pulse" : ""}
                  />
                </div>
              </div>

              {/* Bottom Text Content (Card Details) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white whitespace-normal">
                <h3 className="text-[var(--fs-h5)] font-[var(--fw-bold)] leading-tight group-hover/card:text-[var(--color-primary)] transition-colors">
                  {user.name}
                </h3>
                <p className="text-[var(--fs-caption)] opacity-80 mt-1 font-[var(--fw-medium)] uppercase tracking-wider">
                  {user.role}
                </p>

                {/* Hover Reveal Action */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center gap-2 text-[var(--fs-small)] font-[var(--fw-bold)]"
                  style={{ color: "var(--color-primary)" }}
                >
                  Connect Now <ExternalLink size={14} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Capsule CTA */}
      <div className="mt-20 text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => (window.location.href = "/register")}
          className="px-12 py-5 rounded-full font-black text-lg shadow-2xl cursor-pointer uppercase tracking-tighter"
          style={{ backgroundColor: "var(--color-primary)", color: "#fff" }}
        >
          View All Members
        </motion.button>
      </div>
    </section>
  );
};

export default FeaturedProfiles;
