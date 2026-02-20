// // src/components/Auth/Login.jsx
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Eye, EyeOff, Mail, Lock, Chrome, Facebook } from 'lucide-react';
// import { useAuth } from '../../context/AuthContext';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await login(email, password);
//       navigate('/dashboard'); // redirect after successful login
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 bg-[var(--bg-main)] font-[var(--ff-primary)]">
//       <motion.div
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="w-full max-w-[350px] p-5 rounded-[var(--radius-md)]"
//         style={{ 
//           backgroundColor: 'var(--bg-card)', 
//           boxShadow: 'var(--shadow-card)',
//           border: `1px solid var(--border)` 
//         }}
//       >
//         {/* Header */}
//         <div className="mb-4">
//           <h1 className="text-[var(--fs-h6)] font-[var(--fw-bold)] text-[var(--text-primary)]">Sign In</h1>
//           <p className="text-[12px] text-[var(--text-secondary)]">Login to your account</p>
//         </div>

//         <form className="space-y-3" onSubmit={handleLogin}>
//           {/* Email */}
//           <div className="space-y-1">
//             <label className="text-[11px] font-[var(--fw-semibold)] text-[var(--text-primary)] uppercase tracking-wider">Email</label>
//             <div className="relative">
//               <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-light)]" />
//               <input
//                 type="email"
//                 placeholder="name@example.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="w-full pl-9 pr-3 py-1.5 text-[13px] bg-transparent border border-[var(--border)] rounded-[var(--radius-sm)] outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
//               />
//             </div>
//           </div>

//           {/* Password */}
//           <div className="space-y-1">
//             <label className="text-[11px] font-[var(--fw-semibold)] text-[var(--text-primary)] uppercase tracking-wider">Password</label>
//             <div className="relative">
//               <Lock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-light)]" />
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="••••••••"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 className="w-full pl-9 pr-9 py-1.5 text-[13px] bg-transparent border border-[var(--border)] rounded-[var(--radius-sm)] outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-light)] hover:text-[var(--text-primary)]"
//               >
//                 {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
//               </button>
//             </div>
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             className="w-full py-2 mt-2 bg-[var(--color-primary)] text-white text-[13px] font-[var(--fw-medium)] rounded-[var(--radius-sm)] hover:opacity-90 transition-all active:scale-[0.98]"
//           >
//             Login
//           </button>
//         </form>

//         {/* Divider */}
//         <div className="relative my-4">
//           <div className="absolute inset-0 flex items-center">
//             <span className="w-full border-t border-[var(--border)]"></span>
//           </div>
//           <div className="relative flex justify-center text-[10px] uppercase">
//             <span className="bg-[var(--bg-card)] px-2 text-[var(--text-light)] font-bold tracking-tighter">
//               Or continue with
//             </span>
//           </div>
//         </div>

//         {/* Social Buttons */}
//         <div className="grid grid-cols-2 gap-2">
//           <button className="flex items-center justify-center gap-2 py-2 border border-[var(--border)] rounded-[var(--radius-sm)] hover:bg-[var(--bg-soft)] transition-colors text-[12px] font-[var(--fw-medium)]">
//             <Chrome size={14} className="text-red-500" />
//             Google
//           </button>
//           <button className="flex items-center justify-center gap-2 py-2 border border-[var(--border)] rounded-[var(--radius-sm)] hover:bg-[var(--bg-soft)] transition-colors text-[12px] font-[var(--fw-medium)]">
//             <Facebook size={14} className="text-blue-600" />
//             Facebook
//           </button>
//         </div>

//         {/* Footer Link */}
//         <p className="mt-5 text-[12px] text-center text-[var(--text-secondary)]">
//           Don't have an account?{' '}
//           <button 
//             className="text-[var(--color-secondary)] font-[var(--fw-bold)] hover:underline"
//             onClick={() => navigate('/register')}
//           >
//             Sign Up
//           </button>
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default Login;

































// // name : -  love
// // mail : - bro161129@gmail.com
// // ps :- Lovekumar@161129


























// src/components/Auth/Login.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { FcGoogle } from "react-icons/fc"; 
import { FaFacebook } from "react-icons/fa"; 
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[var(--bg-main)] font-[var(--ff-primary)]">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[350px] p-5 rounded-[var(--radius-md)]"
        style={{
          backgroundColor: "var(--bg-card)",
          boxShadow: "var(--shadow-card)",
          border: `1px solid var(--border)`,
        }}
      >
        {/* Header */}
        <div className="mb-4">
          <h1 className="text-[var(--fs-h6)] font-[var(--fw-bold)] text-[var(--text-primary)]">
            Sign In
          </h1>
          <p className="text-[var(--fs-caption)] text-[var(--text-secondary)]">
            Login to your account
          </p>
        </div>

        <form className="space-y-3" onSubmit={handleLogin}>
          {/* Email */}
          <div className="space-y-1">
            <label className="text-[var(--fs-caption)] font-[var(--fw-semibold)] text-[var(--text-primary)] uppercase tracking-wider">
              Email
            </label>
            <div className="relative">
              <Mail
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-light)]"
              />
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-9 pr-3 py-1.5 text-[var(--fs-small)] bg-transparent border border-[var(--border)] rounded-[var(--radius-sm)] outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label className="text-[var(--fs-caption)] font-[var(--fw-semibold)] text-[var(--text-primary)] uppercase tracking-wider">
              Password
            </label>
            <div className="relative">
              <Lock
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-light)]"
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-9 pr-9 py-1.5 text-[var(--fs-small)] bg-transparent border border-[var(--border)] rounded-[var(--radius-sm)] outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-light)] hover:text-[var(--text-primary)]"
              >
                {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 mt-2 bg-[var(--color-primary)] cursor-pointer text-white text-[var(--fs-small)] font-[var(--fw-medium)] rounded-[var(--radius-sm)] hover:opacity-90 transition-all active:scale-[0.98]"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-[var(--border)]"></span>
          </div>
          <div className="relative flex justify-center text-[var(--fs-caption)] uppercase">
            <span className="bg-[var(--bg-card)] px-2 text-[var(--text-light)] font-[var(--fw-bold)]">
              Or continue with
            </span>
          </div>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <button className="flex items-center justify-center gap-2 py-2 border border-[var(--border)] rounded-[var(--radius-sm)] text-[var(--fs-small)] text-[var(--text-primary)] hover:bg-[var(--bg-soft)] transition-colors">
            <FcGoogle size={18} /> Google
          </button>
          <button className="flex items-center justify-center gap-2 py-2 border border-[var(--border)] rounded-[var(--radius-sm)] text-[var(--fs-small)] text-[var(--text-primary)] hover:bg-[var(--bg-soft)] transition-colors">
            <FaFacebook size={18} color="#1877F2" /> Facebook
          </button>
        </div>

        {/* Footer Link */}
        <p className="mt-5 text-[var(--fs-small)] text-center text-[var(--text-secondary)]">
          Don't have an account?{" "}
          <button
            className="text-[var(--color-secondary)]  cursor-pointer  font-[var(--fw-bold)] hover:underline"
            onClick={() => navigate("/register")}
          >
            Sign Up
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;