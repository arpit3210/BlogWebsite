import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import arpitweb3 from "../assets/Images/arpitweb3.png";

const Header = () => {
    return (
        <header className='flex items-center justify-between space-x-2 font-bold px-18 py-5'>
            <div className='flex items-center pl-5  text-white space-x-2'>
                <Link href="/">
                    <Image src={arpitweb3} className='rounded-full object-cover' alt="arpitweb3" height={50} priority /> {/* Added priority */}
                    {/* <button>button</button> */}
                </Link>
            </div>



            <div>

                <div>
                    <button className='py-3 px-5 text-blue-600  border border-spacing-1  md:mr-6  mx-4 rounded-3xl hover:bg-blue-600 ring-1  hover:text-white  '> Login</button>
                </div>

            </div>



        </header>
    );
};

export default Header;
