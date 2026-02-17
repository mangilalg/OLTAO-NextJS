import Image from "next/image";
import StarRating from "./StarRating";

const exploreProducts = [
  {
    name: "Champ Bladeless Smart Wall Fan",
    price: "₹17,999",
    rating: 4.5,
    image: "/images/bladeless-wall-fan.png",
  },
  {
    name: "Whisper Bladeless Flush Cassette Fan",
    price: "₹17,999",
    rating: 4.5,
    image: "/images/flush-cassette-fan.png",
  },
  {
    name: "Twilight Bladeless Fan",
    price: "₹17,999",
    rating: 4.5,
    image: "/images/twilight-bladeless-fan.png",
  },
  {
    name: "Bladeless 37 Inches Ceiling Cassette Fan",
    price: "₹17,999",
    rating: 4.5,
    image: "/images/ceiling-cassette-fan.png",
  },
  {
    name: "Nimbus 37 Inches Ceiling Fan",
    price: "₹17,999",
    rating: 4.5,
    image: "/images/ceiling-fan-nimbus.png",
  },
];

import { motion } from "framer-motion";

export default function ExploreProducts() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl lg:text-3xl text-brand font-normal italic mb-8"
        style={{ fontFamily: "var(--font-dm-serif), serif" }}
      >
        Keep Exploring
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex gap-5 overflow-x-auto hide-scrollbar pb-4"
      >
        {exploreProducts.map((product, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="shrink-0 w-[220px] sm:w-[240px] group cursor-pointer"
          >
            <div className="bg-warm-grey rounded-xl overflow-hidden mb-3 aspect-square flex items-center justify-center p-5 group-hover:shadow-md transition-all duration-300 transform origin-bottom">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full relative"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="object-contain w-full h-full"
                />
              </motion.div>
            </div>
            <StarRating rating={product.rating} />
            <p className="text-xs text-text mt-1.5 line-clamp-2 leading-relaxed group-hover:text-brand transition-colors">
              {product.name}
            </p>
            <p className="text-sm font-bold text-brand mt-1">{product.price}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
