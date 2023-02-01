import React, { createContext} from 'react';
import About from '../About/About';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import app from '../../firebase/firebase.init';
const auth = getAuth(app);
export const UserContext = createContext();
const Home = () => {
const provider  = new GoogleAuthProvider();
    return (
        <UserContext.Provider value="Rokib">
            <About></About>
        </UserContext.Provider>
    );
};

export default Home;