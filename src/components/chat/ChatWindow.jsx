// import React, { useState, useRef, useEffect } from "react";
// import { Send, ArrowLeft, MoreVertical, Phone, Video, Paperclip, Smile } from "lucide-react";

// const ChatWindow = ({ chat, onBack }) => {
//   const [messages, setMessages] = useState(chat?.messages || []);
//   const [newMessage, setNewMessage] = useState("");
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     setMessages(chat?.messages || []);
//   }, [chat]);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const handleSend = () => {
//     if (!newMessage.trim()) return;

//     const msg = {
//       id: Date.now(),
//       text: newMessage,
//       sender: "me",
//       time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//     };

//     setMessages((prev) => [...prev, msg]);
//     setNewMessage("");
//   };

//   if (!chat) {
//     return (
//       <div className="flex-1 flex flex-col items-center justify-center bg-[var(--bg-main)] text-[var(--text-light)]">
//         <div className="p-6 rounded-full bg-[var(--bg-card)] mb-4">
//           <Send size={40} className="opacity-20" />
//         </div>
//         <p className="text-[var(--fs-h5)] font-medium">Select a conversation to start chatting</p>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col flex-1 h-full bg-[var(--bg-main)] overflow-hidden">
//       {/* --- HEADER --- */}
//       <header className="px-6 py-3 border-b border-[var(--border)] bg-[var(--bg-card)]/80 backdrop-blur-md flex items-center gap-4 z-10">
//         <button onClick={onBack} className="md:hidden p-2 -ml-2 hover:bg-[var(--bg-main)] rounded-full transition-colors">
//           <ArrowLeft size={20} />
//         </button>

//         <div className="relative">
//           <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[var(--color-accent)] to-blue-400 flex items-center justify-center text-white font-bold">
//             {chat.name.charAt(0)}
//           </div>
//           {chat.isOnline && (
//             <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[var(--bg-card)] rounded-full"></div>
//           )}
//         </div>

//         <div className="flex-1 min-w-0">
//           <h2 className="text-[var(--fs-base)] font-bold text-[var(--text-primary)] truncate">
//             {chat.name}
//           </h2>
//           <p className="text-[var(--fs-small)] text-[var(--text-light)]">
//             {chat.isOnline ? "Active now" : "Last seen recently"}
//           </p>
//         </div>

//         <div className="flex items-center gap-1">
//           <button className="p-2 text-[var(--text-light)] hover:text-[var(--color-accent)] transition-colors"><Phone size={20} /></button>
//           <button className="p-2 text-[var(--text-light)] hover:text-[var(--color-accent)] transition-colors"><Video size={20} /></button>
//           <button className="p-2 text-[var(--text-light)] hover:text-[var(--color-accent)] transition-colors"><MoreVertical size={20} /></button>
//         </div>
//       </header>

//       {/* --- MESSAGES AREA --- */}
//       <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 custom-scrollbar">
//         {messages.map((msg, idx) => {
//           const isMe = msg.sender === "me";
//           return (
//             <div key={msg.id} className={`flex ${isMe ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
//               <div className={`group relative max-w-[80%] md:max-w-[60%]`}>
//                 <div
//                   className={`px-4 py-2.5 shadow-sm ${
//                     isMe
//                       ? "bg-[var(--color-accent)] text-white rounded-2xl rounded-tr-none"
//                       : "bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border)] rounded-2xl rounded-tl-none"
//                   }`}
//                 >
//                   <p className="text-[15px] leading-relaxed">{msg.text}</p>
//                 </div>
//                 <div className={`flex items-center mt-1 gap-1 ${isMe ? "justify-end" : "justify-start"}`}>
//                   <span className="text-[10px] text-[var(--text-light)] uppercase font-medium">
//                     {msg.time || "10:00 AM"}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//         <div ref={messagesEndRef} />
//       </div>

//       {/* --- INPUT AREA --- */}
//       <div className="p-4 bg-[var(--bg-main)]">
//         <div className="max-w-4xl mx-auto flex items-end gap-2 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-2 shadow-lg focus-within:border-[var(--color-accent)] transition-all">
//           <button className="p-2 text-[var(--text-light)] hover:bg-[var(--bg-main)] rounded-xl transition-colors">
//             <Smile size={22} />
//           </button>
//           <button className="p-2 text-[var(--text-light)] hover:bg-[var(--bg-main)] rounded-xl transition-colors">
//             <Paperclip size={22} />
//           </button>

//           <textarea
//             rows="1"
//             placeholder="Write a message..."
//             className="flex-1 py-2 px-1 bg-transparent border-none focus:outline-none focus:ring-0 text-[var(--text-primary)] resize-none max-h-32"
//             value={newMessage}
//             onChange={(e) => setNewMessage(e.target.value)}
//             onKeyDown={(e) => {
//               if (e.key === "Enter" && !e.shiftKey) {
//                 e.preventDefault();
//                 handleSend();
//               }
//             }}
//           />

