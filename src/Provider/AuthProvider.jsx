import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.init';



export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const provider = new GoogleAuthProvider();

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

    // Login
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Sign In with Google

    const googleLogin = () => {
        return signInWithPopup(auth, provider)
    }


    // handleLogOut

    const logOut = () => {
        return signOut(auth);
    }

    const userData = {
        user,
        setUser,
        SignUpUser,
        login,
        googleLogin,
        logOut,
    }


    return <AuthContext value={userData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;