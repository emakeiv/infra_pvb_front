import { Container, Row, Col } from 'react-bootstrap';

import SideNavBar from '../components/sidenavbar/sidenavbar';

export default function Data(){
      return (
        <Container fluid>
          <Row>
            <Col md={2} className="bg-dark col-auto  min-vh-100 text-white flex-column justify-content-between">
              <SideNavBar/>
            </Col>
            <Col className="p-5" md={10}>
              <h2>Data</h2>
            </Col>
          </Row>
        </Container>
      );

}