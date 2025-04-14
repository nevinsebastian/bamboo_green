"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Muhamma Backwater Resort</h3>
            <p className="text-gray-400">
              Experience the authentic beauty of Alappuzha backwaters in our
              luxurious houseboat resort.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/accommodation"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Accommodation
                </Link>
              </li>
              <li>
                <Link
                  href="/experiences"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Experiences
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Muhamma, Alappuzha</li>
              <li>Kerala, India</li>
              <li>Phone: +91 XXXXXXXXXX</li>
              <li>Email: info@muhammaresort.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Muhamma Backwater Resort. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
