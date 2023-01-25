import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Faculty = () => {
    const faculty = useLoaderData();
    const url = (window.location.href);
    // setView(1);
    return (
        <div>
            {faculty.name}
        </div>
    );
};

export default Faculty;