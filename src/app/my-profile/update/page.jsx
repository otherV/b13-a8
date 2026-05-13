"use client";
import { useState } from "react";
import { useSession, updateUser } from "@/utils/auth-client";
import { redirect, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { LuUser, LuImage } from "react-icons/lu";

const UpdateProfilePage = () => {
    const router = useRouter();
    const [updateForm, setUpdateForm] = useState({ name: "", image: "" });

    const { data: session, isPending } = useSession();
    //if (!session) notFound();
    if (!session) redirect(`/login`);
    if (isPending) return (
        <div className="flex-1 flex justify-center items-center">
            <span className="loading loading-bars loading-xs text-green-600"></span>
            <span className="loading loading-bars loading-sm text-green-600"></span>
            <span className="loading loading-bars loading-md text-green-600"></span>
            <span className="loading loading-bars loading-lg text-green-600"></span>
            <span className="loading loading-bars loading-xl text-green-600"></span>
        </div>
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateUser({
            name: updateForm.name || undefined,
            image: updateForm.image || undefined,
        }, {
            onSuccess: () => {
                toast.success("Profile updated!");
                setTimeout(() => router.push("/my-profile"), 1500);
            },
            onError: ({ error }) => {
                toast.error(error.message);
            },
        });
    };

    return (
        <section className="py-16 container mx-auto max-w-md px-4">
            <div className="flex justify-center items-center">
                <h2 className="w-fit text-2xl font-black uppercase text-gray-800 border-b-3 border-green-600 pb-0.5 mb-4">
                    Update Profile
                </h2>
            </div>

            <div className="bg-white border-none p-8">
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center gap-1.5 text-green-600 mb-2">
                            <LuUser size={13} />
                            <span className="text-[10px] font-bold uppercase text-gray-400">
                                New Name
                            </span>
                        </div>
                        <input
                            type="text"
                            placeholder={session.user.name}
                            value={updateForm.name}
                            onChange={(e) => setUpdateForm({
                                ...updateForm,
                                name: e.target.value
                            })}
                            className="input input-bordered input-sm w-full"
                        />
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center gap-1.5 text-green-600 mb-2">
                            <LuImage size={13} />
                            <span className="text-[10px] font-bold uppercase text-gray-400">
                                Photo URL
                            </span>
                        </div>
                        <input
                            type="url"
                            placeholder={session.user.image ?? "https://..."}
                            value={updateForm.image}
                            onChange={(e) => setUpdateForm({
                                ...updateForm,
                                image: e.target.value
                            })}
                            className="input input-bordered input-sm w-full"
                        />
                    </div>

                    <button
                        type="submit"
                        className="flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white font-bold uppercase text-xs py-3 rounded-lg transition-colors mt-2"
                    >
                        Update Information
                    </button>
                </form>
            </div>
        </section>
    );
};

export default UpdateProfilePage;