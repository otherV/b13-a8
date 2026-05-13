"use client";

import { useState } from "react";
import { signUp, signIn } from "@/utils/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";
import googleIcon from "@/assets/google-icon.svg";

const RegisterPage = () => {
    const router = useRouter();
    const [regForm, setRegForm] = useState({ name: "", email: "", image: "", password: "" });

    const handleRegister = async (e) => {
        e.preventDefault();
        await signUp.email(
            {
                name: regForm.name,
                email: regForm.email,
                password: regForm.password,
                image: regForm.image,
                //callbackURL: "/login",
            },
            {
                onSuccess: () => {
                    toast.success("Account created!");
                    setTimeout(
                        () => router.push("/login"),
                        1500
                    );
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
        <section className="py-16 container mx-auto max-w-2/10">

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
                        callbackURL: "/"
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