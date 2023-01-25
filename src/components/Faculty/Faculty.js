import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Faculty = () => {
    const faculty = useLoaderData();
    const [view, setView] = useState(0)
    const url = (window.location.href);
    // setView(1);
    return (
        <div>
            <p>Profile View : {view}</p>
            {faculty.name}
        </div>
    );
};

export default Faculty;