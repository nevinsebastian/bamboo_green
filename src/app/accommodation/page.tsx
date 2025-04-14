"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Accommodation() {
  const [selectedOption, setSelectedOption] = useState<"rooms" | "houseboat">(
    "rooms"
  );

  const houseboatRooms = [
    {
      id: 1,
      name: "Lower Deck Room 1",
      price: 1500,
      description:
        "Comfortable room on the lower deck with traditional Kerala decor",
      features: [
        "Queen size bed",
        "Private bathroom",
        "Air conditioning",
        "Backwater view",
      ],
    },
    {
      id: 2,
      name: "Lower Deck Room 2",
      price: 2000,
      description: "Spacious room on the lower deck with modern amenities",
      features: [
        "King size bed",
        "Private bathroom",
        "Air conditioning",
        "Backwater view",
      ],
    },
    {
      id: 3,
      name: "Upper Deck Room 1",
      price: 2500,
      description: "Luxurious room on the upper deck with panoramic views",
      features: [
        "King size bed",
        "Private bathroom",
        "Air conditioning",
        "Panoramic view",
      ],
    },
    {
      id: 4,
      name: "Upper Deck Room 2",
      price: 3000,
      description: "Premium room on the upper deck with exclusive amenities",
      features: [
        "King size bed",
        "Private bathroom",
        "Air conditioning",
        "Private balcony",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/60 via-amber-800/40 to-amber-900/60 z-10" />
        <Image
          src="/images/hero-background.jpg"
          alt="Bamboo Green Resort"
          fill
          className="object-cover"
        />
        <div className="relative z-20 flex flex-col items-center justify-center h-full px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-amber-50 mb-4">
            Accommodation
          </h1>
          <p className="text-xl text-amber-100 text-center max-w-2xl">
            Choose your perfect stay in the heart of Kerala&apos;s backwaters
          </p>
        </div>
      </section>

      {/* Options Toggle */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-center space-x-4 mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedOption("rooms")}
            className={`px-8 py-3 rounded-lg font-medium tracking-wide transition-all duration-300 ${
              selectedOption === "rooms"
                ? "bg-amber-800 text-amber-50 shadow-lg"
                : "bg-amber-100 text-amber-800 hover:bg-amber-200"
            }`}
          >
            Resort Rooms
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedOption("houseboat")}
            className={`px-8 py-3 rounded-lg font-medium tracking-wide transition-all duration-300 ${
              selectedOption === "houseboat"
                ? "bg-amber-800 text-amber-50 shadow-lg"
                : "bg-amber-100 text-amber-800 hover:bg-amber-200"
            }`}
          >
            Houseboat
          </motion.button>
        </div>

        {/* Rooms Section */}
        {selectedOption === "rooms" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[1, 2, 3].map((room) => (
              <motion.div
                key={room}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg border border-amber-200"
              >
                <div className="relative h-64">
                  <Image
                    src="/images/houseboat.jpg"
                    alt={`Room ${room}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-amber-900 mb-2">
                    Deluxe Room {room}
                  </h3>
                  <p className="text-amber-800 mb-4">
                    Experience traditional Kerala architecture with modern
                    amenities
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-amber-900 font-medium">
                      ₹5,000/night
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-amber-800 text-amber-50 px-4 py-2 rounded-lg font-medium tracking-wide hover:bg-amber-900 transition-all duration-300"
                    >
                      Book Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Houseboat Section */}
        {selectedOption === "houseboat" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Individual Rooms */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {houseboatRooms.map((room) => (
                <motion.div
                  key={room.id}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg border border-amber-200"
                >
                  <div className="relative h-48">
                    <Image
                      src="/images/houseboat.jpg"
                      alt={room.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-amber-900 mb-2">
                      {room.name}
                    </h3>
                    <p className="text-amber-800 mb-4 text-sm">
                      {room.description}
                    </p>
                    <ul className="mb-4 space-y-1">
                      {room.features.map((feature, index) => (
                        <li
                          key={index}
                          className="text-amber-700 text-sm flex items-center"
                        >
                          <svg
                            className="w-4 h-4 mr-2 text-amber-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <span className="text-amber-900 font-medium">
                        ₹{room.price}/night
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-amber-800 text-amber-50 px-4 py-2 rounded-lg font-medium tracking-wide hover:bg-amber-900 transition-all duration-300"
                      >
                        Book Now
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Whole Houseboat Option */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-amber-800"
            >
              <div className="relative h-64">
                <Image
                  src="/images/houseboat.jpg"
                  alt="Whole Houseboat"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-amber-900 mb-4">
                  Book the Entire Houseboat
                </h3>
                <p className="text-amber-800 mb-6 text-lg">
                  Experience the ultimate privacy and luxury by booking the
                  entire houseboat. Perfect for families and groups.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-xl font-medium text-amber-900 mb-3">
                      Inclusions:
                    </h4>
                    <ul className="space-y-2">
                      <li className="text-amber-800 flex items-center">
                        <svg
                          className="w-5 h-5 mr-2 text-amber-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        All 4 rooms with private bathrooms
                      </li>
                      <li className="text-amber-800 flex items-center">
                        <svg
                          className="w-5 h-5 mr-2 text-amber-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Private chef and crew
                      </li>
                      <li className="text-amber-800 flex items-center">
                        <svg
                          className="w-5 h-5 mr-2 text-amber-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Customized backwater cruise
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-amber-900 mb-3">
                      Total Price:
                    </h4>
                    <div className="text-3xl font-bold text-amber-800">
                      ₹9,000/night
                    </div>
                    <p className="text-amber-700 mt-2">
                      (Save ₹1,000 compared to booking rooms individually)
                    </p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-amber-800 text-amber-50 px-6 py-3 rounded-lg font-medium tracking-wide hover:bg-amber-900 transition-all duration-300 text-lg"
                >
                  Book Entire Houseboat
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  );
}
