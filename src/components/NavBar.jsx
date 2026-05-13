"use client";

import Image from "next/image";
import Link from "next/link";
import logoSm from "@/assets/logo.webp";
import dummyUser from "@/assets/dummy-user.png";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "@/utils/auth-client";

const NavBar = () => {
    const pathName = usePathname();
    const router = useRouter();
    const { data: session } = useSession();

    return (
        <>
            <div className="navbar bg-base-100 shadow-sm px-8 hidden md:flex">
                <div className="flex-1">
                    <Link href="/" className="flex items-center gap-3">
                        <Image src={logoSm} alt="logo" width={60} height={60} className="w-14 h-auto" priority />
                        <h1 className="text-2xl font-black text-[#606568] uppercase">Qurbani Hat</h1>
                    </Link>
                </div>

                <div className="flex-none">
                    <ul className="menu menu-horizontal gap-1 font-medium text-sm">
                        <li>
                            <Link href="/" className={pathName === "/" ? "font-bold border-b-2 border-green-600 rounded-none" : ""}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/animals" className={pathName === "/animals" ? "font-bold border-b-2 border-green-600 rounded-none" : ""}>
                                All Animals
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex-none ml-4">
                    {session ? (
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="avatar cursor-pointer">
                                <div className="w-9 rounded-full ring ring-green-600 ring-offset-1">
                                    <Image
                                        src={session.user.image ?? dummyUser}
                                        alt="avatar"
                                        width={36}
                                        height={36}
                                        className="rounded-full"
                                    />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-48 p-2 shadow border border-base-200">
                                <li className="menu-title text-xs px-3 py-1">{session.user.name}</li>
                                <li><Link href="/my-profile">My Profile</Link></li>
                                <li>
                                    <button onClick={() => signOut({
                                        fetchOptions: {
                                            onSuccess: () => {
                                                router.push("/");
                                            },
                                        },
                                    })} className="text-red-500">
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <div className="flex gap-2">
                            <Link href="/login" className="btn btn-sm btn-ghost">Login</Link>
                            <Link href="/register" className="btn btn-sm bg-green-600 hover:bg-green-700 text-white">Register</Link>
                        </div>
                    )}
                </div>
            </div>

            <div className="md:hidden">
                <div className="drawer">
                    <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <div className="navbar bg-base-100 shadow-sm px-4">
                            <div className="flex-none">
                                <label htmlFor="mobile-drawer" className="btn btn-ghost btn-square">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </label>
                            </div>
                            <div className="flex-1 flex justify-center">
                                <Link href="/" className="flex items-center gap-2">
                                    <Image src={logoSm} alt="logo" width={40} height={40} className="w-10 h-auto" priority />
                                    <h1 className="text-lg font-black text-[#606568] uppercase">Qurbani Hat</h1>
                                </Link>
                            </div>
                            <div className="flex-none">
                                {session ? (
                                    <div className="avatar">
                                        <div className="w-8 rounded-full ring ring-green-600 ring-offset-1">
                                            <Image
                                                src={session.user.image ?? dummyUser}
                                                alt="avatar"
                                                width={32}
                                                height={32}
                                                className="rounded-full"
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex gap-2">
                                        <Link href="/login" className="btn btn-sm btn-ghost">Login</Link>
                                        <Link href="/register" className="btn btn-sm bg-green-600 hover:bg-green-700 text-white">Register</Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="drawer-side z-50">
                        <label htmlFor="mobile-drawer" className="drawer-overlay" />
                        <div className="min-h-full w-64 bg-base-100 flex flex-col">
                            <div className="bg-green-600 p-5 flex items-center gap-3">
                                {session ? (
                                    <>
                                        <div className="avatar">
                                            <div className="w-12 rounded-full">
                                                <Image
                                                    src={session.user.image ?? dummyUser}
                                                    alt="avatar"
                                                    width={48}
                                                    height={48}
                                                    className="rounded-full"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-xs text-white/70">Welcome,</p>
                                            <p className="font-bold text-white text-sm">{session.user.name}</p>
                                        </div>
                                    </>
                                ) : (
                                    <p className="font-bold text-white">Menu</p>
                                )}
                            </div>

                            <ul className="menu w-full text-base font-medium flex-1">
                                <li className={pathName === "/" ? "bg-green-50 text-green-700 font-bold" : ""}>
                                    <Link href="/">Home</Link>
                                </li>
                                <li className={pathName === "/animals" ? "bg-green-50 text-green-700 font-bold" : ""}>
                                    <Link href="/animals">All Animals</Link>
                                </li>
                                {session ? (
                                    <>
                                        <div className="divider my-1" />
                                        <li><Link href="/my-profile">My Profile</Link></li>
                                        <li>
                                            <button onClick={() => signOut()} className="text-red-500">Logout</button>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <div className="divider my-1" />
                                        <li><Link href="/login">Login</Link></li>
                                        <li><Link href="/register">Register</Link></li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;