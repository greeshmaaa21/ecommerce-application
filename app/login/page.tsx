"use client";

import { signIn } from "next-auth/react";

export const dynamic = "force-dynamic";

type LoginPageProps = {
  searchParams: {
    callbackUrl?: string;
  };
};

export default function LoginPage({ searchParams }: LoginPageProps) {
  const callbackUrl = searchParams?.callbackUrl || "/checkout";

  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="bg-white border border-slate-200 rounded-3xl p-10 w-full max-w-md text-center shadow-sm">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-3">
          Login to Continue
        </h1>

        <p className="text-slate-600 mb-8">
          Please sign in to add items to your cart and complete your purchase.
        </p>

        <button
          onClick={() =>
            signIn("google", {
              callbackUrl,
              redirect: true,
            })
          }
          className="w-full bg-white border border-slate-300 text-slate-800
                     py-3 rounded-xl flex items-center justify-center gap-3
                     hover:bg-slate-100 transition font-medium"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5 h-5"
            alt="Google"
          />
          Continue with Google
        </button>
      </div>
    </section>
  );
}
