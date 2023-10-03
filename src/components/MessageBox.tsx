import ActionButton from './ActionButton'
import { useContext } from 'react'
import { UserContext } from '@/context/user-context'

export default function MessageBox() {
  const { openChat } = useContext(UserContext)
  return (
    <div className="flex sm:fixed sm:bottom-0 sm:z-40 bg-white justify-center items-center gap-5 w-full border-t-2 border-gray-border text-gray p-2 h-20">
      <textarea
        className="w-full resize-none outline-none text-black"
        placeholder="Mensaje"
      />
      <div className="flex gap-5">
        <ActionButton bgColor="bg-green" iconPath="/micro.svg" />
        <ActionButton bgColor="bg-blue" iconPath="/clip.svg" />
        <ActionButton bgColor="bg-orange" iconPath="/smile.svg" />
        <ActionButton
          hidde={openChat}
          bgColor="bg-purple"
          iconPath="/webcam.svg"
        />
      </div>
    </div>
  )
}
