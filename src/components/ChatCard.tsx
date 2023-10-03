'use client'
import Image from 'next/image'
import { useContext } from 'react'
import { UserContext } from '../context/user-context'
export default function ChatCard() {
  const { handleSwitchChat } = useContext(UserContext)

  return (
    <div
      onClick={handleSwitchChat}
      id="userCard"
      className="flex p-5 hover:bg-gray-border cursor-pointer"
    >
      <div id="userStatus" className="relative ">
        <Image
          className="rounded-full w-20 h-20"
          width={100}
          height={100}
          src="/dinos.jpg"
          alt="coso"
        />
        <div className="absolute bottom-0 right-0 h-6 w-6 bg-green rounded-full"></div>
      </div>
      <div className="flex flex-col justify-center ml-8">
        <p className="text-black font-bold">Christian Andrade</p>
        <p>Te estamos esperando</p>
      </div>
    </div>
  )
}
