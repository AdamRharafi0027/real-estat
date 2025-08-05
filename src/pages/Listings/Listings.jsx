"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import house1 from "../../../public/images/house1.jpg";
import house2 from "../../../public/images/house2.jpg";
import house3 from "../../../public/images/house3.jpg";
import house4 from "../../../public/images/house4.jpg";

const properties = [
  {
    id: 1,
    title: "Modern Family Home",
    price: "$450,000",
    beds: 4,
    baths: 3,
    sqft: 2800,
    image: house1,
    location: "New York, NY",
  },
  {
    id: 2,
    title: "Downtown Apartment",
    price: "$350,000",
    beds: 2,
    baths: 2,
    sqft: 1100,
    image: house2,
    location: "San Francisco, CA",
  },
  {
    id: 3,
    title: "Cozy Suburban House",
    price: "$380,000",
    beds: 3,
    baths: 2,
    sqft: 1700,
    image: house3,
    location: "Austin, TX",
  },
  {
    id: 4,
    title: "Luxury Condo",
    price: "$1,200,000",
    beds: 3,
    baths: 3,
    sqft: 2500,
    image: house4,
    location: "Miami, FL",
  },
  {
    id: 5,
    title: "Modern Family Home",
    price: "$450,000",
    beds: 4,
    baths: 3,
    sqft: 2800,
    image: house1,
    location: "New York, NY",
  },
  {
    id: 6,
    title: "Downtown Apartment",
    price: "$350,000",
    beds: 2,
    baths: 2,
    sqft: 1100,
    image: house2,
    location: "San Francisco, CA",
  },
  {
    id: 7,
    title: "Cozy Suburban House",
    price: "$380,000",
    beds: 3,
    baths: 2,
    sqft: 1700,
    image: house3,
    location: "Austin, TX",
  },
  {
    id: 8,
    title: "Luxury Condo",
    price: "$1,200,000",
    beds: 3,
    baths: 3,
    sqft: 2500,
    image: house4,
    location: "Miami, FL",
  },
];

export default function Listings() {
  return (
    <main id="listings" className="min-h-screen bg-gray-50 py-30 px-6">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Featured Listings
      </h1>

      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {properties.map(({ id, title, price, beds, baths, sqft, image, location }, index) => {
          const fromDirection = index % 2 === 0 ? -50 : 50; // even index from left, odd from right

          return (
            <motion.div
              key={id}
              initial={{ opacity: 0, x: fromDirection }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  priority={id === 1}
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-1">{title}</h2>
                <p className="text-orange-500 font-bold text-lg mb-2">{price}</p>
                <p className="text-gray-600 mb-2">{location}</p>
                <div className="flex space-x-4 text-gray-700 text-sm font-medium">
                  <div>{beds} Beds</div>
                  <div>{baths} Baths</div>
                  <div>{sqft} sqft</div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </main>
  );
}
