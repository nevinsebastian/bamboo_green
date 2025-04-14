"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Room {
  id: number;
  name: string;
  price: number;
  description: string;
  features: string[];
  maxGuests: number;
}

export default function Accommodation() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    adults: 2,
    children: 0,
    hasPet: false,
    checkIn: "",
    checkOut: "",
  });

  const houseboatRooms: Room[] = [
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
      maxGuests: 4,
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
      maxGuests: 4,
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
      maxGuests: 4,
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
      maxGuests: 6,
    },
  ];

  const calculateTotalPrice = () => {
    if (!selectedRoom || !bookingDetails.checkIn || !bookingDetails.checkOut)
      return 0;

    const nights = Math.ceil(
      (new Date(bookingDetails.checkOut).getTime() -
        new Date(bookingDetails.checkIn).getTime()) /
        (1000 * 60 * 60 * 24)
    );

    let total = selectedRoom.price * nights;
    const extraGuests = Math.max(
      0,
      bookingDetails.adults + bookingDetails.children - 2
    );
    total += extraGuests * 300 * nights;
    if (bookingDetails.hasPet) total += 300 * nights;

    return total;
  };

  const handleBookingClick = (room: Room) => {
    setSelectedRoom(room);
    setIsBookingModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsBookingModalOpen(false);
    setSelectedRoom(null);
    setBookingDetails({
      adults: 2,
      children: 0,
      hasPet: false,
      checkIn: "",
      checkOut: "",
    });
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/60 via-amber-800/40 to-amber-900/60 z-10" />
        <Image
          src="/images/hero-background.jpg"
          alt="Bamboo Green Houseboat"
          fill
          className="object-cover"
        />
        <div className="relative z-20 flex flex-col items-center justify-center h-full px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-amber-50 mb-4">
            Houseboat Rooms
          </h1>
          <p className="text-xl text-amber-100 text-center max-w-2xl">
            Experience authentic Kerala backwater living in our traditional
            houseboat
          </p>
        </div>
      </section>

      {/* Rooms Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
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
                    onClick={() => handleBookingClick(room)}
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
          className="mt-12 bg-white rounded-lg overflow-hidden shadow-lg border-2 border-amber-800"
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
              Experience the ultimate privacy and luxury by booking the entire
              houseboat. Perfect for families and groups.
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
                    Fixed location with beautiful backwater views
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
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {isBookingModalOpen && selectedRoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg max-w-[95vw] sm:max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-center mb-4 sm:mb-6">
                  <h2 className="text-2xl font-bold text-amber-900">
                    Book {selectedRoom.name}
                  </h2>
                  <button
                    onClick={handleCloseModal}
                    className="text-amber-600 hover:text-amber-800"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {/* Guest Selection */}
                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-amber-900 mb-2 sm:mb-3">
                      Guests
                    </h3>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-sm font-medium text-amber-900 mb-1">
                          Adults
                        </label>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() =>
                              setBookingDetails((prev) => ({
                                ...prev,
                                adults: Math.max(1, prev.adults - 1),
                              }))
                            }
                            className="p-2 rounded-lg border border-amber-300 bg-amber-100 text-amber-900 hover:bg-amber-200 font-bold"
                          >
                            -
                          </button>
                          <span className="w-8 text-center text-amber-900 font-medium">
                            {bookingDetails.adults}
                          </span>
                          <button
                            onClick={() =>
                              setBookingDetails((prev) => ({
                                ...prev,
                                adults: Math.min(
                                  selectedRoom.maxGuests,
                                  prev.adults + 1
                                ),
                              }))
                            }
                            className="p-2 rounded-lg border border-amber-300 bg-amber-100 text-amber-900 hover:bg-amber-200 font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-amber-900 mb-1">
                          Children
                        </label>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() =>
                              setBookingDetails((prev) => ({
                                ...prev,
                                children: Math.max(0, prev.children - 1),
                              }))
                            }
                            className="p-2 rounded-lg border border-amber-300 bg-amber-100 text-amber-900 hover:bg-amber-200 font-bold"
                          >
                            -
                          </button>
                          <span className="w-8 text-center text-amber-900 font-medium">
                            {bookingDetails.children}
                          </span>
                          <button
                            onClick={() =>
                              setBookingDetails((prev) => ({
                                ...prev,
                                children: Math.min(
                                  selectedRoom.maxGuests -
                                    bookingDetails.adults,
                                  prev.children + 1
                                ),
                              }))
                            }
                            className="p-2 rounded-lg border border-amber-300 bg-amber-100 text-amber-900 hover:bg-amber-200 font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pet Option */}
                  <div>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={bookingDetails.hasPet}
                        onChange={(e) =>
                          setBookingDetails((prev) => ({
                            ...prev,
                            hasPet: e.target.checked,
                          }))
                        }
                        className="rounded text-amber-600 focus:ring-amber-500 h-5 w-5"
                      />
                      <span className="text-amber-900 text-sm sm:text-base">
                        Bringing a pet? (Additional ₹300/night)
                      </span>
                    </label>
                  </div>

                  {/* Date Selection */}
                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-amber-900 mb-2 sm:mb-3">
                      Select Dates
                    </h3>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-sm font-medium text-amber-900 mb-1">
                          Check-in Date
                        </label>
                        <input
                          type="date"
                          value={bookingDetails.checkIn}
                          onChange={(e) =>
                            setBookingDetails((prev) => ({
                              ...prev,
                              checkIn: e.target.value,
                            }))
                          }
                          min={new Date().toISOString().split("T")[0]}
                          className="w-full p-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-amber-900 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-amber-900 mb-1">
                          Check-out Date
                        </label>
                        <input
                          type="date"
                          value={bookingDetails.checkOut}
                          onChange={(e) =>
                            setBookingDetails((prev) => ({
                              ...prev,
                              checkOut: e.target.value,
                            }))
                          }
                          min={
                            bookingDetails.checkIn ||
                            new Date().toISOString().split("T")[0]
                          }
                          className="w-full p-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-amber-900 bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Price Summary */}
                  <div className="bg-amber-50 p-3 sm:p-4 rounded-lg">
                    <h3 className="text-base sm:text-lg font-medium text-amber-900 mb-2 sm:mb-3">
                      Price Summary
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm sm:text-base">
                        <span className="text-amber-900">Base price</span>
                        <span className="text-amber-900 font-medium">
                          ₹{selectedRoom.price}/night
                        </span>
                      </div>
                      {bookingDetails.adults + bookingDetails.children > 2 && (
                        <div className="flex justify-between text-sm sm:text-base">
                          <span className="text-amber-900">
                            Extra guests (
                            {bookingDetails.adults +
                              bookingDetails.children -
                              2}{" "}
                            × ₹300/night)
                          </span>
                          <span className="text-amber-900 font-medium">
                            ₹
                            {(bookingDetails.adults +
                              bookingDetails.children -
                              2) *
                              300}
                            /night
                          </span>
                        </div>
                      )}
                      {bookingDetails.hasPet && (
                        <div className="flex justify-between text-sm sm:text-base">
                          <span className="text-amber-900">Pet fee</span>
                          <span className="text-amber-900 font-medium">
                            ₹300/night
                          </span>
                        </div>
                      )}
                      {bookingDetails.checkIn && bookingDetails.checkOut && (
                        <div className="flex justify-between text-sm sm:text-base">
                          <span className="text-amber-900">
                            Number of nights
                          </span>
                          <span className="text-amber-900 font-medium">
                            {Math.ceil(
                              (new Date(bookingDetails.checkOut).getTime() -
                                new Date(bookingDetails.checkIn).getTime()) /
                                (1000 * 60 * 60 * 24)
                            )}
                          </span>
                        </div>
                      )}
                      <div className="border-t border-amber-200 my-2"></div>
                      <div className="flex justify-between font-bold text-sm sm:text-base">
                        <span className="text-amber-900">Total</span>
                        <span className="text-amber-900">
                          ₹{calculateTotalPrice()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Book Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-amber-800 text-amber-50 px-6 py-3 rounded-lg font-medium tracking-wide hover:bg-amber-900 transition-all duration-300 text-base sm:text-lg"
                    disabled={
                      !bookingDetails.checkIn || !bookingDetails.checkOut
                    }
                  >
                    Complete Booking
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
