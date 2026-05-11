"use client"

import Image from "next/image";
import Link from "next/link";
import logoSm from '@/assets/logo.png';
import { usePathname } from "next/navigation";

const NavBar = () => {
    const pathName = usePathname();
    return (
        <div className="navbar bg-base-100 shadow-sm px-20">
            <div className="flex-1">
                <Link href={`/`}>
                    <div className='flex items-center gap-2'>
                        <Image
                            src={logoSm}
                            alt={`logo`}
                            width={100}
                            height={100}
                        />
                        <h1 className="text-5xl font-medium text-[#606568] uppercase">
                            Qurbani Hat
                        </h1>
                    </div>
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 font-semibold text-base flex items-center gap-3">
                    <li>
                        <Link
                            href="/"
                            className={pathName === "/" ? "underline" : ""}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/animals"
                            className={pathName === "/animals" ? "underline" : ""}
                        >
                            All Animals
                        </Link>
                    </li>
                    <li>
                        <div className="dropdown dropdown-end p-0 rounded-full">
                            <div tabIndex={0} role="button" className="avatar hover:border rounded-full">
                                <div className="w-10 rounded-full">
                                    <Image
                                        alt="profile"
                                        src={logoSm}
                                        width={40}
                                        height={40}
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow border">
                                <li>
                                    <Link
                                        href="/profile"
                                        className={``}
                                    >
                                        Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/logout"
                                        className={``}
                                    >
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;