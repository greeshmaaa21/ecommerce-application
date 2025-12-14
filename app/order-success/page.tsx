import Link from "next/link";

export default function OrderSuccessPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="bg-white border border-slate-200 rounded-3xl p-12
                      text-center shadow-sm max-w-md w-full">

        {/* ICON */}
        <div className="mx-auto mb-6 h-14 w-14 rounded-full
                        bg-emerald-100 text-emerald-600
                        flex items-center justify-center text-2xl">
          ✓
        </div>

        {/* TITLE */}
        <h1 className="text-3xl font-extrabold mb-3 text-slate-900">
          Order Confirmed
        </h1>

        {/* MESSAGE */}
        <p className="text-slate-600 mb-10 leading-relaxed">
          Thank you for shopping with us. Your order has been placed successfully
          and will be processed shortly.
        </p>

        {/* ACTIONS */}
        <div className="flex flex-col gap-4">
          <Link
            href="/products"
            className="inline-flex items-center justify-center
                       bg-indigo-600 hover:bg-indigo-700
                       text-white px-6 py-3 rounded-xl
                       text-lg font-semibold transition"
          >
            Continue Shopping
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center
                       border border-slate-300 text-slate-700
                       px-6 py-3 rounded-xl
                       hover:bg-slate-100 transition"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
