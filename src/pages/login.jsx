import { Container, Row, Col, Form, Button, Stack } from "react-bootstrap";

import Footer from "../components/footer/footer";

export default function Login() {
  return (
    <Container fluid>
      <Stack gap={2} className="col-md-5 mx-auto">
        <h2>Login</h2>
        <Form>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Stack>
      <Footer />
    </Container>
  );
}