//           <button
//             onClick={handleSend}
//             disabled={!newMessage.trim()}
//             className={`p-2 rounded-xl transition-all ${
//               newMessage.trim()
//                 ? "bg-[var(--color-accent)] text-white scale-100 shadow-md"
//                 : "bg-gray-200 text-gray-400 scale-90 cursor-not-allowed"
//             }`}
//           >
//             <Send size={20} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatWindow;

import React, { useState, useRef, useEffect } from "react";
// Import AnimatePresence and motion together from framer-motion
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  ArrowLeft,
  MoreVertical,
  Phone,
  Video,
  Paperclip,
  Smile,
  X,
  FileText,
  AlertCircle,
  Image as ImageIcon,
} from "lucide-react";
import EmojiPicker from "emoji-picker-react";

const ChatWindow = ({ chat, onBack }) => {
  const [messages, setMessages] = useState(chat?.messages || []);
  const [newMessage, setNewMessage] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  // ... (keep existing states)
  const [showAlert, setShowAlert] = useState(false);

  // Function to trigger the alert
  const triggerAlert = () => {
    setShowAlert(true);
    // Auto-hide after 3 seconds
    setTimeout(() => setShowAlert(false), 3000);
  };

  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);
  const emojiPickerRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Reset messages when chat changes
  useEffect(() => {
    setMessages(chat?.messages || []);
    setSelectedFile(null);
    setShowEmoji(false);
  }, [chat]);

  // Close emoji picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target)
      ) {
        setShowEmoji(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a preview URL if it's an image
      const isImage = file.type.startsWith("image/");
      setSelectedFile({
        file,
        name: file.name,
        preview: isImage ? URL.createObjectURL(file) : null,
        isImage,
      });
    }
  };

  const handleSend = () => {
    if (!newMessage.trim() && !selectedFile) return;

    const msg = {
      id: Date.now(),
      text: newMessage,
      sender: "me",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      attachment: selectedFile,
    };

    setMessages((prev) => [...prev, msg]);
    setNewMessage("");
    setSelectedFile(null);
    setShowEmoji(false);
  };

  const onEmojiClick = (emojiData) => {
    setNewMessage((prev) => prev + emojiData.emoji);
  };

  if (!chat) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-[var(--bg-main)] text-[var(--text-light)]">
        <div className="p-6 rounded-full bg-[var(--bg-card)] mb-4">
          <Send size={40} className="opacity-20" />
        </div>
        <p className="text-[var(--fs-h5)] font-medium">
          Select a conversation to start chatting
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 h-full bg-[var(--bg-main)] overflow-hidden relative">
      {/* --- FEATURE ALERT POPUP (Framer Motion) --- */}


      <AnimatePresence>
        {showAlert && (
          <motion.div
            // Initial state: starts above the screen and small
            initial={{ opacity: 0, y: -50, x: "-50%", scale: 0.9 }}
            // Animate to: slide down to position and full size
            animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
            // Exit state: slide back up and fade out
            exit={{ opacity: 0, y: -20, x: "-50%", scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="absolute top-6 left-1/2 z-[100] w-[90%] max-w-sm pointer-events-none"
          >
            <div className="bg-[var(--bg-card)] border border-[var(--border)] shadow-xl rounded-2xl px-5 py-4 flex items-center gap-4 pointer-events-auto backdrop-blur-md bg-opacity-90">
              <div className="bg-amber-100 p-2.5 rounded-xl text-amber-600 shadow-sm">
                <AlertCircle size={22} />
              </div>

              <div className="flex-1">
                <h4 className="text-sm font-bold text-[var(--text-primary)]">
                  Under Development
                </h4>
                <p className="text-[11px] text-[var(--text-light)] leading-tight">
                  We're working hard on this! Check back in the next update.
                </p>
              </div>

              <button
                onClick={() => setShowAlert(false)}
                className="p-1.5 hover:bg-gray-100 rounded-lg text-[var(--text-light)] transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>




      {/* --- HEADER --- */}
      <header className="px-6 py-3 border-b border-[var(--border)] bg-[var(--bg-card)]/80 backdrop-blur-md flex items-center gap-4 z-10">
        <button
          onClick={onBack}
          className="md:hidden p-2 -ml-2 hover:bg-[var(--bg-main)] rounded-full transition-colors"
        >
          <ArrowLeft size={20} />
        </button>

        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[var(--color-accent)] to-blue-400 flex items-center justify-center text-white font-bold text-lg">
            {chat.name.charAt(0)}
          </div>
          {chat.isOnline && (
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-[var(--bg-card)] rounded-full"></div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h2 className="text-[var(--fs-base)] font-bold text-[var(--text-primary)] truncate">
            {chat.name}
          </h2>
          <p className="text-[var(--fs-small)] text-[var(--text-light)]">
            {chat.isOnline ? "Active now" : "Offline"}
          </p>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={triggerAlert}
            className="p-2 text-[var(--text-light)] hover:text-[var(--color-accent)] transition-all cursor-pointer active:scale-95"
          >
            <Phone size={20} />
          </button>
          <button
            onClick={triggerAlert}
            className="p-2 text-[var(--text-light)] hover:text-[var(--color-accent)] transition-all cursor-pointer active:scale-95"
          >
            <Video size={20} />
          </button>
          <button
            onClick={triggerAlert}
            className="p-2 text-[var(--text-light)] hover:text-[var(--color-accent)] transition-all cursor-pointer active:scale-95"
          >
            <MoreVertical size={20} />
          </button>
        </div>
      </header>

      {/* --- MESSAGES AREA --- */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 custom-scrollbar bg-[var(--bg-main)]">
        {messages.map((msg) => {
          const isMe = msg.sender === "me";
          return (
            <div
              key={msg.id}
              className={`flex ${isMe ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}
            >
              <div className={`group relative max-w-[80%] md:max-w-[60%]`}>
                <div
                  className={`px-4 py-2.5 shadow-sm rounded-2xl ${
                    isMe
                      ? "bg-[var(--color-accent)] text-white rounded-tr-none"
                      : "bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border)] rounded-tl-none"
                  }`}
                >
                  {/* Attachment in Message */}
                  {msg.attachment && (
                    <div className="mb-2 overflow-hidden rounded-lg">
                      {msg.attachment.isImage ? (
                        <img
                          src={msg.attachment.preview}
                          alt="upload"
                          className="max-h-60 w-full object-cover rounded-lg"
                        />
                      ) : (
                        <div
                          className={`flex items-center gap-3 p-3 rounded-lg ${isMe ? "bg-white/10" : "bg-[var(--bg-main)]"}`}
                        >
                          <FileText size={24} />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">
                              {msg.attachment.name}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  <p className="text-[15px] leading-relaxed break-words">
                    {msg.text}
                  </p>
                </div>
                <div
                  className={`flex items-center mt-1 gap-1 ${isMe ? "justify-end" : "justify-start"}`}
                >
                  <span className="text-[10px] text-[var(--text-light)] uppercase font-medium">
                    {msg.time || "10:00 AM"}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* --- PREVIEW & INPUT --- */}
      <div className="p-4 bg-[var(--bg-main)] border-t border-[var(--border)]">
        {/* Attachment Preview Card */}
        {selectedFile && (
          <div className="max-w-4xl mx-auto mb-3  p-3 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl flex items-center gap-4 animate-in slide-in-from-bottom-4">
            {selectedFile.isImage ? (
              <img
                src={selectedFile.preview}
                className="w-12 h-12 rounded-lg object-cover"
                alt="preview"
              />
            ) : (
              <div className="w-12 h-12 bg-blue-50   text-[var(--color-accent)] rounded-lg flex items-center justify-center">
                <FileText size={24} />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate text-[var(--text-primary)]">
                {selectedFile.name}
              </p>
              <p className="text-xs text-[var(--text-light)]">Ready to send</p>
            </div>
            <button
              onClick={() => setSelectedFile(null)}
              className="p-2 hover:bg-red-50 hover:text-red-500 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        )}

        {/* Input Bar */}
        <div className="max-w-4xl mx-auto flex items-end gap-2 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-2 shadow-lg focus-within:border-[var(--color-accent)] relative">
          <div ref={emojiPickerRef} className="relative">
            {showEmoji && (
              <div className="absolute bottom-14 left-0 z-50 shadow-2xl scale-90 origin-bottom-left">
                <EmojiPicker onEmojiClick={onEmojiClick} />
              </div>
            )}
            <button
              onClick={() => setShowEmoji(!showEmoji)}
              className={`p-2 rounded-xl transition-colors cursor-pointer  ${showEmoji ? "text-[var(--color-accent)] bg-blue-50" : "text-[var(--text-light)] hover:bg-[var(--bg-main)]"}`}
            >
              <Smile size={22} />
            </button>
          </div>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current.click()}
            className="p-2 text-[var(--text-light)] cursor-pointer  hover:bg-[var(--bg-main)] rounded-xl transition-colors"
          >
            <Paperclip size={22} />
          </button>

          <textarea
            rows="1"
            placeholder="Type your message..."
            className="flex-1 py-2 px-1 bg-transparent border-none focus:outline-none focus:ring-0 text-[var(--text-primary)] resize-none max-h-32"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
          />

          <button
            onClick={handleSend}
            disabled={!newMessage.trim() && !selectedFile}
            className={`p-2.5 rounded-xl transition-all cursor-pointer ${
              newMessage.trim() || selectedFile
                ? "bg-[var(--color-accent)] text-white scale-100 shadow-md"
                : "bg-gray-200 text-gray-400 scale-95 cursor-not-allowed"
            }`}
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
