'use client'

import Image from "next/image";


const Avatar = () => {
    return ( 
        <Image 
        src='/images/avatar.png'
        alt="User profile"
        height='30'
        width='30'
        className="rounded-full"
        />
     );
}
 
export default Avatar;