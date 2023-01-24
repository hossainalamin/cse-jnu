import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Teacher.css';
import { Link } from 'react-router-dom';
const Teacher = ({teacher}) => {
    return (
        <div >
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={teacher.img} />
            <Card.Body>
                <Card.Title>Name : {teacher.name}</Card.Title>
                <Card.Text>
                Designation : {teacher.designation}
                </Card.Text>
                <Link to={`faculty/${teacher.id}`}><Button variant="primary">Detail</Button></Link>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Teacher;