// import React, { useState, useEffect, useRef } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { LogOut, Menu, X } from "lucide-react"; // Using Lucide as requested

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { user, logout } = useAuth();

//   const [activePos, setActivePos] = useState({ left: 0, top: 0, width: 0, height: 0 });
//   const [hoverPos, setHoverPos] = useState({ left: 0, top: 0, width: 0, height: 0 });
//   const [isHovering, setIsHovering] = useState(false);

//   const linksRef = useRef([]);

//   const publicLinks = [
//     { name: "Home", path: "/" },
//     { name: "Search", path: "/search" },
//     { name: "Pricing", path: "/pricing" },
//     { name: "About", path: "/about" },
//   ];

//   const privateLinks = [
//     { name: "Dashboard", path: "/dashboard" },
//     { name: "Matches", path: "/matches" },
//     { name: "Chat", path: "/chat" },
//     { name: "Profile", path: "/profile" },
//   ];

//   const links = user ? privateLinks : publicLinks;

//   useEffect(() => {
//     const activeLink = linksRef.current.find(
//       (el) => el && el.getAttribute("href") === location.pathname
//     );

//     if (activeLink) {
//       setActivePos({
//         left: activeLink.offsetLeft,
//         top: activeLink.offsetTop,
//         width: activeLink.offsetWidth,
//         height: activeLink.offsetHeight,
//       });
//     }
//   }, [location.pathname, user]);

//   const handleLogout = () => {
//     logout();
//     navigate("/");
//   };

//   return (
//     <nav className="fixed w-full z-[100] border-b"
//          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', fontFamily: 'var(--ff-primary)' }}>
//       <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">

//         {/* Logo */}
//         <Link to="/" className="flex items-center">
//           <img className="h-10 w-auto" src="/logoo.png" alt="Logo" />
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center relative gap-1">
//           {/* Hover Capsule */}
//           {isHovering && (
//             <div
//               className="absolute rounded-full transition-all duration-200 pointer-events-none"
//               style={{
//                 backgroundColor: 'var(--bg-soft)',
//                 width: `${hoverPos.width}px`,
//                 height: `${hoverPos.height}px`,
//                 left: `${hoverPos.left}px`,
//                 top: `${hoverPos.top}px`,
//               }}
//             />
//           )}

//           {/* Active Capsule */}
//           <div
//             className="absolute rounded-full transition-all duration-300 pointer-events-none"
//             style={{
//               backgroundColor: 'var(--color-primary)',
//               width: `${activePos.width}px`,
//               height: `${activePos.height}px`,
//               left: `${activePos.left}px`,
//               top: `${activePos.top}px`,
//             }}
//           />

//           {links.map((link, idx) => (
//             <Link
//               key={link.name}
//               to={link.path}
//               ref={(el) => (linksRef.current[idx] = el)}
//               onMouseEnter={(e) => {
//                 setHoverPos({ left: e.currentTarget.offsetLeft, top: e.currentTarget.offsetTop, width: e.currentTarget.offsetWidth, height: e.currentTarget.offsetHeight });
//                 setIsHovering(true);
//               }}
//               onMouseLeave={() => setIsHovering(false)}
//               className="relative z-10 px-4 py-1.5 text-[13px] rounded-full transition-colors duration-300"
//               style={{
//                 color: location.pathname === link.path ? '#ffffff' : 'var(--text-secondary)',
//                 fontWeight: 'var(--fw-medium)'
//               }}
//             >
//               {link.name}
//             </Link>
//           ))}

//           {/* Auth Buttons */}
//           <div className="ml-4 flex items-center gap-2 border-l pl-4" style={{ borderColor: 'var(--border)' }}>
//             {user ? (
//               <button
//                 onClick={handleLogout}
//                 className="flex items-center gap-2 px-4 py-1.5 text-[13px] text-white rounded-[var(--radius-sm)] transition-all hover:opacity-90"
//                 style={{ backgroundColor: 'var(--color-secondary)' }}
//               >
//                 <LogOut size={14} /> Logout
//               </button>
//             ) : (
//               <>
//                 <Link to="/login" className="px-4 py-1.5 text-[13px] font-[var(--fw-semibold)] transition-colors" style={{ color: 'var(--text-primary)' }}>
//                   Sign In
//                 </Link>
//                 <Link to="/register" className="px-4 py-1.5 text-[13px] text-white rounded-[var(--radius-sm)] transition-all shadow-sm" style={{ backgroundColor: 'var(--color-primary)' }}>
//                   Get Started
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>

