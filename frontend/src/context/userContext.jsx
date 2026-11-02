import React, { createContext, useState } from 'react'

export const UserDataContext = createContext()

const userContext = ({ children }) => {
    const  [user, setUser] = useState({
        fullname: {
            firstname: "",
            lastname: ""
        },
        email:""
    })
    0.
    return (
        <div>
            <UserDataContext.Provider value={{user, setUser}}>
                 {children}
            </UserDataContext.Provider>
           
        </div>
    )
}

export default userContext