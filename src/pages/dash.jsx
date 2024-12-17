import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PortfolioOpsHistory from "../components/charts/porftolio_operations_chart";
import MetricsTable from "../components/tables/performace/metric_table";
import SideNavBar from "../components/sidenavbar/sidenavbar";
import TopNavbar from "../components/topnavbar/topnavbar";
import MetricCards from "../components/metrics/metrics";

import AllocationTable from "../components/tables/allocations/alloc_table";

import DataLoader from "../services/data";

export default function Dash() {
  const [userData, setUserData] = useState([]);
  const [metrics, setMetrics] = useState([]);
  const [performance, setPerformance] = useState([]);
  const [benchmarkData, setBenchmarkData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const [userData, metricsData, performance, benchmarkData] =
        await Promise.all([
          DataLoader.getUserData(),
          DataLoader.getPortfolioMetrics(),
          DataLoader.getAssetsPerformance(),
          DataLoader.getBenchmarkData(),
        ]);

      setUserData(userData || []);
      setMetrics(metricsData || []);
      setPerformance(performance || []);
      setBenchmarkData(benchmarkData || []);
    }
    fetchData();
  }, []);

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
          <TopNavbar data={userData} />
          <MetricCards data={metrics?.summary?.daily} />
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
                <MetricsTable data={metrics?.basic} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h3>Top allocations</h3>
              <div className="allocations">
                <AllocationTable data={performance?.assets} />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
}
