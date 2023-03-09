'use client';
import React from 'react';
import {
  ArrowLeftOnRectangleIcon,
  BoltIcon,
  ExclamationTriangleIcon,
  HomeIcon,
  SunIcon,
} from '@heroicons/react/24/outline';
import NewChat from '../components/NewChat';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

function HomePage() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen overflow-y-auto px-2 text-white">
        <h1 className="text-5xl font-bold mb-20">
          JoeAI <span className="text-[20px]">v.1.0</span>
        </h1>
        <div className="hidden lg:flex lg:flex-row lg:space-x-2 text-center">
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <SunIcon className="h-8 w-8" />
              <h2 className="">Examples</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">"Explain Something to me"</p>
              <p className="infoText">
                "What is the difference between a dog and a cat"
              </p>
              <p className="infoText">"What is the color of the sun?"</p>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col items-center justify-center mb-5">
              <BoltIcon className="h-8 w-8" />
              <h2 className="">Capabilities</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">Change the JoeAI Model to use</p>
              <p className="infoText">
                Messages are stored in Firebase's Firestore
              </p>
              <p className="infoText">
                Hot Toast notification when JoeAI is thinking!
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col items-center justify-center mb-5">
              <ExclamationTriangleIcon className="h-8 w-8" />
              <h2 className="">Limitations</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">
                May occassionally generate incorrect information
              </p>
              <p className="infoText">
                May occasionally produce harmful instructions or biased content
              </p>
              <p className="infoText">Limited knowledge of world after 2021</p>
            </div>
          </div>
        </div>
        <div className="lg:hidden mb-20 text-center">
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8" />
            <h2 className="">AI Search Engine</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"Make advanced and precise search"</p>
            <p className="infoText">
              "NB: For best mobile experience, set Phone to landscape view"
            </p>
          </div>
        </div>
        <div className="lg:hidden ">
          <NewChat />
        </div>
        <p className="flex justify-center mt-[50px] text-[14px] text-gray-400">
          Developed by Ifeanyi Umeh © 2023
        </p>
      </div>

      <div className="flex flex-col fixed z-50 top-[60%] right-0 text-white md:hidden">
        <div
          onClick={() => signOut()}
          className="p-[10px] flex items-center duration-300 bg-black/60 border-b-[1px] border-gray-600"
        >
          <ArrowLeftOnRectangleIcon className="h-7 w-7 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
