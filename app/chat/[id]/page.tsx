import {
  ArrowLeftOnRectangleIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Chat from '../../../components/Chat';
import ChatInput from '../../../components/ChatInput';

type Props = {
  params: {
    id: string;
  };
};

const ChatPage = ({ params: { id } }: Props) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Chat chatId={id} />
      <ChatInput chatId={id} />
      <div className="flex flex-col fixed z-50 top-[60%] right-0 text-white md:hidden">
        <Link href="/">
          <div className="p-[10px] flex items-center duration-300 bg-black/60 border-b-[1px] border-gray-600 mb-[10px]">
            <HomeIcon className="h-7 w-7 cursor-pointer" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ChatPage;
