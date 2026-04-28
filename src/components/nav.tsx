'use client';

import Image from "next/image";

const Nav = () => {
    return(
        <nav className="w-full py-2 px-3 md:px-10 border-b border-gray-600 bg-neutral-950">
           <Image
            src="/logo.svg"
            alt="Your Company Name"
            width={200}
            height={36}
            priority
            style={{ width: "clamp(160px, 20vw, 200px)", height: "auto" }}
            />
        </nav>
    )
}

export default Nav