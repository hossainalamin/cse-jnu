import React, { useContext } from 'react';
import { UserContext } from '../Home/Home';
const Course = () => {
    const user = useContext(UserContext);
    return (
        <div>
            <p>Name : {user}</p>
            <h2>This is course</h2>
        </div>
    );
};

export default Course;