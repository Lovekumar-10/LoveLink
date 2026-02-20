import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const Notification = ({
  show,
  type = "info", // success | error | warning | info
  title = "Notification",
  message = "This is a notification message.",
  duration = 4000,
  onClose,
}) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose && onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  const bgColor =
    type === "success"
      ? "bg-green-500"
      : type === "error"
      ? "bg-red-500"
      : type === "warning"
      ? "bg-yellow-500"
      : "bg-blue-500";

  return (
    <div className="fixed top-5 right-5 z-50 w-80">
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className={`relative p-4 rounded-xl shadow-lg text-white ${bgColor}`}
          >
            <div className="flex justify-between items-start gap-3">
              <div>
                <h4 className="font-semibold text-sm">{title}</h4>
                <p className="text-xs mt-1 opacity-90">{message}</p>
              </div>

              <button
                onClick={onClose}
                className="opacity-80 hover:opacity-100 transition"
              >
                <X size={16} />
              </button>
            </div>

            {/* Progress Bar */}
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: duration / 1000, ease: "linear" }}
              className="absolute bottom-0 left-0 h-1 bg-white/70 rounded-b-xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Notification;
