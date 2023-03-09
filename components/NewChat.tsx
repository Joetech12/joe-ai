'use client';
import { PlusIcon } from '@heroicons/react/24/outline';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { db } from '../firebase';




const NewChat = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, 'users', session?.user?.email!, 'chats'),
      {
        userId: session?.user?.email!,
        createdAt: serverTimestamp(),
      }
    );

    router.push(`/chat/${doc.id}`);
  };

  return (
    <div onClick={createNewChat} className="border-gray-700 border-[2px] md:border-[1px] px-[80px] md:px-[40px] py-[20px] md:py-[10px] chatRow">
      <PlusIcon className="h-6 md:h-4 w-6 md:w-4" />
      <p className='text-center text-[18px] md:text-[16px]'>New Chat</p>
    </div>
  );
};

export default NewChat;
