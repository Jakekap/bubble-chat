'use client'
import Image from 'next/image'
import ChatCard from './ChatCard'
import MessageBox from './MessageBox'
import ChatBox from './ChatBox'
import { useState } from 'react'
import EditSidebar from './EditSidebar'
import { useContext, useEffect } from 'react'
import { UserContext } from '../context/user-context'

export default function ChatBody() {
  const [showSidebar, setShowSidebar] = useState(false)
  const { openChat, handleSwitchChat } = useContext(UserContext)
  const [anchoDeVentana, setAnchoDeVentana] = useState(0)
  // const anchoDeVentana = window.innerWidth

  useEffect(() => {
    const anchoDeVentana = window.innerWidth
    console.log(anchoDeVentana)
    setAnchoDeVentana(anchoDeVentana)
  }, [])

  return (
    <section className="bg-white w-[70vw] h-[90vh] sm:h-screen sm:w-screen rounded-lg sm:rounded-none sm:overflow-x-hidden">
      <section
        id="top-buttons"
        className="sm:hidden flex items-center pl-5 gap-2 border-b-2 h-[7%] border-gray-border"
      >
        <button className="h-5 w-5 bg-red rounded-full"></button>
        <button className="h-5 w-5 bg-yellow rounded-full"></button>
        <button className="h-5 w-5 bg-green-light rounded-full"></button>
      </section>
      <section className="flex h-[93%] sm:h-full relative">
        <EditSidebar
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
        <div
          id="leftPanel"
          className="flex flex-col border-r-2 min-w-[350px] border-gray-border w-1/3 sm:w-full"
        >
          <div className="flex px-5 py-5 gap-5 bg-gray-light border-b-2 border-gray-border sm:sticky sm:z-40">
            <button
              onClick={handleSwitchChat}
              className={`sm:flex hidden justify-center items-center cursor-pointer ${
                openChat ? '' : 'sm:hidden'
              }`}
            >
              <Image width={20} height={20} src={'/arrow.svg'} alt="arrow" />
            </button>
            <button
              onClick={() => setShowSidebar(true)}
              className={`flex ${
                openChat ? 'sm:hidden' : ''
              } justify-center items-center cursor-pointer`}
            >
              <Image width={20} height={20} src={'/menu_icon.svg'} alt="menu" />
            </button>
            <div className="flex grow-[3] justify-center gap-3">
              <Image
                width={20}
                height={20}
                src={'/search_icon.svg'}
                alt="search"
              />
              <input
                className="transition-width ease-out duration-150 text-gray w-14 hover:cursor-pointer focus:cursor-text focus:w-[60%] bg-transparent outline-none"
                placeholder="Search"
              />
            </div>
            {openChat && (
              <>
                <button className="sm:flex hidden -scale-y-100 rotate-180 justify-center items-center cursor-pointer">
                  <Image
                    width={20}
                    height={20}
                    src={'/gray-webcam.svg'}
                    alt="cam"
                  />
                </button>
                <button
                  onClick={() => setShowSidebar(true)}
                  className="sm:flex hidden -scale-y-100 rotate-180 justify-center items-center cursor-pointer"
                >
                  <Image
                    width={20}
                    height={20}
                    src={'/menu_icon.svg'}
                    alt="menu"
                  />
                </button>
              </>
            )}
          </div>
          <div
            id="userCardsContainer"
            className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray scrollbar-track-white"
          >
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
          </div>
        </div>
        {(anchoDeVentana <= 390 || openChat) && (
          <div
            id="rightPanel"
            className={`w-full flex flex-col sm:bg-white h-full sm:absolute ease-in-out duration-300 ${
              openChat ? 'sm:right-0' : 'sm:-right-full'
            } `}
          >
            <ChatBox />
            <MessageBox />
          </div>
        )}
        {anchoDeVentana > 390 && !openChat && (
          <div
            className={`flex w-full gap-20 items-center justify-center flex-col sm:bg-white h-full sm:absolute ease-in-out duration-300 ${
              openChat ? 'sm:right-0 ' : 'sm:-right-full'
            } `}
          >
            <div className="flex flex-col gap-10 justify-center items-center">
              <Image
                width={200}
                height={200}
                src={'/logo.svg'}
                alt="bubblechat logo"
              />
              <p className="font-normal text-gray text-2xl">
                BubbleChat, tu chat para la Web
              </p>
            </div>
            <Image
              className=""
              width={300}
              height={300}
              src={'/male.svg'}
              alt="male with a phone"
            />
          </div>
        )}
      </section>
    </section>
  )
}
