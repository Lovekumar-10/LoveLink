import React, { useContext } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  MessageCircle,
  Share2,
  Ruler,
  Languages,
  Users,
  Briefcase,
  Pencil,
} from "lucide-react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useNavigate, useParams, Link } from "react-router-dom";

// Import your modular components
import Gallery from "./Gallery";
import StatBox from "./StatBox";
import DetailRow from "./DetailRow";
import ProfileAboutSection from "./ProfileAboutSection";

// Import your UserContext
import { DummyUserContext } from "../../../context/DummyUserContext";

const ProfilePreview = () => {
  const { id } = useParams();
  const { users } = useContext(DummyUserContext);
  const navigate = useNavigate();

  const user = users.find((u) => u.id === Number(id));

  if (!user) return <p className="text-center py-20">Loading Profile...</p>;

  const {
    name,
    age,
    location,
    images = [],
    height,
    languages,
    religion,
    education,
    occupation,
    income,
    company,
    about,
  } = user;

  return (
    <div className="min-h-screen bg-[var(--bg-main)] font-[var(--ff-primary)]">
      {/* Floating Edit Button - Placed for easy access without breaking the layout */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate("/profile/edit")}
        className="fixed bottom-8 right-8 z-50 p-4  cursor-pointer rounded-full bg-[var(--color-primary)] text-white shadow-xl hover:bg-[var(--color-accent)] transition-colors flex items-center justify-center"
      >
        <Pencil size={24} />
      </motion.button>

      <main className="max-w-7xl mx-auto pt-28 pb-20 px-4 md:px-10">
        {/* TOP SECTION: Gallery + Quick Info */}
        <div className="flex flex-col lg:flex-row gap-12 lg:items-start">
          {/* Left: Gallery Component */}
          <Gallery
            images={
              images.length ? images : ["https://via.placeholder.com/400"]
            }
          />

          {/* Right: Personal Bio & Stats */}
          <div className="lg:w-1/2 space-y-8">
            <header className="space-y-3">
              <div
                className="relative group overflow-hidden px-3 py-1 rounded-full flex items-center gap-2 w-fit border border-[var(--success)]/20 shadow-sm"
                style={{ backgroundColor: "rgba(34, 197, 94, 0.05)" }}
              >
                {/* Shimmer Effect Layer */}
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5,
                    ease: "linear",
                    repeatDelay: 1,
                  }}
                  className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-1/2 -skew-x-12"
                />

                <div className="relative z-10 flex items-center gap-2">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-[var(--success)] flex items-center justify-center"
                  >
                    <RiVerifiedBadgeFill size={18} />
                  </motion.div>

                  <span
                    className="font-[var(--ff-primary)] font-black uppercase tracking-[0.15em] text-[var(--success)]"
                    style={{ fontSize: "var(--fs-caption)" }}
                  >
                    Verified Profile
                  </span>
                </div>
              </div>
              <h1
                className="font-black text-[var(--text-primary)] leading-tight"
                style={{ fontSize: "var(--fs-h1)" }}
              >
                {name}, <span className="opacity-40">{age}</span>
              </h1>
              <p className="flex items-center gap-2 text-[var(--text-secondary)] font-medium">
                <MapPin size={18} className="text-[var(--color-primary)]" />{" "}
                {location}
              </p>
            </header>

            {/* Action Buttons */}
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 py-6 border-y border-[var(--border)]">
              {/* Send Interest */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 min-w-[200px] py-4 rounded-full font-black text-white shadow-[var(--shadow-card)] flex items-center justify-center gap-3 uppercase tracking-tighter bg-[var(--color-primary)]"
              >
                <MessageCircle size={20} /> Send Interest
              </motion.button>

              {/* Chat Button */}
              <Link
                to={"/chat"} // Navigate to /chat/:id
                className="flex-1 min-w-[200px] py-4 rounded-full font-black text-white shadow-[var(--shadow-card)] flex items-center justify-center gap-3 uppercase tracking-tighter bg-[var(--color-accent)] hover:bg-[var(--color-accent-base)] transition-colors"
              >
                <MessageCircle size={20} /> Chat
              </Link>

              {/* Share Button */}
              <button className="p-4 rounded-full border-2 border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--color-accent)] transition-all">
                <Share2 size={20} />
              </button>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <StatBox
                icon={<Ruler size={18} />}
                label="Height"
                value={height}
              />
              <StatBox
                icon={<Languages size={18} />}
                label="Languages"
                value={languages}
              />
              <StatBox
                icon={<Users size={18} />}
                label="Religion"
                value={religion}
              />
            </div>

            {/* Professional Background Card */}
            <div
              className="p-8 space-y-6"
              style={{
                backgroundColor: "var(--bg-soft)",
                borderRadius: "var(--radius-lg)",
              }}
            >
              <h3 className="text-lg font-bold flex items-center gap-2 text-[var(--text-primary)]">
                <Briefcase size={20} className="text-[var(--color-primary)]" />{" "}
                Career & Education
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <DetailRow label="Education" value={education} />
                <DetailRow label="Occupation" value={occupation} />
                <DetailRow label="Annual Income" value={income} />
                <DetailRow label="Company" value={company} />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Detailed About & Tables */}
        <ProfileAboutSection name={name} content={about} />
      </main>
    </div>
  );
};

export default ProfilePreview;
