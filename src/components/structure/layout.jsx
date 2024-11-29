
import { Container, Row, Col } from 'react-bootstrap';

import PortfolioOpsHistory from '../charts/porftolio_operations_chart';
import MetricsTable from '../tables/performace/main';
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
          <Col className="p-5" md={10}>
            <TopNavbar/>
            <MetricCards/>
            <Row>
              <Col md={8}>
                <h3>Operational history</h3>
                <div className="pt-5"> 
                  <PortfolioOpsHistory/>
                </div>
              </Col>
              <Col md={4}>
                <h3>Performance</h3>
                <div className="pt-5"> 
                  <MetricsTable/>
                </div>
              </Col>
            </Row>
          </Col>
      </Row>
    </Container>
  );
}

export default Layout;