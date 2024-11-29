import React from 'react';
import { 
    Navbar, 
    Container, 
    Nav, 
    NavDropdown, 
    Badge, 
    Button, 
    Form, 
    Row,
    Col
} from 'react-bootstrap';

function TopNavbar(){
    return (
        <Navbar bg="light" className="mb-4 shadow-sm" sticky="top" >
            <Container fluid>
                {/* Brand Name */}
                <Navbar.Brand> 
                    <Form>
                        <Row>
                            <Col xs="auto">
                                <Form.Control
                                type="text"
                                placeholder="⌕"
                                className=" mr-sm-2"
                                />
                            </Col>
                        </Row>
                    </Form>
                </Navbar.Brand>
                
                {/* Right Icons */}
                <Nav className="ms-auto d-flex align-items-center">
                    {/* Notifications Icon */}
                    <Nav.Link href="#notifications">
                        <Button variant="primary">
                            Notifications <Badge bg="secondary">9</Badge>
                            <span className="visually-hidden">unread messages</span>
                        </Button>
                    </Nav.Link>
                    
                    {/* User Icon with Dropdown */}
                    <NavDropdown
                        title={<i className="bi bi-person-circle fs-4"></i>}
                        id="user-dropdown"
                        align="end"
                    >
                        <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
                        <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
                    </NavDropdown>

                    
                </Nav>
            </Container>
        </Navbar>
    );
};

export default TopNavbar;