import React, { useState, useEffect } from "react";
import { motion, useSpring, AnimatePresence } from "framer-motion";
import { Check, X, Heart, Star, Crown, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [basicViews, setBasicViews] = useState(50);
  const [premiumViews, setPremiumViews] = useState(250);
  const navigate = useNavigate();

  const handleStart = () => navigate("/login");

  // Dynamic Price Logic
  const calculateBasicPrice = () => {
    const base = isAnnual ? 899 : 1299;
    return base + basicViews * 3;
  };

  const calculatePremiumPrice = () => {
    const base = isAnnual ? 2499 : 3499;
    return base + premiumViews * 2;
  };

  // Animated Price Springs
  const basicPriceSpring = useSpring(calculateBasicPrice(), { stiffness: 100 });
  const premiumPriceSpring = useSpring(calculatePremiumPrice(), {
    stiffness: 100,
  });

  useEffect(() => {
    basicPriceSpring.set(calculateBasicPrice());
  }, [basicViews, isAnnual]);

  useEffect(() => {
    premiumPriceSpring.set(calculatePremiumPrice());
  }, [premiumViews, isAnnual]);

  const plans = [
    {
      name: "Soulmate Basic",
      icon: <Heart size={24} className="text-rose-500" />,
      desc: "Perfect for those just starting their search",
      sliderLabel: "Profile Views",
      range: { min: 20, max: 200, current: basicViews, setter: setBasicViews },
      features: [
        { text: "Send Unlimited Interests", included: true },
        { text: "View 20+ Verified Contacts", included: true },
        { text: "Standard Profile Tag", included: true },
        { text: "Chat with Matches", included: true },
        { text: "Priority Customer Support", included: false },
        { text: "Profile Booster (3x Visibility)", included: false },
      ],
    },
    {
      name: "Eternal Premium",
      icon: <Star size={24} className="text-white" />,
      popular: true, // This gets the Golden Background
      desc: "Most popular choice for serious seekers",
      sliderLabel: "Direct Contacts",
      range: {
        min: 100,
        max: 1000,
        current: premiumViews,
        setter: setPremiumViews,
      },
      features: [
        { text: "Everything in Basic", included: true },
        { text: "View Unlimited Contacts", included: true },
        { text: "Personalized Matchmaking", included: true },
        { text: "Profile Booster (10x Visibility)", included: true },
        { text: "Verified Badge on Profile", included: true },
        { text: "Privacy Control Settings", included: true },
      ],
    },
    {
      name: "Infinity Lifetime",
      icon: <Crown size={24} className="text-indigo-600" />,
      price: "Custom",
      features: [
        { text: "Dedicated Relationship Manager", included: true },
        { text: "Face-to-Face Meeting Setup", included: true },
        { text: "Background Verification Service", included: true },
        { text: "Astro-Matchmaking Reports", included: true },
        { text: "Exclusive Elite Lounge Access", included: true },
        { text: "No Expiry Date", included: true },
      ],
    },
  ];

  // Motion Variants
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <section className="bg-[var(--color-secondary)] text-white py-16 px-4 font-[family-name:var(--ff-primary)] overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Animated Header Text */}
        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={textVariant}
          className="text-[length:var(--fs-h1)] font-[var(--fw-bold)] mb-4"
        >
          Find Your{" "}
          <span className="text-[var(--color-accent)]">Perfect Match</span>
        </motion.h1>

        {/* Toggle with Motion */}
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={textVariant}
          className="flex flex-col items-center gap-4 mb-16"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={isAnnual ? "annual" : "monthly"}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-[var(--color-accent)] font-semibold text-sm"
            >
              {isAnnual
                ? "✨ 30% Annual Savings Applied"
                : "Save 30% with Yearly Membership"}
            </motion.span>
          </AnimatePresence>

          <div className="flex items-center gap-4">
            <span className={!isAnnual ? "text-white" : "text-gray-400"}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-7 bg-[var(--color-primary)] rounded-full p-1 relative"
            >
              <motion.div
                animate={{ x: isAnnual ? 28 : 0 }}
                className="w-5 h-5 bg-white rounded-full"
              />
            </button>
            <span className={isAnnual ? "text-white" : "text-gray-400"}>
              Yearly
            </span>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative rounded-[var(--radius-lg)] p-8 shadow-xl flex flex-col transition-all ${
                plan.popular
                  ? "bg-gradient-to-b from-amber-400 to-amber-600 text-white scale-105 z-10" // GOLDEN BACKGROUND
                  : "bg-white text-[var(--text-primary)]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-accent-base)] text-amber-600 px-5 py-1.5 rounded-full text-xs font-bold shadow-lg">
                  RECOMMENDED
                </div>
              )}

              {/* Icon & Title */}
              <div className="mb-6 flex flex-col items-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="mb-2"
                >
                  {plan.icon}
                </motion.div>
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p
                  className={`text-sm ${plan.popular ? "text-amber-50" : "text-gray-500"}`}
                >
                  {plan.desc}
                </p>
              </div>

              {/* Price */}
              <div
                className={`mb-8 border-y py-6 text-center ${plan.popular ? "border-amber-300/30" : "border-gray-100"}`}
              >
                <div
                  className={`text-3xl font-bold ${plan.popular ? "text-white" : "text-[var(--color-secondary)]"}`}
                >
                  {plan.name === "Soulmate Basic" && (
                    <motion.span>
                      ₹{Math.round(basicPriceSpring.get()).toLocaleString()}
                    </motion.span>
                  )}
                  {plan.name === "Eternal Premium" && (
                    <motion.span>
                      ₹{Math.round(premiumPriceSpring.get()).toLocaleString()}
                    </motion.span>
                  )}
                  {plan.name === "Infinity Lifetime" && plan.price}
                </div>

                {/* Slider */}
                {plan.range && (
                  <div className="mt-6">
                    <input
                      type="range"
                      min={plan.range.min}
                      max={plan.range.max}
                      value={plan.range.current}
                      onChange={(e) =>
                        plan.range.setter(Number(e.target.value))
                      }
                      className={`w-full ${plan.popular ? "accent-white" : "accent-[var(--color-primary)]"}`}
                    />
                    <p
                      className={`text-sm font-bold mt-2 ${plan.popular ? "text-white" : "text-[var(--color-primary)]"}`}
                    >
                      {plan.range.current} {plan.sliderLabel}
                    </p>
                  </div>
                )}
              </div>

              {/* Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleStart}
                className={`w-full py-4 rounded-[var(--radius-md)] font-bold mb-6 transition-colors ${
                  plan.popular
                    ? "bg-white text-amber-600 hover:bg-gray-100 shadow-lg"
                    : "bg-[var(--color-primary)] text-white hover:bg-opacity-90"
                }`}
              >
                {plan.name === "Infinity Lifetime"
                  ? "Consult Expert →"
                  : "Get Started Now →"}
              </motion.button>

              {/* Features */}
              <div className="text-left space-y-3">
                {plan.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    {feat.included ? (
                      <Check
                        size={16}
                        className={
                          plan.popular ? "text-white" : "text-green-500"
                        }
                      />
                    ) : (
                      <X
                        size={16}
                        className={
                          plan.popular ? "text-amber-300" : "text-red-400"
                        }
                      />
                    )}
                    <span
                      className={`${!feat.included && "opacity-50 line-through"}`}
                    >
                      {feat.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex flex-col sm:flex-row justify-center items-center gap-8 text-[13px] opacity-80"
        >
          {/* Footer info for the page */}
          <div className="mt-20 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12  text-[13px]">
            {/* 100% Privacy */}
            <div className="flex items-center gap-2">
              <ShieldCheck size={20} className="text-[var(--success)]" />
              100% Privacy
            </div>

            {/* Verified ID */}
            <div className="flex items-center gap-2">
              <Check size={20} className="text-[var(--bg-soft)]" />
              Verified ID
            </div>

            {/* Happy Stories */}
            <div className="flex items-center gap-2">
              <Heart size={20} className="text-[var(--color-accent)]" />
              Happy Stories
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
