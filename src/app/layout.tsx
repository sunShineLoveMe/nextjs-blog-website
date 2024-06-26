import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Narbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Next.js 14 HomePage",
    template: "%s| next.js 14"
  },
  description: "next.js app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Narbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
