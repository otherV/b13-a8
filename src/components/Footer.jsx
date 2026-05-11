import Image from "next/image";
import Link from "next/link";
import cert from "@/assets/dummy-cert.png";
import { LuPhone, LuMail, LuMapPin, LuFacebook, LuInstagram, LuTwitter } from "react-icons/lu";


const Footer = () => {
    return (
        <footer className="bg-[black] text-base-100 pt-16 pb-8">
            <div className="container mx-auto max-w-[70%]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">


                    <div>
                        <Image
                            src={cert}
                            alt={`dummy`}
                            width={240}
                            height={40}
                            className="h-auto w-auto mb-4"
                        />
                        <p className="text-sm mb-4">
                            <span className="font-bold text-white">QurbaniHat</span> is a modern livestock marketplace connecting buyers with verified sellers across Bangladesh for a hassle-free Qurbani experience.
                        </p>

                        <div className="flex gap-3 mt-4">
                            <a href="#" className="bg-gray-800 hover:bg-green-600 text-gray-400 hover:text-white p-2 rounded-full transition-colors">
                                <LuFacebook size={16} />
                            </a>
                            <a href="#" className="bg-gray-800 hover:bg-green-600 text-gray-400 hover:text-white p-2 rounded-full transition-colors">
                                <LuInstagram size={16} />
                            </a>
                            <a href="#" className="bg-gray-800 hover:bg-green-600 text-gray-400 hover:text-white p-2 rounded-full transition-colors">
                                <LuTwitter size={16} />
                            </a>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-white font-black uppercase text-xs mb-5">
                            Quick Links
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/" className="hover:text-green-500 transition-colors">Home</Link></li>
                            <li><Link href="/animals" className="hover:text-green-500 transition-colors">All Animals</Link></li>
                            <li><Link href="/my-profile" className="hover:text-green-500 transition-colors">My Profile</Link></li>
                            <li><Link href="/login" className="hover:text-green-500 transition-colors">Login</Link></li>
                            <li><Link href="/register" className="hover:text-green-500 transition-colors">Register</Link></li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-white font-black uppercase text-xs mb-5">
                            Contact
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <LuPhone size={14} className="text-green-500 shrink-0" />
                                XXXXX-XXX-XXX
                            </li>
                            <li className="flex items-center gap-2">
                                <LuMail size={14} className="text-green-500 shrink-0" />
                                support@qurbanihat.example.com
                            </li>
                            <li className="flex items-start gap-2">
                                <LuMapPin size={14} className="text-green-500 shrink-0 mt-0.5" />
                                123 Farmgate, Dhaka 1234, Bangladesh
                            </li>
                        </ul>
                    </div>

                </div>


                <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs">
                    <p>Copyright © {new Date().getFullYear()} Qurbani Hat. All Rights Reserved.</p>
                    <p>Developed by <Link
                        href="https://github.com/otherV"
                        target="_blank"
                        rel="noopener noreferrer"
                    ><span className="font-bold text-white">Nazir Ahmmed</span>
                    </Link>.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;