'use client'
import Image from 'next/image';

const Logo = () => {
  return (
    <Image
      alt='logo'
      className='hidden md:block cursor-pointer'
      src='/images/logo-size.png'
      height='100'
      width='100'
    />
  );
};

export default Logo;
Image;
