"use client";

import Image from "next/image";
import Link from "next/link";

interface CardItem {
  title: string;
  description: string;
  image: string;
  link: string;
}

const cardItems: CardItem[] = [
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    image: "/s4one.png",
    link: "#",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    image: "/s4two.png",
    link: "#",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    image: "/s4three.png",
    link: "#",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    image: "/s4four.png",
    link: "#",
  },
];

export default function SectionFour() {
  return (
    <section className="px-6 md:px-16 py-16 bg-[url('/bgG.svg')] bg-cover bg-no-repeat bg-center">
      {/* Heading */}
      <div className="space-y-2 lg:w-[550px] mb-10">
        <p className="text-blue-700 font-semibold text-sm uppercase">
          Lorem ipsum dolor sit amet
        </p>
        <h2 className="text-gray-900 text-3xl md:text-4xl font-extrabold uppercase">
          LOREM IPSUM DOLOR SIT
        </h2>
        <p className="text-gray-700 text-base leading-relaxed max-w-3xl">
          Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis
          donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in
          nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus
          lectus.
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full gap-8 place-content-center place-items-center max-w-[800px] mx-auto">
        {cardItems.map((item, idx) => (
          <div
            key={idx}
            className=" flex flex-col items-center justify-center rounded-xl shadow-md overflow-hidden w-full max-w-[380px]">
            <div className="relative w-full h-[180px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-900 text-[15px] mb-1">
                {item.title}
              </h3>
              <p className="text-gray-700 text-[14px] leading-relaxed mb-4">
                {item.description}
              </p>
              <Link
                href={item.link}
                className="text-blue-700 text-[14px] font-medium underline underline-offset-2">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
