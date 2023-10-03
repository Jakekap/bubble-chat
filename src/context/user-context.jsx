'use client'
import { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  //const [user, setUser] = useState(null)
  const [openChat, setOpenChat] = useState(false)

  const handleSwitchChat = () => {
    setOpenChat(true)
  }

  return (
    <UserContext.Provider value={{ openChat, handleSwitchChat }}>
      {children}
    </UserContext.Provider>
  )
}
