import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-slate-50 overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative">
        {/* background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

          {/* TEXT */}
          <div className="animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Shop smarter. <br />
              <span className="text-indigo-600">Live better.</span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
              Discover thoughtfully curated fashion, accessories, and lifestyle
              products designed to fit your everyday needs.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="px-8 py-4 bg-indigo-600 text-white rounded-xl
                           text-lg font-semibold shadow-md
                           hover:bg-indigo-700 hover:-translate-y-1
                           transition-all duration-300"
              >
                Explore Products
              </Link>

              <Link
                href="/checkout"
                className="px-8 py-4 border border-slate-300 rounded-xl
                           text-lg font-medium text-slate-700
                           hover:bg-slate-100 transition"
              >
                View Cart
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative animate-float">
            <Image
              src="/shopping-girl.png"
              alt="Shopping illustration"
              width={500}
              height={500}
              priority
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <h2 className="text-4xl font-extrabold text-center mb-16">
          Why shop with us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Premium Quality",
              desc: "Carefully selected products that meet high quality standards.",
            },
            {
              title: "Secure Checkout",
              desc: "Your payments and data are protected at every step.",
            },
            {
              title: "Fast Experience",
              desc: "Optimized for speed and a smooth shopping journey.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-3xl p-8
                         text-center shadow-sm hover:shadow-xl
                         hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-16">
            Explore Categories
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: "Fashion", image: "/shirt.png" },
              { name: "Accessories", image: "/belt.png" },
              { name: "Bags", image: "/bag.png" },
            ].map((cat) => (
              <div
                key={cat.name}
                className="group relative bg-slate-100 rounded-3xl overflow-hidden
                           cursor-pointer shadow-sm hover:shadow-xl
                           transition-all duration-300"
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  width={500}
                  height={400}
                  className="w-full h-64 object-contain p-10
                             group-hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />

                <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-slate-900">
                  {cat.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-500" />

        <div className="relative max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to upgrade your shopping?
          </h2>

          <p className="text-lg mb-10 opacity-90">
            Browse our curated collection and experience a smoother,
            smarter way to shop online.
          </p>

          <Link
            href="/products"
            className="inline-block px-10 py-4 bg-white text-indigo-600
                       rounded-xl text-lg font-semibold
                       hover:bg-slate-100 hover:-translate-y-1
                       transition-all duration-300"
          >
            Start Shopping
          </Link>
        </div>
      </section>
    </main>
  );
}
