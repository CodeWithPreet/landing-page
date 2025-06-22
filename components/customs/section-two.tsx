import React from "react";
import Image from "next/image";

function SectionTwo() {
  const blueHeading = "Lorem ipsum dolor sit amet.";
  const mainHeading = "LOREM IPSUM DOLOR SIT AMET CONSECTETUR. EU ELIT.";
  const descriptionParagraph =
    "Lorem ipsum dolor sit amet. Mauris ullamcorper etiam leo eleifend condimentum in vitae faucibus. Amet massa malesuada sit pretium. Donec pharetra erat lacus suspendisse ornare.";
  const featureItems = [
    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
      description:
        "Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
      description:
        "Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
    },
  ];
  return (
    <div className="relative container   mx-auto px-16 py-12 font-inter bg-white rounded-xl shadow-lg md:flex md:space-x-12 items-center ">
      {/* Left Column: Text Content */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        {/* Blue Small Heading */}
        {blueHeading && (
          <p className="text-blue-600 text-base font-semibold mb-2">
            {blueHeading}
          </p>
        )}

        {/* Main Heading */}
        {mainHeading && (
          <h2 className="text-gray-900 w-1/2 text-3xl md:text-4xl font-extrabold leading-tight mb-6 uppercase">
            {mainHeading}
          </h2>
        )}

        {/* Description Paragraph */}
        {descriptionParagraph && (
          <p className="text-gray-700 text-base leading-relaxed mb-8">
            {descriptionParagraph}
          </p>
        )}

        {/* Feature Items List */}
        {featureItems && featureItems.length > 0 && (
          <div className="flex flex-col space-y-6">
            {featureItems.map((item, index) => (
              <div key={index} className="flex items-start ">
                {/* Icon (using inline SVG for simplicity and consistency) */}

                <Image
                  src="/prefix.png"
                  alt="Feature Icon"
                  width={24}
                  height={24}
                  className="object-contain m-[6px]"
                />

                <div>
                  <p className="text-gray-900 font-bold text-lg mb-1">
                    {item.title}
                  </p>
                  <p className="text-gray-700 text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="md:w-1/2 flex justify-end items-center m-0 p-0">
        <Image
          src="/Section2.png"
          alt="section two"
          width={500} // Reduced width
          height={300}
          className="object-contain"
        />
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full   h-[20px]">
        <Image
          src="/Section1Border.png"
          alt="section border"
          fill
          className="object-cover lg:pl-16"
        />
      </div>
    </div>
  );
}

export default SectionTwo;
