'use client';

import Image from "next/image";

const Nav = () => {
    return(
        <nav className="w-full py-2 px-10 border-b border-gray-600">
            <Image
                src="/logo.svg"
                alt="Your Company Name"
                width={200}
                height={36}
                priority 
             />
        </nav>
    )
}

export default Nav