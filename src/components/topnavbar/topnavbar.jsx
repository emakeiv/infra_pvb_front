import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Row,
  Col,
} from "react-bootstrap";

import ModalComponent from "../modal/modal";

function TopNavbar() {
  return (
    <Navbar bg="light" className="mb-4 shadow-sm" sticky="top">
      <Container fluid>
        {/* Brand Name */}
        <Navbar.Brand>
          <Form>
            <Row>
              <Col xs="auto">
                <Form.Control
                  size="lg"
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
          <ModalComponent/>
          </Nav.Link>

          {/* User Icon with Dropdown */}
          <NavDropdown
            title={<i className="bi bi-person-circle fs-4"></i>}
            id="user-dropdown"
            align="end"
          >
            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            <NavDropdown.Item href="/login">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
