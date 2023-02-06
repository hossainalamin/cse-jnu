import React, { createContext, useState} from 'react';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';
import LoginFrom from '../LoginFrom/LoginFrom';
const auth = getAuth(app);
export const UserContext = createContext();
const Home = () => {
    const [user, setUser] = useState({});
    const provider  = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    const handleGoogleSignIn = ()=>{
        signInWithPopup(auth, provider)
        .then(result =>{
            setUser(result.user);
        })
        .catch(error =>{
            console.log('Error : '+error);
        })
    }
    const handleGitSignIn = ()=>{
        signInWithPopup(auth, gitProvider)
        .then((result)=>{
            setUser(result.user)
        })
        .catch((error)=>{
            console.log('error', error);
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
        {user.uid && <div>
            <h3>User Name: {user.displayName}</h3>
            <p>User Email: {user.email}</p>
            <img src = {user.photoURL} alt=""></img>
        </div>
        }
        {user.uid ? 
            <button onClick={handleGoogleSignOut}>Sign Out</button>
            :
            <div className = "mx-auto w-50">
            <LoginFrom></LoginFrom>
            <br></br>
            <button onClick={handleGoogleSignIn}>Google Sign In</button>
            <button onClick={handleGitSignIn}>Github Sign In</button>
            </div>
        }
        
        </div>
    );
};

export default Home;