import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";

import data from "../../../data/porfolio_metrics.json";

export default function MetricsTable() {
  const [metrics, setMetrics] = useState([]);
  useEffect(() => {
    setMetrics(data.basic);
  }, []);

  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>Metric</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {metrics.map(({ name, value }, index) => (
            <tr key={index}>
              <td>{name}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="link">All metrics</Button>
    </div>
  );
}
