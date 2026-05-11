"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const AnimalsList = ({ animalsArray }) => {
    const [sortQ, setSortQ] = useState("");
    const sortedAnimalsArray = (sortQ === ("asc" || "desc"))
        ? [...animalsArray]
            .sort((a, b) => sortQ === "asc" ? a.price - b.price : b.price - a.price)
        : animalsArray;

    return (
        <section className="container mx-auto max-w-7/10 py-16 flex flex-col">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-2xl font-black uppercase text-gray-800 border-b-3 border-green-600 pb-0.5">
                        Featured Animals
                    </h2>

                </div>
                <div>

                    <select
                        className="select select-accent select-md text-xs font-bold uppercase"
                        defaultValue="Sort by Price"
                        onChange={(e) => setSortQ(e.target.value)}
                    >
                        <option disabled={true}>Sort by Price</option>
                        <option value="asc">Price: Low to High</option>
                        <option value="desc">Price: High to Low</option>
                    </select>

                </div>
            </div>
            <div className="flex-1 grid grid-cols-4 gap-5">
                {sortedAnimalsArray.map((animal) => (
                    <div key={animal.id} className="animate__animated animate__fadeInUp card w-full bg-base-100 border border-gray-100 rounded-xl hover:border-green-200 hover:shadow-sm transition-all">
                        <figure className="relative h-48 w-full">
                            <Image
                                src={animal.image}
                                alt={animal.name}
                                fill
                                sizes={384}
                                className="object-cover"
                            />
                        </figure>
                        <div className="card-body">
                            <span
                                className={`w-fit text-[10px] font-bold uppercase px-2 py-0.5 rounded mb-3 ${animal.type === "Cow"
                                    ? "bg-green-50 text-green-700"
                                    : "bg-yellow-50 text-yellow-800"
                                    }`}
                            >
                                {animal.type}
                            </span>
                            <h2 className="card-title font-black text-sm uppercase text-gray-800 mb-1">
                                {animal.name}
                            </h2>

                            {/* Moved Outside of <p>, as Inline Comments Give Hydration Errors */}
                            {/* {animal.breed} · {animal.weight}kg · {animal.location} */}
                            <p className="text-xs text-gray-400 mb-3">
                                {animal.breed} · {animal.location}
                            </p>


                            {/* <p className="text-base font-bold text-green-600 mb-3">
                                ৳{animal.price.toLocaleString()}
                            </p> */}
                            <div className="card-actions justify-center">
                                <Link
                                    href={`/animals/${animal.id}`}
                                    className="block w-full text-center bg-green-600 hover:bg-green-700 text-white text-[11px] font-bold uppercase py-2 rounded-lg transition-colors"
                                >
                                    See Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AnimalsList;