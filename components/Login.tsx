'use client'

import Image from 'next/image';
import { signIn } from 'next-auth/react';

const Login = () => {
  return (
    <div className="bg-black/90 h-screen flex flex-col items-center justify-center text-center">
      <div className="animate-pulse">
        <Image src="/joetech_logo.svg" width={200} height={200} alt="Logo" />
      </div>
      <button
        onClick={() => signIn('google')}
        className="text-gray-100 mt-[40px] font-bold text-[18px] border rounded-[3000px] py-[10px] px-[20px] hover:text-gray-100/60"
      >
        Sign in to use JoeAI
      </button>
    </div>
  );
};

export default Login;
