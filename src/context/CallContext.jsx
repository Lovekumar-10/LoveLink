import { createContext, useState } from "react";
import Video from "twilio-video";
import { httpsCallable } from "firebase/functions";
import { functions } from "../firebase";

export const CallContext = createContext();

export const CallProvider = ({ children }) => {

  const [room, setRoom] = useState(null);

  const startCall = async (roomName) => {

    const generateToken = httpsCallable(functions, "generateVideoToken");

    const response = await generateToken({ roomName });

    const token = response.data.token;

    const connectedRoom = await Video.connect(token, {
      name: roomName,
      audio: true,
      video: true
    });

    setRoom(connectedRoom);
  };

  const endCall = () => {
    if (room) {
      room.disconnect();
      setRoom(null);
    }
  };

  return (
    <CallContext.Provider value={{ startCall, endCall }}>
      {children}
    </CallContext.Provider>
  );
};
