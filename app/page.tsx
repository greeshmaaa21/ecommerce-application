import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-slate-900">
            Shop Smarter. <br />
            <span className="text-indigo-600">Live Better.</span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            Discover hand-picked fashion, gadgets, and lifestyle essentials
            at prices you’ll love.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="px-8 py-4 bg-indigo-600 text-white rounded-xl text-lg shadow hover:bg-indigo-700 hover:scale-105 transition"
            >
              Explore Products
            </Link>

            <Link
              href="/checkout"
              className="px-8 py-4 border border-slate-300 rounded-xl text-lg hover:bg-slate-100 transition"
            >
              View Cart
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
            <Image
              src="/shopping-girl.png"
              alt="Shopping illustration"
              width={600}
              height={600}
              priority
              className="w-full h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
