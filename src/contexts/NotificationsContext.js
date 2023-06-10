import React from 'react'
import { createContext, useState } from 'react'

export const NotificationsContext = createContext()

const NotificationsContextProvider = (props) => {

    const [notification, setNotification] = useState('')
  return (
    <NotificationsContext.Provider value={{notification, setNotification}}>
        {props.children}
    </NotificationsContext.Provider>
  )
}

export default NotificationsContextProvider