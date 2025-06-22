"use client";

import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative flex flex-col  font-inter lg:flex-row items-center justify-between px-10 lg:px-20 pt-10 pb-20">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 z-10">
        <h1
          className="text-4xl md:text-5xl font-bold mb-6 w-[ 
528px]   font-Roboto Condensed">
          Lorem ipsum dolor sit amet
        </h1>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis
          elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea
          morbi libero imperdiet neque. Justo suspendisse tristique posuere quis
          eget viverra.
        </p>

        {/* Form */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
          <input
            type="text"
            placeholder="Enter your email"
            className="border m-2 px-4 py-2 w-full sm:w-auto rounded "
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded mt-2 sm:mt-0">
            Submit →
          </button>
        </div>

        {/* Credit Note */}
        <div className="flex items-center text-sm text-gray-700 m-2">
          <span className="mr-2">
            <Image src="/check.png" alt="check" width={20} height={20} />
          </span>
          No credit card required!
        </div>
      </div>

      {/* Right Image with Clip */}
      <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0">
        <div className="relative w-full h-[400px] lg:h-[600px] clip-diagonal overflow-hidden">
          <Image
            src="/Hero.png"
            alt="Motorcycles on the road"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
