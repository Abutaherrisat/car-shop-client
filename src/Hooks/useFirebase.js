import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile, getIdToken } from "firebase/auth";
import initializedAuthentication from "../Pages/Login/Login/Firebase/firebase.init"

initializedAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [admin, setAdmin] = useState(false)
    const auth = getAuth()
    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)

            .then(result => {
                setError('')
                const newUser = { email, displayName: name };
                setUser(newUser)
                saveUser(email, name)
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {
                });
                history.replace('/')

            })
            .catch(error => {
                setError(error.message)
            })

            .finally(() => setIsLoading(false))
    }
    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const destination = location?.state?.from || '/'
                history.replace(destination)
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))

    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed

    }, [])
    useEffect(() => {
        fetch(`https://frozen-coast-33750.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))

    }, [user.email])
    const logout = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
        })
            .catch((error) => {

            })
            .finally(() => setIsLoading(false))
    }
    const saveUser = (email, displayName) => {
        const user = { email, displayName }
        fetch('https://frozen-coast-33750.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()

    }


    return {
        user, error,
        loginUser,
        registerUser,
        isLoading,
        logout,
        admin

    }

}
export default useFirebase