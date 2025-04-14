import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhamma Backwater Resort",
  description:
    "Experience the authentic beauty of Alappuzha backwaters in our luxurious houseboat resort. Perfect for family vacations, events, and romantic getaways.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-white">{children}</main>
      </body>
    </html>
  );
}
