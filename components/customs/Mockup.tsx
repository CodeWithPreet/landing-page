"use client";

import Image from "next/image";

export default function Mockup() {
  return (
    <section className="w-full bg-[#F9F9F9] py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto  flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Text Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <p className="text-blue-700 font-semibold text-base">Lorem Ipsum</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Lorem Ipsum Dolor <br /> Sit Amet
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi
            suspendisse convallis. Urna a urna lectus donec felis risus duis
            pellentesque. Pellentesque ultricies ipsum.
          </p>

          {/* App Store Buttons */}
          <div className="flex gap-4 justify-center md:justify-start pt-2">
            <Image
              src="/google-play.png"
              alt="Google Play"
              width={150}
              height={48}
            />
            <Image
              src="/app-store.png"
              alt="App Store"
              width={150}
              height={48}
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex  justify-center">
          <Image
            src="/photo.png"
            alt="Phone Mockup"
            width={800}
            height={800}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
