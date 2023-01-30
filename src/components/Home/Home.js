import React, { createContext} from 'react';
import About from '../About/About';
export const UserContext = createContext();
const Home = () => {
    return (
        <UserContext.Provider value="Rokib">
            <About></About>
        </UserContext.Provider>
    );
};

export default Home;