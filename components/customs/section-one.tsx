"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export default function SectionOne() {
  const features = [
    {
      image: "/feature1.png",
      text: "Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.",
    },
    {
      image: "/feature2.png",
      text: "Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis.Lorem ipsum dolor sit amet consectetur. ",
    },
    {
      image: "/feature3.png",
      text: "Lorem ipsum dolor sit amet consectetur. Vestibulum nisi morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt. Lorem ipsum dolor sit amet consectetur.  ",
    },
  ];

  return (
    <section className="relative flex flex-col  font-inter lg:flex-row px-6 md:px-16 py-16 bg-white gap-10">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between  h-[90%]">
        <div className="space-y-6">
          <p className="text-blue-700 font-semibold text-sm">
            Lorem ipsum dolor sit
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 w-1/2">
            LOREM IPSUM DOLOR SIT AMET
          </h2>

          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
            facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget
            integer in nam. Non nisi iaculis at felis aliquet. Hendrerit tellus
            at purus lectus.
          </p>

          {/* Features List */}
          <div className="space-y-16">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center">
                <div className="w-[100px] h-[100px] relative flex-shrink-0">
                  <Image
                    src={feature.image}
                    alt="feature image"
                    fill
                    className="object-cover h-auto w-auto"
                  />
                </div>
                <div className="flex-1 h-[100px] flex items-center px-4">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 pt-3 lg:pt-[200px]">
          <Button className="bg-blue-700 text-white px-5 py-2 hover:bg-blue-800">
            Lorem Ipsum <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <div className="flex items-center text-blue-700 font-medium">
            <Phone className="h-4 w-4 mr-2" /> 123456789
          </div>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="w-full lg:w-1/2 flex items-stretch">
        <Image
          src="/Section1.png"
          alt="Motorcycles lined up"
          width={800}
          height={600}
          className="rounded-lg object-cover w-full h-auto  "
        />
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full   h-[20px]">
        <Image
          src="/Section1Border.png"
          alt="section border"
          fill
          className="object-cover lg:px-16"
        />
      </div>
    </section>
  );
}
