'use client';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';
import { collection, orderBy, query } from 'firebase/firestore';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import ChatRow from './ChatRow';
import ModelSelection from './ModelSelection';
import NewChat from './NewChat';

function SideBar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, 'users', session.user?.email!, 'chats'),
        orderBy('createdAt', 'asc')
      )
  );

  return (
    <div className="py-2 px-[10px] md:px-[20px] flex flex-col md:h-screen md:min-w-[20rem]">
      <div className="flex-1">
        <div>
          {/* New chat */}
          <NewChat />
          <div className="hidden sm:inline">
            <ModelSelection />
          </div>

          <div className="flex flex-col space-y-2 my-2">
            {loading && (
              <div className="animate-pulse text-center text-white mt-[20px]">
                <p className="text-[14px]">Loading Chats...</p>
              </div>
            )}

            {/* Map through the chat rows */}
            {chats?.docs.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
      </div>

      {session && (
        <div className="text-white flex flex-col justify-center items-center mb-[20px]">
          <Link href="/">
            <img
              src={session.user?.image!}
              alt="profile_pic"
              className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
            />
          </Link>
          <div className="flex items-center space-x-[5px] hover:opacity-50 cursor-pointer">
            <p onClick={() => signOut()} className="">
              Sign Out
            </p>
            <ArrowLeftOnRectangleIcon className="h-5 w-5" />
          </div>
        </div>
      )}
    </div>
  );
}

export default SideBar;
