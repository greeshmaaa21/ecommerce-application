"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { cart } = useCart();
  const { data: session } = useSession();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* BRAND */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          My<span className="text-indigo-600">Commerce</span>
        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex gap-8 text-slate-600 font-medium">
          <Link href="/" className="hover:text-indigo-600 transition">
            Home
          </Link>
          <Link href="/products" className="hover:text-indigo-600 transition">
            Products
          </Link>
          <Link href="/checkout" className="hover:text-indigo-600 transition">
            Checkout
          </Link>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-4">

          {/* CART */}
          <Link
            href="/checkout"
            className="relative text-slate-700 hover:text-indigo-600 transition font-medium"
          >
            Cart
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 h-5 w-5 rounded-full
                               bg-indigo-600 text-white text-xs
                               flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>

          {/* AUTH */}
          {!session ? (
            <Link
              href="/login"
              className="px-4 py-2 rounded-lg border border-slate-300
                         text-slate-700 hover:bg-slate-100
                         transition font-medium"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="px-4 py-2 rounded-lg bg-red-500 text-white
                         hover:bg-red-600 transition font-medium"
            >
              Sign Out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
