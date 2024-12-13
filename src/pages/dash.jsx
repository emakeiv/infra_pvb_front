import { Container, Row, Col } from "react-bootstrap";

import PortfolioOpsHistory from "../components/charts/porftolio_operations_chart";
import MetricsTable from "../components/tables/performace/main";
import SideNavBar from "../components/sidenavbar/sidenavbar";
import TopNavbar from "../components/topnavbar/topnavbar";
import MetricCards from "../components/metrics/metrics";
import Footer from "../components/footer/footer";

import AllocationTable from "../components/tables/allocations/alloc_table";

export default function Dash() {
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
          <MetricCards />
          <Row>
            <Col md={8}>
              <h3>Operational history</h3>
              <div className="pt-5">
                <PortfolioOpsHistory />
              </div>
            </Col>
            <Col md={4}>
              <h3>Performance</h3>
              <div className="pt-5">
                <MetricsTable />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h3>Top allocations</h3>
              <div className="">
                <AllocationTable />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
}
