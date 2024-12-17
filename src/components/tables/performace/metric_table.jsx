import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";

export default function MetricsTable({ data }) {
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
          {data?.map(({ name, value }, index) => (
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
