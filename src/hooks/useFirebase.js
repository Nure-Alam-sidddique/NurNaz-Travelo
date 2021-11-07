import {
    getAuth,
    GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import InitilizeAuthentication from "../Firebase/firebase.init";

InitilizeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const signInUsingGoogle = () => {
      return signInWithPopup(auth, googleProvider);
    };
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        })
    }, [])
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        })
    }
    return {
        user,
        logOut,
    signInUsingGoogle,
  };
};
export default useFirebase;
