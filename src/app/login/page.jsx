"use client";

import { useState } from "react";
import { signIn } from "@/utils/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";
import googleIcon from "@/assets/google-icon.svg";

const LoginPage = () => {
    const router = useRouter();
    const [loginForm, setLoginForm] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        await signIn.email({
            email: loginForm.email,
            password: loginForm.password,
        }, {
            onSuccess: () => {
                toast.success("Welcome back!");
                setTimeout(() => router.push("/"), 1500);
            },
            onError: ({ error }) => {
                toast.error(error.message);
            },
        });
    };

    return (
        <section className="py-16 container mx-auto max-w-2/10">
            <div className="flex justify-center items-center">
                <h2 className="w-fit text-2xl font-black uppercase text-gray-800 border-b-3 border-green-600 pb-0.5 mb-4">
                    Login
                </h2>
            </div>

            <div className="bg-white border-none p-8 flex flex-col gap-4">
                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        value={loginForm.email}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        value={loginForm.password}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                    />
                    <button
                        type="submit"
                        className="btn bg-green-600 hover:bg-green-700 text-white font-bold uppercase"
                    >
                        Login
                    </button>
                </form>

                <div className="divider text-xs text-gray-400">OR</div>

                <button
                    onClick={() => signIn.social({
                        provider: "google",
                        callbackURL: "/"
                    })}
                    className="btn btn-outline w-full flex items-center gap-2 font-bold uppercase text-xs"
                >
                    <Image src={googleIcon} alt="Google" width={16} height={16} />
                    Continue with Google
                </button>

                <p className="text-center text-sm text-gray-400">
                    <span>Don&apos;t have an account? </span>
                    <Link href="/register" className="text-green-600 font-bold">
                        Register
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default LoginPage;