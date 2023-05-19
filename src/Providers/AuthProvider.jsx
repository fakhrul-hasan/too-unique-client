import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth, provider);
    }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>unsubscribe;
    },[])
    const authInfo = {
        createUser,
        signIn,
        googleSignIn,
        user,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;