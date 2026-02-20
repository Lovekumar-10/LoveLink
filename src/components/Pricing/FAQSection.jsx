import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import StartJourneyButton from "../common/StartJourneyButton";


const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      className="p-6 mb-6 rounded-2xl border cursor-pointer transition-all hover:shadow-lg h-fit relative overflow-hidden"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--bg-card)",
        alignSelf: "start",
        boxShadow: "var(--shadow-card)",
      }}
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Border Beam Animation */}
  

      {/* Question */}
      <div className="flex justify-between items-center gap-4 relative z-10">
        <h3
          style={{
            fontFamily: "var(--ff-primary)",
            fontSize: "var(--fs-h5)",
            fontWeight: "var(--fw-semibold)",
            color: "var(--color-primary)",
            lineHeight: "1.2",
          }}
        >
          {question}
        </h3>

        {/* Plus Icon */}
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ color: "var(--color-accent-base)" }}
        >
          <Plus size={24} strokeWidth={3} />
        </motion.div>
      </div>

      {/* Answer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 16 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden relative z-10"
          >
            <p
              style={{
                fontFamily: "var(--ff-secondary)",
                fontSize: "var(--fs-body)",
                color: "var(--text-secondary)",
                lineHeight: "1.6",
              }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
 const faqs = [
  { 
    question: "What payment methods do you accept for subscriptions?", 
    answer: "We accept all major credit and debit cards, including Visa, Mastercard, and American Express. For corporate and annual plans, we also support bank transfers (ACH/Wire) and SEPA payments. Digital wallet options like Apple Pay and Google Pay are available for a seamless checkout experience on mobile devices." 
  },
  { 
    question: "Is my payment information stored securely?", 
    answer: "Absolutely. We do not store your full card details on our servers. All transactions are processed through a PCI-DSS Level 1 compliant gateway. Your data is protected using 256-bit SSL encryption, ensuring that your sensitive financial information remains private and secure at all times." 
  },
  { 
    question: "When will I be billed for my membership?", 
    answer: "For monthly plans, you are billed on the same day each month based on your initial signup date. Yearly plans are billed upfront in full. If you upgrade your plan mid-cycle, our system will automatically calculate a pro-rated amount, applying the remaining value of your current plan toward the new one." 
  },
  { 
    question: "Can I get a refund if I am not satisfied?", 
    answer: "We offer a 14-day money-back guarantee for first-time subscribers. If you find the service isn't a fit for your needs, you can request a full refund within the first two weeks of your purchase. Please note that refunds are typically processed within 5-7 business days depending on your banking institution." 
  },
  { 
    question: "How can I download my invoices for tax purposes?", 
    answer: "All your billing history is centralized in your 'Account Settings' under the 'Billing' tab. From there, you can view and download PDF versions of every invoice generated. You can also add your company's VAT number or GST details to ensure your invoices meet local tax compliance requirements." 
  },
  { 
    question: "Will my subscription renew automatically?", 
    answer: "Yes, to ensure uninterrupted service, all subscriptions are set to auto-renew at the end of the billing period. You can toggle off the auto-renewal feature at any time through your dashboard. If disabled, your access will remain active until the end of the current paid term, after which the account will transition to a free or inactive state." 
  },
  { 
    question: "Are there any hidden fees or transaction costs?", 
    answer: "The price you see on our pricing page is the final amount you pay. We do not charge additional platform fees or processing costs. However, please be aware that if you are paying from a non-domestic bank account, your bank might apply a small international transaction fee or currency conversion rate over which we have no control." 
  },
  { 
    question: "What happens if a payment fails?", 
    answer: "If a scheduled payment fails, our system will automatically attempt to retry the charge three times over the course of 14 days. You will receive an email notification for each failed attempt. During this 'grace period,' your access remains active, but we recommend updating your payment method promptly to avoid service suspension." 
  },
  { 
    question: "Do you offer discounts for non-profits or students?", 
    answer: "Yes, we are proud to support education and social impact initiatives. Verified students and registered non-profit organizations are eligible for a 40% discount on all annual plans. Please reach out to our billing support team with your official documentation to receive your unique discount code." 
  },
  { 
    question: "How do I change or update my credit card info?", 
    answer: "You can update your payment details at any time by navigating to Settings > Billing > Payment Methods. Simply click 'Edit' or 'Add New' to enter your new card information. Once verified, all future recurring charges will be applied to the newly selected default payment method." 
  }
];

  const leftCol = faqs.filter((_, i) => i % 2 === 0);
  const rightCol = faqs.filter((_, i) => i % 2 !== 0);

  return (
    <section
      className="py-20 px-6"
      style={{ backgroundColor: "var(--bg-main)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="mb-4"
            style={{
              fontFamily: "var(--ff-primary)",
              fontSize: "var(--fs-h2)",
              fontWeight: "var(--fw-bold)",
              color: "var(--text-primary)",
            }}
          >
            Frequently asked <br />
            <span style={{ color: "var(--color-accent)" }}>questions</span>
          </h2>
        </div>

        {/* Columns */}
        <div className="flex flex-col md:flex-row gap-x-6 items-start">
          <div className="flex-1 w-full">
            {leftCol.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>

          <div className="flex-1 w-full">
            {rightCol.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div
          className="text-center pt-10 border-t mt-12"
          style={{ borderColor: "var(--border)" }}
        >
          <h3
            className="mb-4"
            style={{
              fontFamily: "var(--ff-primary)",
              fontSize: "var(--fs-h3)",
              fontWeight: "var(--fw-bold)",
              color: "var(--text-primary)",
            }}
          >
          Find your Soulmate with Purpose.
          </h3>

          <StartJourneyButton />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
