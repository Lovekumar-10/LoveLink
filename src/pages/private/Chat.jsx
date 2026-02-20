// import React from 'react'
// import ChatLayout from '../../components/chat/ChatLayout'

// const Chat = () => {
//   return (
//     <div>
//       <ChatLayout/>
//     </div>
//   )
// }

// export default Chat









// pages/private/Chat.jsx
import React from "react";

import ChatLayout from "../../components/chat/ChatLayout";
import Navbar from "../../components/Navbar"

const Chat = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Only navbar */}
      <Navbar />

      {/* ChatLayout fills remaining height */}
      <div className="flex-1">
        <ChatLayout />
      </div>
    </div>
  );
};

export default Chat;
