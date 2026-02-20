import React, { useContext, useState, useEffect } from "react";
import { DummyUserContext } from "../../../context/DummyUserContext";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Heart,
  ArrowRight,
  Sparkles,
  Trash2,
  Plus,
  User,
  MapPin,
  Camera,
  Info,
  GraduationCap,
  Briefcase,
  Languages,
} from "lucide-react";

const ProfileEditForm = () => {
  const { user, updateUser } = useContext(DummyUserContext);
  const [formData, setFormData] = useState(user || {});
  const [saveStatus, setSaveStatus] = useState("idle");
  const navigate = useNavigate();

  useEffect(() => {
    if (user) setFormData(user);
  }, [user]);

  if (!user)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg-main)]">
        <p className="font-[var(--ff-primary)] animate-pulse">
          Loading Your Journey...
        </p>
      </div>
    );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (index, value) => {
    const newImages = [...(formData.images || [])];
    newImages[index] = value;
    setFormData((prev) => ({ ...prev, images: newImages }));
  };

  const addImageField = () => {
    setFormData((prev) => ({ ...prev, images: [...(prev.images || []), ""] }));
  };

  const removeImage = (index) => {
    const newImages = [...(formData.images || [])];
    newImages.splice(index, 1);
    setFormData((prev) => ({ ...prev, images: newImages }));
  };

  const handleSave = () => {
    setSaveStatus("launching");
    updateUser(formData);
    setTimeout(() => {
      setSaveStatus("redirecting");
      setTimeout(() => navigate("/profile"), 800);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-main)] selection:bg-[var(--color-primary-2)]">
      <style>{`
        @keyframes lubDub {
          0% { transform: scale(1); }
          15% { transform: scale(1.2); }
          30% { transform: scale(1); }
          45% { transform: scale(1.25); }
          100% { transform: scale(1); }
        }
        .lub-dub-active { animation: lubDub 1.2s ease-in-out infinite; }
      `}</style>

      <div className="max-w-6xl mx-auto pt-32 pb-20 px-4 md:px-8">
        {/* HEADER */}
        <div className="mb-12 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="p-5 bg-white rounded-full shadow-[var(--shadow-card)] border-2 border-[var(--color-primary)]">
            <Heart
              className="text-[var(--color-accent)] lub-dub-active"
              size={32}
              fill="currentColor"
            />
          </div>
          <div className="font-[var(--ff-primary)]">
            <h1
              className="font-black uppercase tracking-tighter text-[var(--text-primary)]"
              style={{ fontSize: "var(--fs-h1)" }}
            >
              Edit <span className="text-[var(--color-primary)]">Profile</span>
            </h1>
            <p
              className="font-[var(--ff-secondary)] text-[var(--text-secondary)]"
              style={{ fontSize: "var(--fs-body)" }}
            >
              Refine your profile to find your perfect match.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-10">
            <SectionWrapper title="Identity" icon={<User size={20} />}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="Full Name"
                  name="name"
                  value={formData.name || ""}
                  onChange={handleChange}
                />
                <InputField
                  label="Age"
                  name="age"
                  value={formData.age || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-6">
                <InputField
                  label="Current Location"
                  name="location"
                  value={formData.location || ""}
                  onChange={handleChange}
                  icon={<MapPin size={14} />}
                />
              </div>
            </SectionWrapper>

            <SectionWrapper title="Visual Gallery" icon={<Camera size={20} />}>
              <div className="space-y-4 font-[var(--ff-secondary)]">
                {formData.images?.map((img, i) => (
                  <div key={i} className="flex gap-3 items-center group">
                    <input
                      type="text"
                      value={img}
                      onChange={(e) => handleImageChange(i, e.target.value)}
                      placeholder="Image URL"
                      className="flex-1 p-3 border border-[var(--border)] rounded-[var(--radius-md)] bg-[var(--bg-main)] text-[var(--fs-small)] outline-none focus:border-[var(--color-primary)] transition-all"
                    />
                    <button
                      onClick={() => removeImage(i)}
                      className="p-2 text-[var(--error)] hover:bg-red-50 rounded-full"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
                <button
                  onClick={addImageField}
                  className="flex items-center gap-2 cursor-pointer text-[var(--color-primary)] font-bold text-[var(--fs-caption)] uppercase tracking-widest mt-4 hover:opacity-70 transition-opacity font-[var(--ff-primary)]"
                >
                  <Plus size={18} /> Add New URL
                </button>
              </div>
            </SectionWrapper>

            <SectionWrapper title="Personal Story" icon={<Info size={20} />}>
              <textarea
                name="about"
                value={formData.about || ""}
                onChange={handleChange}
                rows={6}
                className="w-full p-4 border border-[var(--border)] rounded-[var(--radius-md)] bg-[var(--bg-main)] font-[var(--ff-secondary)] text-[var(--text-primary)] outline-none focus:border-[var(--color-primary)]"
                style={{ fontSize: "var(--fs-body)" }}
                placeholder="Share your personality and partner expectations..."
              />
            </SectionWrapper>
          </div>

          <div className="lg:col-span-4 space-y-10">
            <SectionWrapper title="Attributes" icon={<Sparkles size={18} />}>
              <div className="space-y-5">
                <InputField
                  label="Height"
                  name="height"
                  value={formData.height || ""}
                  onChange={handleChange}
                />
                <InputField
                  label="Languages"
                  name="languages"
                  value={formData.languages || ""}
                  onChange={handleChange}
                  icon={<Languages size={14} />}
                />
                <InputField
                  label="Religion"
                  name="religion"
                  value={formData.religion || ""}
                  onChange={handleChange}
                />
              </div>
            </SectionWrapper>

            <SectionWrapper
              title="Professional"
              icon={<GraduationCap size={18} />}
            >
              <div className="space-y-5">
                <InputField
                  label="Education"
                  name="education"
                  value={formData.education || ""}
                  onChange={handleChange}
                />
                <InputField
                  label="Job Title"
                  name="occupation"
                  value={formData.occupation || ""}
                  onChange={handleChange}
                  icon={<Briefcase size={14} />}
                />
                <InputField
                  label="Company"
                  name="company"
                  value={formData.company || ""}
                  onChange={handleChange}
                />
                <InputField
                  label="Income"
                  name="income"
                  value={formData.income || ""}
                  onChange={handleChange}
                />
              </div>
            </SectionWrapper>

            {/* BUTTON SECTION */}
            <div className="pt-4 font-[var(--ff-primary)]">
              <motion.button
                onClick={handleSave}
                initial="rest"
                whileHover={saveStatus === "idle" ? "hover" : ""}
                animate={saveStatus !== "idle" ? "clicked" : "rest"}
                disabled={saveStatus !== "idle"}
                className="relative overflow-hidden flex items-center justify-between px-6 py-4 rounded-full border-2 shadow-xl w-full"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--bg-card)",
                  cursor: saveStatus === "idle" ? "pointer" : "default",
                }}
              >
                <motion.div
                  variants={{
                    rest: { x: "-100%" },
                    hover: { x: 0 },
                    clicked: { x: 0, backgroundColor: "var(--color-primary)" },
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 z-0"
                  style={{ backgroundColor: "var(--color-primary)" }}
                />

                <div className="relative z-10 flex-1 text-left">
                  <AnimatePresence mode="wait">
                    {saveStatus === "redirecting" ? (
                      <motion.span
                        key="s"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-white font-bold uppercase text-[11px] tracking-widest flex items-center gap-2"
                      >
                        Updated! <Sparkles size={14} />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="i"
                        variants={{
                          rest: { color: "var(--color-primary)" },
                          hover: { color: "#fff" },
                        }}
                        className="font-black uppercase tracking-widest text-[11px]"
                      >
                        Save Changes
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                <div className="relative z-10 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    {saveStatus === "redirecting" ? (
                      <motion.div
                        key="h"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                      >
                        <Heart
                          size={18}
                          className="text-[var(--color-accent)]"
                          fill="currentColor"
                        />
                      </motion.div>
                    ) : (
                      <motion.div key="a">
                        <ArrowRight
                          size={18}
                          className="text-[var(--color-primary)]"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.button>
              <p className="mt-4 text-center text-[10px] font-bold text-[var(--text-light)] uppercase tracking-[0.2em] font-[var(--ff-secondary)]">
                Secure Connection
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionWrapper = ({ title, icon, children }) => (
  <div className="p-6 md:p-8 bg-white border border-[var(--border)] rounded-[var(--radius-lg)] shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-hover)]">
    <div className="flex items-center gap-3 mb-8 border-b border-[var(--bg-main)] pb-4">
      <div className="p-2.5 bg-[var(--bg-soft)] rounded-xl text-[var(--color-primary)]">
        {icon}
      </div>
      <h3
        className="font-[var(--ff-primary)] font-black uppercase tracking-wider text-[var(--text-primary)]"
        style={{ fontSize: "var(--fs-h5)" }}
      >
        {title}
      </h3>
    </div>
    {children}
  </div>
);

const InputField = ({ label, name, value, onChange, icon }) => (
  <div className="flex flex-col gap-2">
    <label className="font-[var(--ff-primary)] font-black text-[var(--fs-caption)] text-[var(--text-light)] uppercase tracking-[0.15em] flex items-center gap-2">
      {icon} {label}
    </label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      className="p-3.5 border border-[var(--border)] rounded-[var(--radius-md)] bg-[var(--bg-main)] font-[var(--ff-secondary)] text-[var(--text-primary)] outline-none focus:border-[var(--color-primary)] transition-all"
      style={{ fontSize: "var(--fs-body)" }}
    />
  </div>
);

export default ProfileEditForm;
