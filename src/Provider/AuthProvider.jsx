import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.init';



export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    console.log(user);

    // Signup user
    const SignUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // state observer and get user data
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    // handleLogOut

    const logOut = () => {
        return signOut(auth);
    }

    const userData = {
        user,
        setUser,
        SignUpUser,
        logOut,
    }


    return <AuthContext value={userData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;