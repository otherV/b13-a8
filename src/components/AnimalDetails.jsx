"use client";

import Image from "next/image";
import { toast } from "react-toastify";
import { LuMapPin, LuWeight, LuCalendar, LuDna } from "react-icons/lu";

const AnimalDetails = ({ animal }) => {

    return (
        <section className="container mx-auto max-w-7/10 py-16">
            <div className="grid grid-cols-5 gap-10">


                <div className="col-span-3 space-y-6">
                    <div className="relative w-full h-105 rounded-xl overflow-hidden">
                        <Image
                            src={animal.image}
                            alt={animal.name}
                            fill
                            sizes={60}
                            className="object-cover"
                            priority
                        />
                    </div>
                    <h1 className="text-lg text-gray-500 text-center">{animal.description}</h1>
                </div>


                <div className="col-span-2 flex flex-col gap-6">


                    <div>
                        <span className={`inline-block text-[10px] font-bold uppercase px-2 py-0.5 rounded mb-3 ${animal.type === "Cow"
                            ? "bg-green-50 text-green-700"
                            : "bg-yellow-50 text-yellow-800"
                            }`}>
                            {animal.type} · {animal.category}
                        </span>
                        <h1 className="text-3xl font-black uppercase text-gray-800 mb-2">
                            {animal.name}
                        </h1>
                        <p className="text-2xl font-bold text-green-600">
                            ৳{animal.price.toLocaleString()}
                        </p>
                    </div>


                    <div className="">
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-gray-50 rounded-lg p-3">
                                <div className="flex items-center gap-1.5 text-green-600 mb-1">
                                    <LuCalendar size={14} />
                                    <span className="text-[10px] font-bold uppercase text-gray-400">
                                        Age
                                    </span>
                                </div>
                                <p className="text-sm font-bold text-gray-800">{`${animal.age} Years`}</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3">
                                <div className="flex items-center gap-1.5 text-green-600 mb-1">
                                    <LuWeight size={14} />
                                    <span className="text-[10px] font-bold uppercase text-gray-400">
                                        Weight
                                    </span>
                                </div>
                                <p className="text-sm font-bold text-gray-800">{`${animal.weight} kg`}</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3">
                                <div className="flex items-center gap-1.5 text-green-600 mb-1">
                                    <LuDna size={14} />
                                    <span className="text-[10px] font-bold uppercase text-gray-400">
                                        Breed
                                    </span>
                                </div>
                                <p className="text-sm font-bold text-gray-800">{animal.breed}</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3">
                                <div className="flex items-center gap-1.5 text-green-600 mb-1">
                                    <LuMapPin size={14} />
                                    <span className="text-[10px] font-bold uppercase text-gray-400">
                                        Location
                                    </span>
                                </div>
                                <p className="text-sm font-bold text-gray-800">{animal.location}</p>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <p className="w-fit underline text-[11px] font-bold uppercase text-gray-400 mb-4">
                            Place a Booking
                        </p>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            toast.success("Booking confirmed!");
                        }} className="flex flex-col gap-3">
                            <input
                                type={`text`}
                                name={`name`}
                                placeholder={`Full Name`}
                                required
                                className="input input-bordered input-sm w-full text-sm"
                            />
                            <input
                                type={`email`}
                                name={`email`}
                                placeholder={`Email Address`}
                                required
                                className="input input-bordered input-sm w-full text-sm"
                            />
                            <input
                                type={`tel`}
                                name={`phone`}
                                placeholder={`Phone Number`}
                                required
                                className="input input-bordered input-sm w-full text-sm"
                            />
                            <input
                                type={`text`}
                                name={`address`}
                                placeholder={`Delivery Address`}
                                required
                                className="input input-bordered input-sm w-full text-sm"
                            />
                            <button
                                type="submit"
                                className="btn bg-green-600 hover:bg-green-700 text-white font-bold uppercase text-xs mt-1"
                            >
                                Confirm Booking
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AnimalDetails;