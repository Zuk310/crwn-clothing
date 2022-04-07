import { signOut } from "firebase/auth";
import { createContext, useState, useEffect } from "react";

import { createUserDocumentFromAuth, onAuthStateChangeLister, signOutUser } from "../utils/firebase/firebase.utils";

// actual value we want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

export const UserProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser}

    // signOutUser();

    useEffect(()=>{
        const unsubscribe = onAuthStateChangeLister((user)=>{
           if(user){
               createUserDocumentFromAuth(user);
           }
            setCurrentUser(user);
        });

        return unsubscribe;
    })
    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}