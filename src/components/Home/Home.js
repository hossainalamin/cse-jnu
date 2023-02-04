import React, { createContext} from 'react';
import About from '../About/About';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.init';
const auth = getAuth(app);
export const UserContext = createContext();
const Home = () => {
    const provider  = new GoogleAuthProvider();
    const handleGoogleSignIn = ()=>{
        signInWithPopup(auth, provider)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log('Error : '+error);
        })
    }
    return (
        <div>
        <UserContext.Provider value="Rokib">
            <About></About>
        </UserContext.Provider>
        <button onClick={handleGoogleSignIn}>Google Sign In</button>
        </div>
    );
};

export default Home;