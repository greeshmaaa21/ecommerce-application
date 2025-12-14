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

  // LOCAL UI STATE
  const [expanded, setExpanded] = useState(false);

  const itemInCart = cart.find((item) => item.id === product.id);

  const handleAdd = () => {
    // 🔒 AUTH CHECK
    if (status !== "authenticated") {
      alert("Please sign in to add products to the cart.");
      router.push("/login");
      return;
    }

    addToCart(product);
    setExpanded(true);
  };

  const handleContinue = () => {
    setExpanded(false); // Close controls but keep item in cart
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition overflow-hidden">

      {/* IMAGE */}
      <div className="relative w-full h-60 bg-slate-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-6"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-1">
          {product.name}
        </h2>

        <p className="text-indigo-600 font-bold text-lg mb-4">
          ${product.price}
        </p>

        {/* ADD BUTTON / CART CONTROLS */}
        {!expanded || !itemInCart ? (
          <button
            onClick={handleAdd}
            className="w-full py-3 rounded-xl bg-indigo-600 text-white font-medium
                       hover:bg-indigo-700 transition"
          >
            Add to Cart
          </button>
        ) : (
          <>
            {/* + / - CONTROLS */}
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => decreaseQty(product.id)}
                className="w-12 h-12 rounded-lg bg-slate-200 text-xl font-bold hover:bg-slate-300"
              >
                –
              </button>

              <span className="text-lg font-bold">
                {itemInCart.qty}
              </span>

              <button
                onClick={() => increaseQty(product.id)}
                className="w-12 h-12 rounded-lg bg-slate-200 text-xl font-bold hover:bg-slate-300"
              >
                +
              </button>
            </div>

            {/* ACTIONS */}
            <div className="flex flex-col gap-2">
              <button
                onClick={handleContinue}
                className="w-full py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100"
              >
                Continue Shopping
              </button>

              <button
                onClick={() => router.push("/checkout")}
                className="w-full py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
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
