import React, { useState, useEffect } from "react";
import { Table, Tabs, Tab, Button } from "react-bootstrap";

import "./alloc_table.css";

export default function AllocationTable({ data }) {
  const [assets, setAssets] = useState(data?.assets || []);
  const [direction, setDirection] = useState("asc");
  useEffect(() => {
    setAssets(data);
  }, [data]);

  const sort = (key) => {
    console.log(assets);
    const sorted = assets.sort((a, b) => {
      return direction === "asc"
        ? a[key] > b[key]
          ? 1
          : -1
        : a[key] < b[key]
        ? 1
        : -1;
    });

    setAssets(sorted);
    setDirection(direction === "asc" ? "desc" : "asc");
  };

  const winners = data?.assets?.filter((asset) => asset.change > 0);
  const losers = data?.assets?.filter((asset) => asset.change < 0);

  const renderTable = (assets) => (
    <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>Asset Name</th>
          <th onClick={() => sort("price")}>Price ($)</th>
          <th onClick={() => sort("change")}>Change (%)</th>
          <th onClick={() => sort("roc")}>RoC</th>
          <th>Sector</th>
          <th onClick={() => sort("allocation")}> Allocation size</th>
        </tr>
      </thead>

      <tbody className="table-group-divider">
        <tr>
          <th colSpan="6">Allocations by peformance</th>
        </tr>
        {assets?.map((asset, index) => (
          <tr className={asset.roc > 2 ? "bg-primary" : ""} key={index}>
            <td>
              {asset.roc > 2 ? "🚀" : ""}
              {asset.name}
            </td>
            <td>{asset.price.toFixed(2)}</td>
            <td style={{ color: asset.change > 0 ? "green" : "red" }}>
              {asset.change.toFixed(2)}
            </td>
            <td>{asset.roc}</td>
            <td>{asset.sector}</td>
            <td>{asset.allocation}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );

  return (
    <div>
      <Tabs defaultActiveKey="winners" id="performance-tabs" className="mb-3">
        <Tab eventKey="winners" title="Gainers 🡅">
          {renderTable(winners)}
        </Tab>
        <Tab eventKey="losers" title="Losers 🡇">
          {renderTable(losers)}
        </Tab>
      </Tabs>
      <Button variant="link">All allocations</Button>
    </div>
  );
}
