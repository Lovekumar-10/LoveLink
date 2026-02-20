import { getToken } from "firebase/messaging";
import { messaging } from "../firebase";

export const saveFCMToken = async (uid) => {
  const token = await getToken(messaging, {
    vapidKey: "YOUR_VAPID_KEY"
  });

  await updateDoc(doc(db, "users", uid), {
    "notification.fcmToken": token
  });
};