//         {/* Mobile Toggle */}
//         <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-1 text-[var(--text-primary)]">
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu Overlay */}
//       {isOpen && (
//         <div className="md:hidden fixed inset-0 top-14 bg-white z-[90] flex flex-col p-6 gap-4 animate-in fade-in slide-in-from-top-4">
//           {links.map((link) => (
//             <Link
//               key={link.name}
//               to={link.path}
//               onClick={() => setIsOpen(false)}
//               className="text-[var(--fs-h5)] font-[var(--fw-bold)] border-b pb-2"
//               style={{ color: location.pathname === link.path ? 'var(--color-primary)' : 'var(--text-primary)' }}
//             >
//               {link.name}
//             </Link>
//           ))}
//           <div className="mt-auto flex flex-col gap-3">
//              {user ? (
//                 <button onClick={handleLogout} className="w-full py-3 text-center rounded-[var(--radius-md)] text-white bg-[var(--error)] font-bold">Logout</button>
//              ) : (
//                <>
//                 <Link to="/login" onClick={() => setIsOpen(false)} className="w-full py-3 text-center border rounded-[var(--radius-md)] font-bold">Sign In</Link>
//                 <Link to="/register" onClick={() => setIsOpen(false)} className="w-full py-3 text-center text-white bg-[var(--color-primary)] rounded-[var(--radius-md)] font-bold">Register</Link>
//                </>
//              )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { LogOut, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const [activePos, setActivePos] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });
  const [hoverPos, setHoverPos] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });
  const [isHovering, setIsHovering] = useState(false);

  const linksRef = useRef([]);
  // ✅ Only these links for Navbar
  const publicLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Pricing", path: "/pricing" },
  ];

  const privateLinks = [
    { name: "Home", path: "/" },
    // { name: "Dashboard", path: "/dashboard" },
    { name: "Connection", path: "/connection" },
    { name: "About", path: "/about" },
    { name: "Pricing", path: "/pricing" },

    // { name: "Chat", path: "/pricing" },
  ];

  const links = user ? privateLinks : publicLinks;

  useEffect(() => {
    const activeLink = linksRef.current.find(
      (el) => el && el.getAttribute("href") === location.pathname,
    );

    if (activeLink) {
      setActivePos({
        left: activeLink.offsetLeft,
        top: activeLink.offsetTop,
        width: activeLink.offsetWidth,
        height: activeLink.offsetHeight,
      });
    }
  }, [location.pathname, user]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav
      className="fixed w-full z-[100] border-b"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border)",
        fontFamily: "var(--ff-primary)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img className="h-10 w-auto" src="/logoo.png" alt="Logo" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center relative gap-1">
          {isHovering && (
            <div
              className="absolute rounded-full transition-all duration-200 pointer-events-none"
              style={{
                backgroundColor: "var(--bg-soft)",
                width: `${hoverPos.width}px`,
                height: `${hoverPos.height}px`,
                left: `${hoverPos.left}px`,
                top: `${hoverPos.top}px`,
              }}
            />
          )}

          <div
            className="absolute rounded-full transition-all duration-300 pointer-events-none"
            style={{
              backgroundColor: "var(--color-primary)",
              width: `${activePos.width}px`,
              height: `${activePos.height}px`,
              left: `${activePos.left}px`,
              top: `${activePos.top}px`,
            }}
          />

          {links.map((link, idx) => (
            <Link
              key={link.name}
              to={link.path}
              ref={(el) => (linksRef.current[idx] = el)}
              onMouseEnter={(e) => {
                setHoverPos({
                  left: e.currentTarget.offsetLeft,
                  top: e.currentTarget.offsetTop,
                  width: e.currentTarget.offsetWidth,
                  height: e.currentTarget.offsetHeight,
                });
                setIsHovering(true);
              }}
              onMouseLeave={() => setIsHovering(false)}
              className="relative z-10 px-4 py-1.5 text-[13px] rounded-full transition-colors duration-300"
              style={{
                color:
                  location.pathname === link.path
                    ? "#ffffff"
                    : "var(--text-secondary)",
                fontWeight: "var(--fw-medium)",
              }}
            >
              {link.name}
            </Link>
          ))}

          {/* Auth Buttons */}
          <div
            className="ml-4 flex items-center gap-2 border-l pl-4"
            style={{ borderColor: "var(--border)" }}
          >
            {user ? (
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-1.5 text-[13px] text-white cursor-pointer rounded-[var(--radius-sm)] transition-all hover:opacity-90"
                style={{ backgroundColor: "var(--color-secondary)" }}
              >
                <LogOut size={14} /> Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-1.5 text-[13px] cursor-pointer font-(--fw-semibold) transition-colors"
                  style={{ color: "var(--text-primary)" }}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-1.5 text-[13px] cursor-pointer text-white rounded-sm transition-all shadow-sm"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1 text-[var(--text-primary)]"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-14 bg-white z-[90] flex flex-col p-6 gap-4 animate-in fade-in slide-in-from-top-4">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-[var(--fs-h5)] font-[var(--fw-bold)] border-b pb-2"
              style={{
                color:
                  location.pathname === link.path
                    ? "var(--color-primary)"
                    : "var(--text-primary)",
              }}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-auto flex flex-col gap-3">
            {user ? (
              <button
                onClick={handleLogout}
                className="w-full py-3 text-center cursor-pointer rounded-[var(--radius-md)] text-white bg-[var(--error)] font-bold"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 text-center border cursor-pointer rounded-[var(--radius-md)] font-bold"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 text-center cursor-pointer text-white bg-[var(--color-primary)] rounded-[var(--radius-md)] font-bold"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
