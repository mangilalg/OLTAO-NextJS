import { useState } from "react";
import {
  Headset,
  RefreshCcw,
  BadgeCheck,
  Earth,
  ShieldCheck,
  WifiCog,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function WhyChooseUs() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const whyChooseUs = [
    {
      icon: <RefreshCcw />,
      title: "Hassle-Free Replacement",
      desc: "We stand by our products. If any issues, we will exchange or replace it at no extra cost.",
    },
    {
      icon: <Headset />,
      title: "24/7 Customer Support",
      desc: "A dedicated team is always ready to assist you with audits, feedback, and help.",
    },
    {
      icon: <BadgeCheck />,
      title: "Quality Tested Products",
      desc: "Every product undergoes strict quality checks to ensure top performance and durability.",
    },
    {
      icon: <Earth />,
      title: "Worldwide Shipping",
      desc: "We deliver safely and efficiently to 180+ countries across the globe.",
    },
    {
      icon: <ShieldCheck />,
      title: "Motor Warranty",
      desc: "Comes with a 5-year warranty providing long-lasting, reliable performance you can trust.",
    },
    {
      icon: <WifiCog />,
      title: "Remote, LED & Controller Warranty",
      desc: "Includes a 2-year warranty covering all controller components.",
    },
  ];

  const faqItems = [
    {
      q: "How do I install an Oltao fan?",
      a: "Our fans are designed for simple installation. We provide step-by-step video guides and offer professional installation services in select pin codes for an additional fee.",
    },
    {
      q: "Do these fans include a remote control?",
      a: "Yes, all OLTAO fans come with a premium remote control that allows you to adjust speed, light, and timer settings from anywhere in the room.",
    },
    {
      q: "Can I use a ceiling fan in conjunction with air conditioning?",
      a: "Absolutely! Using a ceiling fan with your AC can help distribute cool air more evenly and reduce your energy consumption by up to 30%.",
    },
    {
      q: "What does the 5-year warranty cover?",
      a: "Our 5-year warranty covers the motor against manufacturing defects. This includes free repair or replacement of the motor unit during the warranty period.",
    },
    {
      q: "Are there ceiling fans with integrated lighting options?",
      a: "Yes, many of our ceiling fans come with built-in LED lighting. You can choose from warm, cool, or daylight tones to match your room's ambiance.",
    },
  ];

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 ">
          {/* Why Choose Us */}
          <div className="bg-white p-4 h-[500px] flex flex-col justify-around overflow-scroll [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]">
            <h2
              className="text-xl lg:text-2xl text-text font-normal mb-8"
              style={{ fontFamily: "var(--font-dm-serif), serif" }}
            >
              Why Choose Us ?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
                  }}
                  className="bg-white rounded-xl p-2 border border-brand transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-sm p-1.5 rounded-full bg-cream shrink-0 text-brand">
                      {item.icon}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-text mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-text-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Need Help */}
            <div className="mt-3 p-1 pb-2 bg-white  text-center">
              <p className="text-sm font-semibold text-text mb-2">
                NEED HELP ?
              </p>
              <div className="flex justify-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer px-5 py-2 text-xs font-medium text-brand bg-brand text-white border border-brand rounded-[15px] hover:bg-white hover:text-brand transition-all duration-200 flex items-center gap-2"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  Call Us
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer px-5 py-2 text-xs font-medium text-brand bg-brand text-white border border-brand rounded-[15px] hover:bg-white hover:text-brand transition-all duration-200 flex items-center gap-2"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  Mail Us
                </motion.button>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white p-4 h-[500px] overflow-scroll [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]">
            <h2
              className="text-xl lg:text-2xl text-text font-normal mb-8"
              style={{ fontFamily: "var(--font-dm-serif), serif" }}
            >
              Frequently Asked Questions
            </h2>

            <div className="flex flex-col gap-3">
              {faqItems.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-brand overflow-hidden transition-all duration-200 hover:border-brand/50"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="cursor-pointer w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="text-sm font-medium text-text pr-4">
                      {item.q}
                    </span>
                    <motion.div
                      animate={{ rotate: openFaq === i ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-text-light shrink-0"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm text-text-light leading-relaxed">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
