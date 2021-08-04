import React from "react";
import ReactDOM  from "react-dom";
import {Container, Nav, Navbar} from "react-bootstrap";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const LogMenu=()=>{
    return(
        <>
            <Navbar bg="light" expand="md">
                <Container>
                    <Navbar.Brand href="#">Java Foundry</Navbar.Brand>
                    <Navbar.Toggle aria-control="logitems"></Navbar.Toggle>
                    <Navbar.Collapse id="logitems">
                        <Nav className="ms-auto">
                            <Nav.Link href="/" className="me-3 text-dark btn btn-outline-primary">
                                Home
                            </Nav.Link>
                            <Nav.Link href="#" className="me-3 text-dark btn btn-outline-primary">
                                InTake
                            </Nav.Link>
                            <Nav.Link href="#" className="me-3 text-dark btn btn-outline-primary">
                                List
                            </Nav.Link>
                            <Nav.Link href="#" className="me-3 text-dark btn btn-outline-primary">
                                Deliver
                            </Nav.Link>
                            <Nav.Link href="#" className="me-3 text-dark btn btn-outline-primary">
                                ContactUS
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default LogMenu;