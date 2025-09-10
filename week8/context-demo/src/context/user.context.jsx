// importing the context from react
import React from "react";
import { createContext, useState } from "react";

export const UserContext = createContext(
    {
    currentUser: null,
    setCurrentUser: () => null
    }
)

export const UserProvider = () => {

    const [ currentUser, setCurrentUser ] = useState(null);
    const value = {currentUser, setCurrentUser}

    return <UserContext.Provider value={value}>
        {Children}
    </UserContext.Provider>
}