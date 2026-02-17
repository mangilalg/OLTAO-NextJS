"use client";

import Main from "./components/sections/Main";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import ExploreProducts from "./components/sections/ExploreProducts";

export default function ProductPage() {
  return (
    <main style={{ backgroundColor: "#f5f0eb" }}>
      <Main />

      <WhyChooseUs />

      <ExploreProducts />
    </main>
  );
}
