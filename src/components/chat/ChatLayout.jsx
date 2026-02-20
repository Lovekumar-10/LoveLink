// // src/components/chat/ChatLayout.jsx
// import React, { useState } from "react";
// import ChatList from "./ChatList";
// import ChatWindow from "./ChatWindow";

// const ChatLayout = () => {
//   const [selectedChat, setSelectedChat] = useState(null);

//   return (
//     <div className="flex h-full"> {/* fills parent (Chat.jsx) */}
//       {/* Chat List */}
//       <ChatList selectedChat={selectedChat} setSelectedChat={setSelectedChat} />

//       {/* Chat Window */}
//       {selectedChat ? (
//         <div className="flex-1 flex flex-col h-full">
//           <ChatWindow chat={selectedChat} />
//         </div>
//       ) : (
//         <div className="flex-1 flex items-center justify-center text-[var(--text-secondary)]">
//           Select a chat to start messaging
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatLayout;

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion"; // Added for smooth transitions
// import ChatList from "./ChatList";
// import ChatWindow from "./ChatWindow";
// import { dummyChats } from "../../data/dummyChats";

// const ChatLayout = () => {
//   const [selectedChat, setSelectedChat] = useState(null);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isMobileChatOpen, setIsMobileChatOpen] = useState(false);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleSelectChat = (chat) => {
//     setSelectedChat(chat);
//     if (isMobile) setIsMobileChatOpen(true);
//   };

//   return (
//     // Added 'no-scrollbar' and 'overflow-hidden' to the main container
//     <div className="flex h-screen w-full bg-white overflow-hidden no-scrollbar">

//       {/* Chat List Container */}
//       <AnimatePresence mode="wait">
//         {(!isMobile || !isMobileChatOpen) && (
//           <motion.div
//             initial={isMobile ? { x: -300, opacity: 0 } : false}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: -300, opacity: 0 }}
//             className="flex-shrink-0 w-full md:w-[400px] border-r border-gray-100 flex flex-col h-full no-scrollbar overflow-y-auto"
//           >
//             <ChatList
//               selectedChat={selectedChat}
//               setSelectedChat={handleSelectChat}
//               chats={dummyChats}
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Chat Window Container */}
//       <AnimatePresence mode="wait">
//         {(selectedChat && (!isMobile || isMobileChatOpen)) ? (
//           <motion.div
//             initial={isMobile ? { x: 300, opacity: 0 } : false}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: 300, opacity: 0 }}
//             className="flex-1 flex flex-col h-full bg-[#FDFDFD] no-scrollbar overflow-y-auto"
//           >
//             {isMobile && (
//               <div className="p-4 bg-white border-b border-gray-100 flex items-center">
//                 <button
//                   className="mr-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
//                   onClick={() => setIsMobileChatOpen(false)}
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
//                 </button>
//                 <div className="flex items-center gap-3">
//                   <img src={selectedChat.avatar} className="w-10 h-10 rounded-full object-cover" alt="" />
//                   <span className="font-bold text-gray-800">{selectedChat.name}</span>
//                 </div>
//               </div>
//             )}
//             <ChatWindow chat={selectedChat} />
//           </motion.div>
//         ) : (
//           /* Desktop Empty State */
//           !isMobile && (
//             <div className="hidden md:flex flex-1 items-center justify-center bg-gray-50 text-gray-400 flex-col gap-4">
//               <div className="p-6 bg-white rounded-full shadow-sm">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
//               </div>
//               <p className="text-lg font-medium">Select a chat to start messaging</p>
//             </div>
//           )
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default ChatLayout;





// src/components/chat/ChatLayout.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";
import { dummyChats } from "../../data/dummyChats";

const ChatLayout = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileChatOpen, setIsMobileChatOpen] = useState(false);





  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSelectChat = (chat) => {
    setSelectedChat(chat);
    if (isMobile) setIsMobileChatOpen(true);
  };

  const handleBack = () => {
  setIsMobileChatOpen(false); // go back to list
  setSelectedChat(null); // optional: deselect chat
};

  return (
    <div className="flex h-screen w-full bg-[#F8F9FA] pt-14 overflow-hidden">
      {/* Chat List */}
      <AnimatePresence mode="wait">
        {(!isMobile || !isMobileChatOpen) && (
          <motion.div
            initial={isMobile ? { x: -300, opacity: 0 } : false}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            className="flex-shrink-0 w-full md:w-[400px] border-r border-gray-200 flex flex-col h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
          >
            <ChatList
              selectedChat={selectedChat}
              setSelectedChat={handleSelectChat}
              chats={dummyChats}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence mode="wait">
        {selectedChat && (!isMobile || isMobileChatOpen) && (
          <motion.div
            initial={isMobile ? { x: 300, opacity: 0 } : false}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            className="flex-1 flex flex-col h-full bg-white overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
          >
            {/* Mobile Back Button */}
            {isMobile && (
              <div className="p-4 bg-white border-b border-gray-100 flex items-center">
                <button
                  className="mr-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                  onClick={() => setIsMobileChatOpen(false)}
                >
                  {/* Left Arrow */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <div className="flex items-center gap-3">
                  <img
                    src={selectedChat.avatar}
                    className="w-10 h-10 rounded-full object-cover"
                    alt=""
                  />
                  <span className="font-bold text-gray-800">
                    {selectedChat.name}
                  </span>
                </div>
              </div>
            )}

            {/* Chat Messages */}
            <ChatWindow
              chat={selectedChat}
              onBack={handleBack} // <-- here
            />
          </motion.div>
        )}

        {/* Desktop Empty State */}
        {!isMobile && !selectedChat && (
          <div className="flex-1 flex items-center justify-center bg-gray-50 text-gray-400 flex-col gap-4">
            <div className="p-6 bg-white rounded-full shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
              </svg>
            </div>
            <p className="text-lg font-medium">
              Select a chat to start messaging
            </p>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatLayout;
