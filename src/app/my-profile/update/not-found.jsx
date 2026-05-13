import Link from "next/link";


const NotFound = () => {
    return (
        <div className="flex-1 flex justify-center items-center">
            <div className="text-center space-y-5">
                <p className="animate__animated animate__bounceIn text-8xl">🐄</p>
                <h1 className="animate__animated animate__fadeInUp animate__delay-1s text-5xl font-black uppercase">
                    404
                </h1>
                <p className="animate__animated animate__fadeInUp animate__delay-1s text-gray-400 uppercasetext-sm">
                    This page wandered off the farm
                </p>
                <Link href="/login" className="bg-green-600 hover:bg-green-700 text-white font-bold uppercase text-sm px-6 py-3 rounded-lg transition-colors">
                    Login
                </Link>
            </div>
        </div>
    );
};

export default NotFound;