"use client";

import Main from "./components/Main";
import WhyChooseUs from "./components/WhyChooseUs";
import ExploreProducts from "./components/ExploreProducts";

export default function ProductPage() {
  return (
    <main style={{ backgroundColor: "#f5f0eb" }}>
      <Main />
      {/* ═══════════ WHY CHOOSE US + FAQ ═══════════ */}
      <WhyChooseUs />
      {/* ═══════════ KEEP EXPLORING ═══════════ */}
      <ExploreProducts />
    </main>
  );
}
