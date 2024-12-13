import { Container, Row, Col } from "react-bootstrap";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Figure from "react-bootstrap/Figure";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import DropdownButton from "react-bootstrap/DropdownButton";

import TopNavbar from "../components/topnavbar/topnavbar";
import SideNavBar from "../components/sidenavbar/sidenavbar";

export default function Profile() {
  return (
    <Container fluid>
      <Row>
        <Col
          md={2}
          className="bg-dark col-auto  min-vh-100 text-white flex-column justify-content-between"
        >
          <SideNavBar />
        </Col>
        <Col className="p-5" md={10}>
          <TopNavbar />
          <h2>Edit Profile</h2>
          <Row>
            <Col className="" md={6}>
              <Form>
                <Row className="mb-3">
                  <h4>User data</h4>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="firstname">
                      <Form.Label>First name</Form.Label>
                      <Form.Control required type="text" placeholder="John" />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="lasname">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control required type="text" placeholder="Doe" />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="username">
                      <Form.Label>Username</Form.Label>
                      <InputGroup hasValidation>
                        <InputGroup.Text id="input_prepend">@</InputGroup.Text>
                        <Form.Control
                          type="text"
                          placeholder="prodigy"
                          aria-describedby="input_prepend"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please choose a username.
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group as={Col} controlId="email">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="example@email.com"
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="phone">
                      <Form.Label>Phone number</Form.Label>
                      <InputGroup className="mb-3">
                        <DropdownButton
                          variant="secondary"
                          title="Code"
                          id="input-group-dropdown-1"
                        >
                          <Dropdown.Item>LT (+370)</Dropdown.Item>
                          <Dropdown.Item>LV</Dropdown.Item>
                          <Dropdown.Item>EE</Dropdown.Item>
                        </DropdownButton>
                        <Form.Control aria-label="Text input with dropdown button" />
                      </InputGroup>
                    </Form.Group>
                  </Row>
                </Row>
                <Row className="mb-3">
                  <h4>Location</h4>
                  <Form.Group as={Col} md="6" controlId="country">
                    <Form.Select aria-label="Default select example">
                      <option>Select country</option>
                      <option value="1">Lithuania</option>
                      <option value="2">Latvia</option>
                      <option value="3">Estonia</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="city">
                    <Form.Control type="text" placeholder="City" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid city.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="zip">
                    <Form.Control type="text" placeholder="Zip" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid zip.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <h4>Image</h4>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Default file input example</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group className="mb-3">
                    <Form.Check
                      required
                      label="Agree to terms and conditions"
                      feedback="You must agree before submitting."
                      feedbackType="invalid"
                    />
                  </Form.Group>
                  <Button type="submit">Update Profile</Button>
                </Row>
              </Form>
            </Col>
            <Col className="" md={3}>
              <h4>?</h4>
              <Figure>
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src="holder.js/171x180"
                />
                <Figure.Caption>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
