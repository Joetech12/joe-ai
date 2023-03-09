import { SessionProvider } from '../components/SessionProvider';
import SideBar from '../components/SideBar';
import { getServerSession } from 'next-auth';
import { authOptions } from '../pages/api/auth/[...nextauth]';
import '../styles/globals.css';
import Login from '../components/Login';
import ClientProvider from '../components/ClientProvider';

export const metadata = {
  title: 'JoeAI',
  description: 'AI-Powered Search Engine',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              <div className="bg-[#0d0e15] max-w-xs h-screen overflow-y-auto md:min-w-[20rem] scrollbar-track-black/60 scrollbar-thumb-red-700/60 scrollbar-thin">
                <SideBar />
              </div>

              <ClientProvider />

              <div className="bg-[#343541] flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
