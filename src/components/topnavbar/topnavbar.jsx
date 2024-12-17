import React from "react";
import { Navbar, Container, Nav, NavDropdown, Form } from "react-bootstrap";

import ModalComponent from "../modal/modal";

export default function TopNavbar({ data }) {
  return (
    <Navbar
      bg="light"
      className="mb-4 shadow-sm bg-body-tertiary justify-content-between"
      sticky="top"
    >
      <Container fluid>
        <Form className="flex-grow-1">
          <Form.Control
            size="lg"
            type="text"
            placeholder="⌕"
            className="w-50"
          />
        </Form>
        <Nav className="ms-auto d-flex align-items-center">
          <Nav.Link href="#notifications">
            <ModalComponent notifications={data?.notifications} />
          </Nav.Link>
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
