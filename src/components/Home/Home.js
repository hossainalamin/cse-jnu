import React, { createContext, useState} from 'react';
import About from '../About/About';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';
const auth = getAuth(app);
export const UserContext = createContext();
const Home = () => {
    const [user, setUser] = useState({});
    const provider  = new GoogleAuthProvider();
    const handleGoogleSignIn = ()=>{
        signInWithPopup(auth, provider)
        .then(result =>{
            setUser(result.user);
        })
        .catch(error =>{
            console.log('Error : '+error);
        })
    }
    const handleGoogleSignOut = ()=> 
    {
        signOut(auth).then(()=>{
            setUser({});
        })
        .catch(()=>{
            setUser({});
        })
    }
    return (
        <div>
        <UserContext.Provider value="Rokib">
            <About></About>
        </UserContext.Provider>
        <hr></hr>
        {user.email && <div>
            <h3>User Name: {user.displayName}</h3>
            <p>User Email: {user.email}</p>
        </div>
        }
        {user.email ? 
            <button onClick={handleGoogleSignOut}>Sign Out</button>
            :
            <button onClick={handleGoogleSignIn}>Sign In</button>
        }
        
        </div>
    );
};

export default Home;