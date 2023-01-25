import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Faculties.css';
import Teacher from '../Teacher/Teacher';
import { Col, Container, Row } from 'react-bootstrap';
const Faculties = () => {
    const teachers = useLoaderData();
 
    return (
        <div>
        <h2>Most Senior Faculty Members</h2>
        <Container>
            <Row>
                {
                    teachers.map(teacher => <Col md={4}>{
                        <Teacher key={teacher.id} teacher = {teacher}></Teacher>
                    }</Col>)
                }
            </Row>
        </Container>
        </div>
    );
};

export default Faculties;