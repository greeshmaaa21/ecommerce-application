"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login?callbackUrl=/checkout");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <p className="text-slate-600">Loading checkout…</p>
      </div>
    );
  }

  if (status !== "authenticated") return null;

  const total = cart.reduce(
    (sum: number, item: any) => sum + item.price * item.qty,
    0
  );

  const placeOrder = () => {
    clearCart();
    router.push("/order-success");
  };

  return (
    <section className="relative min-h-screen bg-slate-50 py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* TITLE */}
        <h1 className="text-4xl font-extrabold text-slate-900 mb-14 text-center">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* ORDER SUMMARY */}
          <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200
                          shadow-sm p-8">
            <h2 className="text-xl font-semibold mb-6">
              Order Summary
            </h2>

            {cart.length === 0 ? (
              <p className="text-slate-500">Your cart is empty.</p>
            ) : (
              <div className="space-y-5">
                {cart.map((item: any) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center border-b
                               border-slate-100 pb-4"
                  >
                    <div>
                      <p className="font-medium text-slate-900">
                        {item.name}
                      </p>
                      <p className="text-sm text-slate-500">
                        Quantity: {item.qty}
                      </p>
                    </div>

                    <p className="font-semibold text-slate-900">
                      ${(item.price * item.qty).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* PAYMENT */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 h-fit">
            <h2 className="text-xl font-semibold mb-6">
              Payment Details
            </h2>

            <div className="flex justify-between mb-4 text-slate-700">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-4 text-slate-700">
              <span>Shipping</span>
              <span className="text-emerald-600">Free</span>
            </div>

            <hr className="my-6" />

            <div className="flex justify-between text-xl font-bold mb-8">
              <span>Total</span>
              <span className="text-indigo-600">
                ${total.toFixed(2)}
              </span>
            </div>

            <button
              onClick={placeOrder}
              className="w-full py-4 rounded-xl bg-indigo-600
                         text-white text-lg font-semibold
                         hover:bg-indigo-700 transition"
            >
              Place Order
            </button>

            <button
              onClick={() => router.push("/products")}
              className="w-full mt-4 py-3 rounded-xl border
                         border-slate-300 text-slate-700
                         hover:bg-slate-100 transition"
            >
              Continue Shopping
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
