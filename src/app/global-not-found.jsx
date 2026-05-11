import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "animate.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: '404 - Page Not Found',
    description: 'The page you are looking for does not exist.',
}

export default function GlobalNotFound() {
    return (
        <html
            lang="en"
            data-theme="light"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className="bg-[#F8FAFC] min-h-screen flex flex-col">
                

                <div className="flex-1 flex justify-center items-center">
                    <div className="text-center space-y-5">
                        <p className="animate__animated animate__bounceIn text-8xl">🐄</p>
                        <h1 className="animate__animated animate__fadeInUp animate__delay-1s text-5xl font-black uppercase">
                            404
                        </h1>
                        <p className="animate__animated animate__fadeInUp animate__delay-1s text-gray-400 uppercasetext-sm">
                            This page wandered off the farm
                        </p>
                        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                        <a href="/" className="bg-green-600 hover:bg-green-700 text-white font-bold uppercase text-sm px-8 py-3 rounded-lg transition-colors">
                            Back to Home
                        </a>
                    </div>
                </div>

                
            </body>
        </html>
    );
}