import React from 'react';
import { Row, Col, Card, ProgressBar } from 'react-bootstrap';
import './metrics.css';

function MetricCards() {
  return (

    <Row className="g-3 mb-4">
      <Col md={3}>
        <Card className="metric-card shadow-sm border-0">
          <Card.Body className="d-flex align-items-center">
            <div className="metric-icon bg-danger text-white rounded-circle d-flex align-items-center justify-content-center">
              <i className="bi bi-currency-dollar"></i>
            </div>
            <div className="ms-3 text-start">
              <Card.Title className="metric-title">PnL</Card.Title>
              <Card.Text className="metric-value">€24k</Card.Text>
              <span className="text-success small">
                <i className="bi bi-arrow-up"></i> 5% Daily
              </span>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="metric-card shadow-sm border-0">
          <Card.Body className="d-flex align-items-center">
            <div className="metric-icon bg-success text-white rounded-circle d-flex align-items-center justify-content-center">
              <i className="bi bi-people"></i>
            </div>
            <div className="ms-3 text-start">
              <Card.Title className="metric-title">Open Positions</Card.Title>
              <Card.Text className="metric-value">105</Card.Text>
              <span className="text-danger small">
                <i className="bi bi-arrow-down"></i> 2% Daily
              </span>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="metric-card shadow-sm border-0">
          <Card.Body>
            <div className="d-flex align-items-center">
              <div className="metric-icon bg-warning text-white rounded-circle d-flex align-items-center justify-content-center">
                <i className="bi bi-graph-up "></i>
              </div>
              <div className="ms-3 text-start">
                <Card.Title className="metric-title">VaR</Card.Title>
                <Card.Text className="metric-value">35.5%</Card.Text>
              </div>
            </div>
            <ProgressBar now={35.5} className="mt-3" variant="primary" />
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="metric-card shadow-sm border-0">
          <Card.Body className="d-flex align-items-center">
            <div className="metric-icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center">
              <i className="bi bi-cash"></i>
            </div>
            <div className="ms-3 text-start">
              <Card.Title className="metric-title">Total Profit</Card.Title>
              <Card.Text className="metric-value">€15k</Card.Text>
              <span className="text-success small">
                <i className="bi bi-arrow-up"></i> 1% Daily
              </span>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );

}

export default MetricCards;
