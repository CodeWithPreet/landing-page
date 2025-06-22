"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Banner() {
  return (
    <section className="relative h-[90vh] w-full text-white">
      {/* Background Image */}
      <Image
        src="/banner.png" // rename your image to public/banner-bg.png
        alt="Banner Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-2 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="absolute top-10 -left-64 bg-white text-black font-bold text-lg px-6 py-2  shadow">
          LOGO
        </div>

        {/* Headline */}
        <h1 className="text-white text-3xl md:text-4xl  leading-tight heading-xl-white uppercase">
          Lorem ipsum dolor sit amet consectetur. <br />
          Quis adipiscing purus egestas aliquam viverra mi.
        </h1>

        {/* Description */}
        <p className="text-gray-200 mt-6 text-base md:text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat
          vestibulum nisi at ac risus amet. Mi accumsan sagittis justo
          pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna
          arcu vulputate sed ut. Nisl porta massa diam condimentum nulla quam.
        </p>

        <p className="text-gray-200 mt-4 text-base md:text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec
          condimentum ultrices non. Ornare semper in tincidunt pellentesque cras
          mauris in vitae. At viverra quis eu malesuada vel et porttitor. Nulla
          luctus quam lacus lacus non at. Tincidunt morbi feugiat a pulvinar
          euismod natoque nulla ligula. Tincidunt cursus vitae leo.
        </p>

        {/* CTA Button */}
        <Button className="mt-6 bg-white text-[#0546D2] font-semibold hover:bg-gray-100">
          Loreum Ipsum →
        </Button>
      </div>
    </section>
  );
}
