import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  Send,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full pt-20 pb-10"
      style={{
        background: `linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)`,
        fontFamily: "var(--ff-primary)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Column 1: Brand Identity */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div
                className="logo-container lub-dub-animation w-14 h-14 overflow-hidden rotate-3 border-2 shadow-lg cursor-pointer transition-all duration-300"
                style={{
                  borderRadius: "var(--radius-md)",
                  borderColor: "rgba(255,255,255,0.1)",
                  position: "relative",
                }}
              >
                {/* The Image */}
                <img
                  src="/logoo.png"
                  alt="LoveLink Logo"
                  className="w-full h-full object-cover"
                />

                {/* New Cool Effect: Animated Shine Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full hover:animate-[shimmer_2s_infinite] pointer-events-none" />
              </div>
              <h2
                className="font-black uppercase tracking-tighter text-white"
                style={{ fontSize: "var(--fs-h4)" }}
              >
                Love<span style={{ color: "var(--color-base)" }}>Link</span>
              </h2>
            </div>

            <p
              className="leading-relaxed opacity-80"
              style={{ fontSize: "var(--fs-small)", color: "var(--bg-soft)" }}
            >
              Connecting hearts through LoveLink. Discover meaningful
              relationships and your perfect match within our trusted global
              community.
            </p>

            <div className="flex items-center gap-4">
              <SocialIcon icon={<Facebook size={18} />} link="#" />
              <SocialIcon icon={<Twitter size={18} />} link="#" />
              <SocialIcon icon={<Instagram size={18} />} link="#" />
              <SocialIcon icon={<Linkedin size={18} />} link="#" />
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:ml-10">
            <h3
              className="mb-8 uppercase tracking-[0.2em] text-white"
              style={{
                fontSize: "var(--fs-caption)",
                fontWeight: "var(--fw-bold)",
              }}
            >
              Navigation
            </h3>
            <ul className="space-y-4">
              <FooterLink text="Our Philosophy" href="/about" />
              <FooterLink text="Success Stories" href="/stories" />
              <FooterLink text="Membership Plans" href="/pricing" />
              <FooterLink text="Safety Protocol" href="/safety" />
            </ul>
          </div>

          {/* Column 3: Discovery */}
          <div>
            <h3
              className="mb-8 uppercase tracking-[0.2em] text-white"
              style={{
                fontSize: "var(--fs-caption)",
                fontWeight: "var(--fw-bold)",
              }}
            >
              Discovery
            </h3>
            <ul className="space-y-4">
              <FooterLink text="New Members" href="/members" />
              <FooterLink text="Verified Profiles" href="/vip" />
              <FooterLink text="Match Feed" href="/feed" />
              <FooterLink text="Advanced Search" href="/search" />
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div
            className="p-6"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              borderRadius: "var(--radius-lg)",
            }}
          >
            <h3
              className="mb-4 text-white"
              style={{ fontSize: "var(--fs-h6)", fontWeight: "var(--fw-bold)" }}
            >
              Stay in the Loop
            </h3>
            <p
              className="mb-6 opacity-60"
              style={{ fontSize: "var(--fs-caption)", color: "var(--bg-soft)" }}
            >
              Get dating tips and success stories delivered weekly.
            </p>

            <div className="relative group">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-5 py-4 border bg-white/5 text-white focus:outline-none transition-all"
                style={{
                  borderRadius: "var(--radius-md)",
                  borderColor: "rgba(255,255,255,0.1)",
                  fontSize: "var(--fs-caption)",
                }}
              />
              <button
                className="absolute right-2 top-2 p-2.5 text-white transition-all cursor-pointer flex items-center justify-center shadow-lg"
                style={{
                  backgroundColor: "var(--color-accent)",
                  borderRadius: "var(--radius-sm)",
                }}
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-10 border-t flex flex-col md:flex-row justify-between items-center gap-8"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          {/* Bottom Left: Your Picture & Copyright */}
          <div className="flex items-center gap-5">
            <div
              className="w-12 h-12 rounded-full border-2 overflow-hidden shadow-inner"
              style={{ borderColor: "var(--color-accent)" }}
            >
              <img
                src="/logoo.png"
                alt="LoveLink Creator"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="flex flex-col">
              <div
                className="uppercase tracking-widest font-black"
                style={{
                  fontSize: "var(--fs-caption)",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                LoveLink Global
              </div>
              <div
                className="font-medium opacity-30"
                style={{ fontSize: "var(--fs-caption)", color: "white" }}
              >
                © {currentYear} All rights reserved.
              </div>
            </div>
          </div>

          <div
            className="flex items-center gap-8 uppercase tracking-widest opacity-40"
            style={{
              fontSize: "var(--fs-caption)",
              fontWeight: "var(--fw-bold)",
              color: "white",
            }}
          >
            <a
              href="#"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              Terms
            </a>
            <Youtube
              size={20}
              className="ml-4 cursor-pointer hover:text-red-500 transition-colors"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

/* --- Helpers --- */

const FooterLink = ({ text, href }) => (
  <li>
    <a
      href={href}
      className="transition-all duration-300 hover:translate-x-2 block flex items-center gap-2 group"
      style={{
        fontSize: "var(--fs-small)",
        color: "rgba(255,255,255,0.6)",
        fontWeight: "var(--fw-medium)",
      }}
    >
      <span
        className="w-0 h-[1px] group-hover:w-3 transition-all duration-300"
        style={{ backgroundColor: "var(--color-accent)" }}
      ></span>
      <span className="group-hover:text-white">{text}</span>
    </a>
  </li>
);

const SocialIcon = ({ icon, link }) => (
  <a
    href={link}
    className="w-10 h-10 border transition-all flex items-center justify-center bg-white/5"
    style={{
      borderRadius: "var(--radius-sm)",
      borderColor: "rgba(255,255,255,0.1)",
      color: "rgba(255,255,255,0.6)",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = "var(--color-accent)";
      e.currentTarget.style.color = "#fff";
      e.currentTarget.style.borderColor = "var(--color-accent)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
      e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)";
      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
    }}
  >
    {icon}
  </a>
);

export default Footer;
