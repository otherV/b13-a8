import Link from "next/link";
import Image from "next/image";
import animalDB from "@/utils/animalDB";

const FeaturedAnimals = async () => {
    const animals = await animalDB.queryAll();
    const featured = animals.slice(0, 4);

    return (
        <section className="py-16">

            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="w-fit text-2xl font-black uppercase text-gray-800 border-b-3 border-green-600 pb-0.5">
                        Featured Animals
                    </h2>

                </div>
                <Link
                    href="/animals"
                    className="w-fit text-xs font-bold uppercase text-green-600 border-b-2 border-green-600 pb-0.5"
                >
                    View All →
                </Link>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {featured.map((animal, index) => (
                    <div key={animal.id} className="animate__animated animate__fadeInUp card w-full bg-base-100 border border-gray-100 rounded-xl hover:border-green-200 hover:shadow-sm transition-all">
                        <figure className="relative h-48 w-full overflow-hidden">
                            <Image
                                src={animal.image}
                                alt={animal.name}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                className="object-cover"
                                priority={index === 0}
                            />
                        </figure>
                        <div className="card-body">
                            <span className={`w-fit text-[10px] font-bold uppercase px-2 py-0.5 rounded mb-3 ${animal.type === "Cow" ? "bg-green-50 text-green-700" : "bg-yellow-50 text-yellow-800"
                                }`}>
                                {animal.type}
                            </span>
                            <h2 className="card-title font-black text-sm uppercase text-gray-800 mb-1">
                                {animal.name}
                            </h2>
                            <p className="text-xs text-gray-400 mb-3">
                                {animal.breed} · {animal.location}
                            </p>
                            <p className="text-base font-bold text-green-600 mb-3">
                                ৳{animal.price.toLocaleString()}
                            </p>
                            <div className="card-actions justify-center">
                                <Link
                                    href={`/details-page/${animal.id}`}
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

export default FeaturedAnimals;