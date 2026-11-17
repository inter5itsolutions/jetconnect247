import React from "react";

const Logo = () => (
  <svg width="72" height="72" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    {/* Replace with the developer's own mark if desired */}
    <path
      d="M6 30c8 1 12-1 14-6 1-6 4-14 12-14s11 8 12 14c2 5 6 7 14 6-3 6-12 8-26 8S9 36 6 30Z"
      fill="#fff"
    />
    <path d="M22 40h20l-10 16-10-16Z" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M22 34l10 4 10-4" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export default function Maintenance() {
  return (
    <main className="relative grid min-h-screen min-h-dvh place-items-center overflow-hidden bg-[#0a0f1a] px-5 py-8 text-center font-['Inter',ui-sans-serif,system-ui,-apple-system,'Segoe_UI',Roboto,Helvetica,Arial,sans-serif] text-white antialiased">
      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_55%_at_50%_50%,#12305f_0%,rgba(18,48,95,0.35)_45%,transparent_75%)]"
      />

      <section className="relative z-10 flex w-full max-w-[480px] flex-col items-center">
        <div className="mb-11 leading-none">
          <Logo />
        </div>

        <p className="mb-[18px] inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.08em] text-[#8b95a8]">
          <span className="relative flex h-[7px] w-[7px]" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#2f7bff] opacity-60 motion-safe:animate-ping" />
            <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-[#2f7bff]" />
          </span>
          Service paused
        </p>

        <h1 className="text-balance md:text-4xl font-bold leading-[1.15] tracking-[-0.02em]">
          This website is temporarily unavailable.
        </h1>
      </section>
    </main>
  );
}