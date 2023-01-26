import React, { createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Faculties.css';
import Teacher from '../Teacher/Teacher';
import Home from '../Home/Home';
import { Col, Container, Row } from 'react-bootstrap';
const Faculties = () => {
    const teachers = useLoaderData();
    const deptName = createContext('csedu');
    const deptNameToCerculate = 'cse_jnu';
    return (
        <div>
        <h2>Most Senior Faculty Members</h2>
        <Container>
            <Row>
            <deptName.Provider value={deptNameToCerculate}>
                <Home></Home>
            </deptName.Provider>

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