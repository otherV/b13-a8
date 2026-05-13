"use client";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "@/utils/auth-client";
import { LuUser, LuMail, LuPencil } from "react-icons/lu";

const ProfilePage = () => {
    const { data: session, isPending } = useSession();

    if (isPending) return (
        <div className="flex-1 flex justify-center items-center">
            <span className="loading loading-bars loading-lg text-green-600" />
        </div>
    );

    if (!session) return null;

    return (
        <section className="py-16 container mx-auto max-w-2/10">
            <div className="flex justify-center items-center">
                <h2 className="w-fit text-2xl font-black uppercase text-gray-800 border-b-3 border-green-600 pb-0.5 mb-4">
                    My Profile
                </h2>
            </div>
            <div className="bg-white border-none p-8">
                <div className="flex justify-center mb-6">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-green-600">
                        <Image
                            src={session.user.image ?? "/default-avatar.png"}
                            alt={session.user.name}
                            fill
                            sizes="96px"
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-3 mb-8">
                    <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center gap-1.5 text-green-600 mb-1">
                            <LuUser size={13} />
                            <span className="text-[10px] font-bold uppercase text-gray-400">
                                Full Name
                            </span>
                        </div>
                        <p className="text-sm font-bold text-gray-800">{session.user.name}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center gap-1.5 text-green-600 mb-1">
                            <LuMail size={13} />
                            <span className="text-[10px] font-bold uppercase text-gray-400">
                                Email
                            </span>
                        </div>
                        <p className="text-sm font-bold text-gray-800">{session.user.email}</p>
                    </div>
                </div>
                <Link
                    href="/my-profile/update"
                    className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white font-bold uppercase text-xs py-3 rounded-lg transition-colors"
                >
                    <LuPencil size={14} />
                    Update Profile
                </Link>
            </div>
        </section>
    );
};

export default ProfilePage;