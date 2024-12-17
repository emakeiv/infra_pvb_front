import React from "react";
import { Row, Col, Card, ProgressBar } from "react-bootstrap";
import "./metrics.css";
import data from "../../data/porfolio_metrics.json";

function MetricCards() {
  const metrics = data.summary.daily || [];

  return (
    <Row className="mb-5">
      {metrics.map((metric, index) => {
        const change = Number(metric.change);
        const isPositive = change > 0;

        return (
          <Col md={3} key={index}>
            <Card className="metric-card shadow-sm border-0">
              <Card.Body>
                <div className="d-flex align-items-center">
                  <div className="text-start">
                    <Card.Title className="metric-title">
                      {metric.name}
                    </Card.Title>
                    <Card.Text className="metric-value">
                      {metric.name === "Balance" || metric.name === "Equity PnL"
                        ? `€${metric.value}`
                        : metric.value}
                    </Card.Text>
                    {metric.change && (
                      <span
                        className={`${
                          isPositive ? "text-success" : "text-danger"
                        }`}
                      >
                        <i
                          className={`bi ${
                            isPositive ? "bi-arrow-up" : "bi-arrow-down"
                          } me-1`}
                        ></i>
                        {Math.abs(change)}% Daily
                      </span>
                    )}
                  </div>
                </div>
                {metric.name === "VaR" && (
                  <ProgressBar
                    now={Number(metric.value)}
                    className="mt-3"
                    variant="primary"
                  />
                )}
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default MetricCards;
