import { useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, FacebookAuthProvider, onAuthStateChanged, signOut, updateProfile } from "firebase/auth"

import { useEffect } from "react";
import PropTypes from 'prop-types'
import Auth from "../../../firebase/firebase.init";




export const AoutContext = createContext(null);
const AuothProvider = ({ children }) => {
    const [user, setuser] = useState(null)
    const [update, setUpdate] = useState(true)
    const GoogleProvaider = new GoogleAuthProvider()
    const GithubProvaider = new GithubAuthProvider()
    const FacebookProvaider = new FacebookAuthProvider()
    const [loading, setLoading] = useState(true)

    const Registeruser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(Auth, email, password)
    }
    const updethuserProfile = (name, image) => {
        setLoading(true)
        return updateProfile(Auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }
    const Loginuser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(Auth, email, password)

    }
    const GoogleLogin = () => {
        setLoading(true)
        return signInWithPopup(Auth, GoogleProvaider)
    }
    const GithubLogin = () => {
        setLoading(true)
        return signInWithPopup(Auth, GithubProvaider)
    }
    const FacebookLogin = () => {
        setLoading(true)
        return signInWithPopup(Auth, FacebookProvaider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(Auth)
    }
    const Authinfo = {
        Registeruser,
        Loginuser,
        user,
        logOut,
        GoogleLogin,
        GithubLogin,
        FacebookLogin,
        updethuserProfile,
        loading,
        setUpdate,
        update

    }
    useEffect(() => {
        const unsupscribe = onAuthStateChanged(Auth, (Currenuser) => {
                setuser(Currenuser)
                setLoading(false)
        });
        return () => {
            unsupscribe()
        }
    }, [update])

    return (
        <div>
            <AoutContext.Provider value={Authinfo}>
                {children}
            </AoutContext.Provider>

        </div>
    );
};

AuothProvider.propTypes = {
    children: PropTypes.node
}

export default AuothProvider;