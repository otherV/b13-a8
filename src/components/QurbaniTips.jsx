import { LuClipboardCheck, LuHeartPulse, LuUsers, LuCalendarDays } from "react-icons/lu";

const QurbaniTips = () => {
    const tips = [
        {
            number: "01",
            icon: <LuClipboardCheck size={28} />,
            title: "Check Age Requirements",
            desc: "Cows must be at least 2 years old. Goats and sheep must be at least 1 year old to be valid for Qurbani."
        },
        {
            number: "02",
            icon: <LuHeartPulse size={28} />,
            title: "Inspect Animal Health",
            desc: "Ensure the animal is free from visible disease, injury, or defects. A healthy animal is a requirement for valid Qurbani."
        },
        {
            number: "03",
            icon: <LuUsers size={28} />,
            title: "Know Your Share",
            desc: "One goat counts for one person. One cow can be shared among up to seven people. Plan your group accordingly."
        },
        {
            number: "04",
            title: "Book Early",
            icon: <LuCalendarDays size={28} />,
            desc: "Premium animals sell out fast before Eid. Place your booking at least 2 weeks in advance to secure your choice."
        }
    ];


    return (
        <section className="py-16 border-t-2 border-gray-100">
            <h2 className="w-fit text-2xl font-black uppercase text-gray-800 border-b-3 border-green-600 pb-0.5 mb-8">
                Qurbani Tips
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {tips.map((tip) => (
                    <div
                        key={tip.number}
                        className="bg-white border border-gray-200 border-t-3 border-t-green-600 rounded-xl p-5 hover:shadow-sm transition-all"
                    >
                        <p className="text-xs font-bold text-green-600 uppercase mb-3">
                            {tip.number}
                        </p>
                        <div className="text-green-600 mb-3">
                            {tip.icon}
                        </div>
                        <p className="text-sm font-black uppercase text-gray-800 mb-2">
                            {tip.title}
                        </p>
                        <p className="text-xs text-gray-500">
                            {tip.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default QurbaniTips;