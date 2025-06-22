"use client";

import Image from "next/image";

export default function BannerTwo() {
  return (
    <section className="relative w-full h-[500px] flex items-center justify-center text-center text-white">
      {/* Background Image */}
      <Image
        src="/banner2.png" // make sure this image exists in /public folder
        alt="Banner Background"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0   bg-opacity-50 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl px-4 ">
        <div className="absolute  -top-18 -left-32 bg-white text-black font-bold text-lg px-6 py-2 shadow">
          LOGO
        </div>
        <h1 className="text-3xl md:text-5xl  heading-xl-white leading-tight uppercase">
          Dolor sit amet consectetur. Quis adipiscing purus egestas aliquam
          viverra mi. Dolor sit amet consectetur. Quis adipiscing
        </h1>
      </div>
    </section>
  );
}
