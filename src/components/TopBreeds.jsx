import { LuUsers } from "react-icons/lu";

const breeds = [
    {
        name: "Sahiwal",
        type: "Cow",
        bestFor: "Group",
        note: "Large build, premium meat quality. One of the most sought-after breeds.",
    },
    {
        name: "Brahman",
        type: "Cow",
        bestFor: "Large Group",
        note: "Heaviest available. Ideal for large family or community Qurbani.",
    },
    {
        name: "Black Bengal",
        type: "Goat",
        bestFor: "Individual",
        note: "Most popular local breed. Small, affordable, and widely available.",
    },
    {
        name: "Jamunapari",
        type: "Goat",
        bestFor: "Small Group",
        note: "Large goat breed with high meat yield. Premium choice for Qurbani.",
    },
];

const TopBreeds = () => {
    return (
        <section className="py-16 border-t-2 border-gray-100">
            <h2 className="w-fit text-2xl font-black uppercase text-gray-800 border-b-3 border-green-600 pb-0.5 mb-8">
                Top Breeds
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {breeds.map((breed) => (
                    <div
                        key={breed.name}
                        className={`bg-white border border-gray-200 border-t-3 ${breed.type === "Cow" ? "border-t-green-600" : "border-t-yellow-400"} rounded-xl hover:shadow-sm transition-all`}
                    >

                        <div className="p-5">
                            <span
                                className={`inline-block text-[10px] font-bold uppercase px-2 py-0.5 rounded mb-4 ${breed.type === "Cow"
                                        ? "bg-green-50 text-green-700"
                                        : "bg-yellow-50 text-yellow-800"
                                    }`}
                            >
                                {breed.type}
                            </span>

                            <h3 className="text-sm font-black uppercase text-gray-800 mb-4">
                                {breed.name}
                            </h3>

                            <div className="flex justify-between text-xs mb-4">
                                <span className="text-gray-400 flex items-center gap-1">
                                    <LuUsers size={12} /> Best for
                                </span>
                                <span className="font-bold text-green-600">{breed.bestFor}</span>
                            </div>

                            <p className="text-xs text-gray-500">{breed.note}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TopBreeds;