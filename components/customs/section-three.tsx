import Image from "next/image";

export default function SectionThree() {
  const brands = [
    { name: "Hero", src: "/Hero_Moto.png" },
    { name: "Honda", src: "/Honda.png" },
    { name: "Bajaj", src: "/bajaj.png" },
    { name: "TVS", src: "/TVS.png" },
    { name: "Royal Enfield", src: "/royal.png" },
    { name: "Yamaha", src: "/yamaha.png" },
    { name: "KTM", src: "/KTM.png" },
    { name: "Ather", src: "/Ather.png" },
    { name: "Electric", src: "/Ola.png" },
    { name: "Revolt", src: "/new.png" },
    { name: "Ultraviolette", src: "/Ultraviolette.png" },
    { name: "Tork Motors", src: "/ANI.png" },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-16 text-center">
      {/* Heading */}
      <h2 className="heading-xl text-center mx-auto uppercase tracking-tight mb-10 w-full md:w-1/2">
        Lorem ipsum dolor sit amet consectetur. Commodo leo amet.
      </h2>

      {/* Brand Logos */}
      <div className="grid grid-cols-2   sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 place-items-center">
        {brands.map((brand, idx) => (
          <div
            key={idx}
            className="relative w-[121px] h-[97px] "
            aria-label={brand.name}>
            <Image
              src={brand.src}
              alt={brand.name}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
