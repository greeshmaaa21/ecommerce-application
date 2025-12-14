"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useCart } from "@/context/CartContext";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const { cart, addToCart, increaseQty, decreaseQty, removeItem } = useCart();
  const { status } = useSession();
  const router = useRouter();

  const [expanded, setExpanded] = useState(false);

  const itemInCart = cart.find((item) => item.id === product.id);

  const handleAdd = () => {
    // 🔒 USER NOT LOGGED IN
    if (status !== "authenticated") {
      alert("Please sign in to add products to the cart.");
      router.push("/login?callbackUrl=/products");
      return;
    }

    // ✅ USER LOGGED IN
    addToCart(product);
    setExpanded(true);
  };

  const handleContinue = () => {
    setExpanded(false);
  };

  return (
    <div
      className="group bg-white rounded-3xl border border-slate-200
                 transition hover:-translate-y-1 hover:shadow-lg overflow-hidden"
    >
      {/* IMAGE */}
      <div className="relative w-full h-64 bg-slate-100 flex items-center justify-center">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-8 transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-1">
          {product.name}
        </h2>

        <p className="text-indigo-600 font-bold text-lg mb-5">
          ${product.price}
        </p>

        {/* ADD / CONTROLS */}
        {!expanded || !itemInCart ? (
          <button
            onClick={handleAdd}
            className="w-full py-3 rounded-xl bg-indigo-600 text-white
                       font-semibold hover:bg-indigo-700 transition"
          >
            Add to Cart
          </button>
        ) : (
          <>
            {/* QUANTITY CONTROLS */}
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => decreaseQty(product.id)}
                className="w-11 h-11 rounded-lg bg-slate-100
                           text-xl font-semibold hover:bg-slate-200 transition"
              >
                –
              </button>

              <span className="text-lg font-bold text-slate-900">
                {itemInCart.qty}
              </span>

              <button
                onClick={() => increaseQty(product.id)}
                className="w-11 h-11 rounded-lg bg-slate-100
                           text-xl font-semibold hover:bg-slate-200 transition"
              >
                +
              </button>
            </div>

            {/* ACTIONS */}
            <div className="flex flex-col gap-2">
              <button
                onClick={handleContinue}
                className="w-full py-2.5 rounded-lg border border-slate-300
                           text-slate-700 hover:bg-slate-100 transition"
              >
                Continue Shopping
              </button>

              <button
                onClick={() => router.push("/checkout")}
                className="w-full py-2.5 rounded-lg bg-emerald-600
                           text-white font-medium hover:bg-emerald-700 transition"
              >
                Go to Cart
              </button>

              <button
                onClick={() => {
                  removeItem(product.id);
                  setExpanded(false);
                }}
                className="text-sm text-red-500 hover:text-red-600 mt-1"
              >
                Remove
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
