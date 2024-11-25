
import { Container, Row, Col } from 'react-bootstrap';
import SideNavBar from '../sidenavbar/sidenavbar';
import TopNavbar from '../topnavbar/topnavbar';
import MetricCards from '../metrics/metrics';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function Layout() {
  return (
    <Container fluid>
      <Row>
          <Col md={2} className="bg-dark col-auto  min-vh-100 text-white flex-column justify-content-between">
            <SideNavBar/>
          </Col>
          <Col md={10}>
            <TopNavbar/>
            <MetricCards/>
           <Row>
           <Col md={8}>
              <div className="mt-4">
              <h5>Porfolio status</h5>
             
              </div>
            </Col>
           </Row>
          </Col>
      </Row>
    </Container>
  );
}

export default Layout;