import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Faculty = () => {
    const faculty = useLoaderData();
    return (
        <div>
            {faculty.name}
        </div>
    );
};

export default Faculty;