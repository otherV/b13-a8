import React from 'react';
import Image from 'next/image';
import logoSm from '@/assets/logo.png';

const Footer = () => {
    return (
        <div className='bg-[black] text-base-100 px-20'>
            
                <div className='flex flex-col items-center gap-3 mt-20 mb-4'>
                    <div className="">
                        <Image
                            src={logoSm}
                            alt={`logo`}
                            width={412}
                            height={61}
                        />
                    </div>
                    <p className='text-center'>
                        Premium Cattle. Modern Market.
                        Find Your Perfect Qurbani Sacrifice.
                    </p>

                </div>
                <hr className="border-2 opacity-6 my-10"></hr>
                <div className='text-[#fafafa] flex flex-col md:flex-row justify-between items-center mb-8 gap-10'>
                    <p className=''>© 2026 Qurbani Hat. All rights reserved.</p>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
                        <a className='' href="">Privacy Policy</a>
                        <a className='' href="">Terms of Service</a>
                        <a className='' href="">Cookies</a>
                    </div>
                </div>
            
        </div>
    );
};

export default Footer;