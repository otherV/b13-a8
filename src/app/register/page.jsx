"use client";

import { useState } from "react";
import { useSession, signUp, signIn } from "@/utils/auth-client";
import { redirect, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";
import googleIcon from "@/assets/google-icon.svg";

const RegisterPage = () => {
    const router = useRouter();
    const [regForm, setRegForm] = useState({ name: "", email: "", image: "", password: "" });

    const { data: session, isPending } = useSession();
    if (isPending) return (
        <div className="flex-1 flex justify-center items-center">
            <span className="loading loading-bars loading-xs text-green-600"></span>
            <span className="loading loading-bars loading-sm text-green-600"></span>
            <span className="loading loading-bars loading-md text-green-600"></span>
            <span className="loading loading-bars loading-lg text-green-600"></span>
            <span className="loading loading-bars loading-xl text-green-600"></span>
        </div>
    );
    //if (session) notFound();
    if (session) redirect(`/`);

    const handleRegister = async (e) => {
        e.preventDefault();
        await signUp.email(
            {
                name: regForm.name,
                email: regForm.email,
                password: regForm.password,
                image: regForm.image,
            },
            {
                onSuccess: () => {
                    toast.success("Account created!");
                    router.push("/login");
                },
                onError: ({ error }) => {
                    toast.error(error.message);
                },
            }
        );

        console.log(regForm);
    };

    const handleChange = (e) => {
        setRegForm({
            ...regForm,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section className="py-16 container mx-auto max-w-md px-4">

            <div className="flex justify-center items-center">
                <h2 className="w-fit text-2xl font-black uppercase text-gray-800 border-b-3 border-green-600 pb-0.5 mb-4">
                    Register
                </h2>
            </div>

            <div className="bg-white border-none p-8 flex flex-col gap-4">
                <form onSubmit={handleRegister} className="flex flex-col gap-4">
                    <input
                        type="text"
                        name={`name`}
                        placeholder="Full Name"
                        required
                        value={regForm.name}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                    />
                    <input
                        type="email"
                        name={`email`}
                        placeholder="Email Address"
                        required
                        value={regForm.email}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                    />
                    <input
                        type="url"
                        name={`image`}
                        placeholder="Photo (URL)"
                        value={regForm.image}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                    />
                    <input
                        type="password"
                        name={`password`}
                        placeholder="Password"
                        required
                        value={regForm.password}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                    />
                    <button
                        type="submit"
                        className="btn bg-green-600 hover:bg-green-700 text-white font-bold uppercase"
                    >
                        Register
                    </button>
                </form>

                <div className="divider text-xs text-gray-400">OR</div>

                <button
                    onClick={() => signIn.social({
                        provider: "google",
                        callbackURL: "/",
                    }, {
                        onError: ({ error }) => {
                            //toast.error(error.message);
                        },
                    })}
                    className="btn btn-outline w-full flex items-center gap-2 font-bold uppercase text-xs">
                    <Image src={googleIcon} alt="Google" width={16} height={16} />
                    Continue with Google
                </button>

                <p className="text-center text-sm text-gray-400">
                    <span>Already have an account? </span>
                    <Link href="/login" className="text-green-600 font-bold">
                        Login
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default RegisterPage;