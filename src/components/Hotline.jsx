import { LuPhone } from "react-icons/lu";

const Hotline = () => {
    return (
        <section className="py-16 border-t-2 border-gray-100 text-center">
            <h2 className="text-2xl font-black uppercase text-gray-800 mb-6">
                Hotline
            </h2>
            <div className="flex items-center justify-center gap-2 mb-6">
                <div className="bg-green-600 text-white rounded-full p-2 animate__animated animate__swing animate__infinite">
                    <LuPhone size={16} />
                </div>
                <span className="text-lg font-bold text-gray-700">
                    XXXXX-XXX-XXX
                </span>
            </div>
            <p className="text-lg text-gray-400 uppercase">
                Everyday 10 AM – 10 PM
            </p>
        </section>
    );
};

export default Hotline;