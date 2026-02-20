import { createContext } from "react";
import { httpsCallable } from "firebase/functions";
import { functions } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {

  const startPayment = async (uid) => {

    const createOrder = httpsCallable(functions, "createOrder");
    const verifyPayment = httpsCallable(functions, "verifyPayment");

    const response = await createOrder({ amount: 999 });

    const order = response.data.order;

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY,
      amount: order.amount,
      currency: order.currency,
      order_id: order.id,

      handler: async function (paymentResponse) {

        const verification = await verifyPayment(paymentResponse);

        if (verification.data.status === "success") {

          const endDate = new Date();
          endDate.setMonth(endDate.getMonth() + 1);

          await updateDoc(doc(db, "users", uid), {
            "subscription.plan": "premium",
            "subscription.isActive": true,
            "subscription.startDate": new Date(),
            "subscription.endDate": endDate
          });

          alert("Payment Successful");
        }
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <PaymentContext.Provider value={{ startPayment }}>
      {children}
    </PaymentContext.Provider>
  );
};
