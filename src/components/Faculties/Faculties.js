import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Faculties.css';
const Faculties = () => {
    const teachers = useLoaderData();
    return (
        <div className='flex'>
            <h2>Most Senior Faculty Members</h2>
            {
                teachers.map(teacher => <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={teacher.img} />
                <Card.Body>
                    <Card.Title>Name : {teacher.name}</Card.Title>
                    <Card.Text>
                    {teacher.designation}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            )}
        </div>
    );
};

export default Faculties;