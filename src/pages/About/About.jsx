// app/about/page.tsx or pages/about.tsx
"use client";

import Image from "next/image";
import heroBg from "../../../public/images/hero-image.jpg"; 
import { FaCheck } from "react-icons/fa6";


export default function About() {
  return (
    <main id="about" className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] mt-30  flex items-center justify-center overflow-hidden">
        <Image
          src={heroBg}
          alt="About Hero"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-md mb-4">
            About Our Company
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
            Building trust and delivering exceptional real estate experiences.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              At DreamHome, we simplify the process of finding your perfect home by combining
              cutting-edge technology with personalized service. We believe everyone deserves
              a beautiful place to call home.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We are committed to transparency, quality, and exceeding expectations at every step.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Why Choose Us?</h2>
            <ul className="text-gray-700 text-lg space-y-4">
              <li className="flex items-start">
                <span className="text-orange-500 font-bold text-2xl mr-3"><FaCheck/></span> Trusted, verified listings updated regularly
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 font-bold text-2xl mr-3"><FaCheck/></span> Expert local agents who know your area
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 font-bold text-2xl mr-3"><FaCheck/></span> Seamless experience across all devices
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 font-bold text-2xl mr-3"><FaCheck/></span> Comprehensive support before and after purchase
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-orange-500 py-16 text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to find your dream home?
        </h3>
        <a
          href="#"
          className="inline-block bg-white text-orange-500 text-lg font-semibold py-4 px-8 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          View Listings
        </a>
      </section>
    </main>
  );
}
