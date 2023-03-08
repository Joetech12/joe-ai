'use client';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';
import { collection, orderBy, query } from 'firebase/firestore';
import { signOut, useSession } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import ChatRow from './ChatRow';
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
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* New chat */}
          <NewChat />
          <div>{/* Model selection */}</div>

          {/* Map through the chat rows */}
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>

      {session && (
        <div className="text-white flex flex-col justify-center items-center mb-[20px]">
          <img
            src={session.user?.image!}
            alt="profile_pic"
            className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
          />
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
