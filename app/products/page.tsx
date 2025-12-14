"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";

const products = [
  { id: 1, name: "Stylish Shirt", price: 29.99, image: "/shirt.png", category: "Fashion" },
  { id: 2, name: "Casual Pant", price: 49.99, image: "/pant.png", category: "Fashion" },
  { id: 3, name: "Leather Belt", price: 19.99, image: "/belt.png", category: "Accessories" },
  { id: 4, name: "Travel Bag", price: 89.99, image: "/bag.png", category: "Bags" },
  { id: 5, name: "Winter Scarf", price: 24.99, image: "/scarf.png", category: "Accessories" },
];

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="relative bg-slate-50 min-h-screen py-24">
      {/* subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-14 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-3">
            All Products
          </h1>
          <p className="text-slate-600">
            Showing {filteredProducts.length} items
          </p>
        </div>

        {/* FILTER BAR */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 mb-14
                        flex flex-col md:flex-row gap-4 justify-between items-center shadow-sm">

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-80 px-4 py-3 rounded-xl border border-slate-300
                       focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* CATEGORY */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full md:w-56 px-4 py-3 rounded-xl border border-slate-300
                       bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="All">All Categories</option>
            <option value="Fashion">Fashion</option>
            <option value="Accessories">Accessories</option>
            <option value="Bags">Bags</option>
          </select>
        </div>

        {/* PRODUCT GRID */}
        {filteredProducts.length === 0 ? (
          <div className="text-center text-slate-500 mt-24">
            No products match your search.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
