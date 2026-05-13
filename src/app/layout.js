import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "animate.css";
import { ToastContainer } from "react-toastify";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Qurbani Hat",
  description: "a very simple next app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-[#fefefd] min-h-screen flex flex-col">
        <NavBar />
        {children}
        <Footer />
        <ToastContainer position="top-center" />
      </body>
    </html>
  );
}
