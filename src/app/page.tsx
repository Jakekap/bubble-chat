import ChatBody from '@/components/ChatBody'
import { UserProvider } from '@/context/user-context'

export default function Home() {
  return (
    <main className="flex items-center min-h-screen">
      <div className="sm:hidden relative z-30 h-screen bg-dark-blue w-[15%]"></div>
      <UserProvider>
        <ChatBody />
      </UserProvider>
      <div className="sm:hidden relative z-30 h-screen bg-dark-blue w-[15%]"></div>
    </main>
  )
}
