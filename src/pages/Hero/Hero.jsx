"use client";

import Image from "next/image";
import heroImage from "../../../public/images/hero-image.jpg";

export default function Hero() {
  return (
    <>
      <section id="home" className="relative h-screen w-full overflow-hidden">
        {/* Fixed Background Image */}
        <div className="absolute top-0 h-screen w-full ">
          <Image
            src={heroImage}
            alt="Hero Background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        {/* Title and Subtitle */}
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center space-y-6 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500">
            Find Your Dream Home
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-white max-w-xl">
            Explore the Best Properties Around You
          </h2>
        </div>
      </section>
    </>
  );
}
