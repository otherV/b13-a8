import Link from "next/link";
import Image from "next/image";
import farm from '@/assets/farm.jpeg';

const Banner = () => {
    return (
        <div className="relative w-full min-h-90 overflow-hidden">

            <Image
                src={farm}
                alt={`farm`}
                fill
                sizes="100vw"
                className="object-cover object-center opacity-55"
                priority
            />

            <div className="absolute inset-0 shadowOverlay" />
            <div className="container mx-auto max-w-7/10 my-20">
                <div className="relative z-10 flex items-center justify-between flex-wrap gap-8 px-0 py-14 min-h-90">
                    <div>
                        <p className="text-xs text-white/60 uppercase mb-2">
                            Livestock Marketplace
                        </p>
                        <h1 className="text-6xl font-black text-white uppercase mb-3 animate__animated animate__fadeInLeft">
                            QurbaniHat
                        </h1>
                        <p className="text-base text-white/75 uppercase">
                            Premium Cattle. Modern Market. <br />
                            Find Your Perfect Qurbani Sacrifice.
                        </p>
                    </div>


                    <Link
                        href="/animals"
                        className="animate__animated animate__fadeInRight bg-green-600 hover:bg-green-700 text-white font-bold text-sm uppercase px-8 py-5 rounded text-center hover:border-green-200 hover:shadow-sm transition-all"
                    >
                        Browse <br /> Livestock
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Banner;