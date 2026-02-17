"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  ShieldPlus,
  ShieldCheck,
  RefreshCcw,
  CircleCheck,
  CircleArrowLeft,
  CircleArrowRight,
} from "lucide-react";

const productImages = [
  "/main-product-images/champ-bladeless-smart-wall-fan-main.jpg",
  "/main-product-images/champ-bladeless-smart-wall-fan-1.jpg",
  "/main-product-images/champ-bladeless-smart-wall-fan-2.jpg",
  "/main-product-images/champ-bladeless-smart-wall-fan-3.jpg",
  "/main-product-images/champ-bladeless-smart-wall-fan-4.jpg",
];

const featureBadges = [
  {
    icon: <ShieldPlus />,
    title: "2-Year Coverage On",
    subtitle: "LED, Remote & Controller",
  },
  {
    icon: <ShieldCheck />,
    title: "5-Year Motor",
    subtitle: "Warranty",
  },
  {
    icon: <RefreshCcw />,
    title: "Hassle-Free",
    subtitle: "Replacement",
  },
];

export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <section className="bg-[#f5f0eb] py-8 lg:py-8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 lg:items-center">
          {/* Left: Image Gallery */}
          <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="bg-white rounded-3xl overflow-hidden flex items-center justify-center p-8 lg:p-12 relative group shadow-sm aspect-[5/4] w-full">
              <Image
                src={productImages[selectedImage]}
                alt="Champ Bladeless Smart Wall Fan"
                fill
                className="object-contain p-8 lg:p-12"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Thumbnails */}
            <div className="relative group/thumbs">
              <div className="flex w-full gap-3 items-center overflow-x-auto hide-scrollbar px-12 py-2">
                <button
                  onClick={() =>
                    setSelectedImage((prev) =>
                      prev > 0 ? prev - 1 : productImages.length - 1,
                    )
                  }
                  className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 z-10 text-brand/70 hover:text-brand transition-colors"
                  aria-label="Previous image"
                >
                  <CircleArrowLeft size={32} strokeWidth={1.5} />
                </button>
                {productImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`cursor-pointer shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 bg-white ${
                      selectedImage === i
                        ? "border-brand shadow-md"
                        : "border-transparent hover:border-brand/40"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${i + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain p-2"
                    />
                  </button>
                ))}
                <button
                  onClick={() =>
                    setSelectedImage((prev) =>
                      prev < productImages.length - 1 ? prev + 1 : 0,
                    )
                  }
                  className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 z-10 text-brand/70 hover:text-brand transition-colors"
                  aria-label="Next image"
                >
                  <CircleArrowRight size={32} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs text-[#666] mb-4  mt-0">
              <Link href="/" className="hover:text-brand transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link
                href="/category"
                className="hover:text-brand transition-colors"
              >
                Category
              </Link>
              <span>/</span>
              <span className="text-[#1a1a1a] font-medium">Fan</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl text-[#1a1a1a] font-normal mb-3 leading-tight font-serif">
              Champ Bladeless Smart Wall Fan
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="#fbbf24"
                    stroke="#fbbf24"
                    strokeWidth="1"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-[#999]">(1900)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-4xl font-bold text-[#1a1a1a]">
                Rs. 11,699.10
              </span>
              <span className="text-lg text-[#999] line-through">
                Rs. 15000
              </span>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              {featureBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-[#e5e5e5] shadow-sm"
                >
                  <span className="rounded-full p-1 bg-cream">
                    <div className="text-brand font-light text-[10px] ">
                      {badge.icon}
                    </div>
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-[#1a1a1a] leading-tight">
                      {badge.title}
                    </span>
                    <span className="text-xs text-[#666] leading-tight">
                      {badge.subtitle}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-6">
              <h3 className="text-base font-semibold text-[#1a1a1a] mb-2">
                Description
              </h3>
              <p className="text-sm text-[#666] leading-relaxed text-justify">
                Champ Bladeless Smart Wall Fan is a sleek, modern cooling
                solution designed for safety, comfort, and convenience.
                Featuring advanced bladeless technology, it delivers smooth,
                quiet airflow with multiple speed modes, 90° oscillation, and
                smart controls via remote, app, or voice. Energy-efficient and
                stylish, it&apos;s perfect for contemporary homes and safe for
                kids and pets.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button className="cursor-pointer flex-1 py-3.5 px-8 bg-brand border border-brand text-white text-sm font-semibold rounded-[15px] hover:bg-white hover:text-brand  hover:border-brand transition-colors duration-200 shadow-md">
                Buy Now
              </button>
              <button className="cursor-pointer flex-1 py-3.5 px-8 bg-white text-brand hover:text-white hover:bg-brand text-sm font-semibold rounded-[15px] border border-brand transition-all duration-200 shadow-sm">
                Add To Cart
              </button>
            </div>

            {/* Meta Links */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-[#e5e5e5]">
              <div className="flex flex-col gap-2">
                <button className="cursor-pointer flex items-center gap-2 text-sm text-[#1a1a1a] hover:text-brand transition-colors">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <CircleCheck />
                  </svg>
                  Shipping & Delivery
                </button>
                <button className="cursor-pointer flex items-center gap-2 text-sm text-[#1a1a1a] hover:text-brand transition-colors">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <CircleCheck />
                  </svg>
                  Ask a question
                </button>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-[#666]">Share on</span>
                <div className="flex gap-2">
                  <button
                    className="cursor-pointer w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center hover:opacity-80 transition-opacity"
                    aria-label="WhatsApp"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </button>
                  <button
                    className="cursor-pointer w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center hover:opacity-80 transition-opacity"
                    aria-label="Facebook"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </button>
                  <button
                    className="cursor-pointer w-8 h-8 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] flex items-center justify-center hover:opacity-80 transition-opacity"
                    aria-label="Instagram"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
