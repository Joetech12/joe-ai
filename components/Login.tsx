'use client';

import Image from 'next/image';
import { signIn } from 'next-auth/react';

const Login = () => {
  return (
    <div className="bg-black/90 h-screen flex flex-col items-center justify-center text-center">
      <div
        onClick={() => signIn('google')}
        className="animate-pulse cursor-pointer"
      >
        <Image src="/joetech_logo.svg" width={200} height={200} alt="Logo" />
      </div>
      <div className="text-gray-100 mt-[40px]">
        <p className="text-[30px] lg:text-[18px]">Click logo to Sign In</p>
      </div>
    </div>
  );
};

export default Login;
