"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { cart } = useCart();
  const { data: session } = useSession();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-2xl font-bold text-slate-900">
          My<span className="text-indigo-600">Commerce</span>
        </h1>

        {/* LINKS */}
        <div className="hidden md:flex gap-8 text-slate-600 font-medium">
          <Link href="/" className="hover:text-indigo-600">Home</Link>
          <Link href="/products" className="hover:text-indigo-600">Products</Link>
          <Link href="/checkout" className="hover:text-indigo-600">Checkout</Link>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-4">
          <Link href="/checkout" className="relative font-medium">
            Cart
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-indigo-600 text-white text-xs px-1.5 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>

          {!session ? (
            <Link
              href="/login"
              className="px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-100 transition"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
            >
              Sign Out
            </button>
          )}
        </div>

      </div>
    </nav>
  );
}
