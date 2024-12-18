import { useState, useEffect } from "react";
import { Table, Tabs, Tab, Button } from "react-bootstrap";

import "./alloc_table.css";

export default function AllocationTable({ data }) {
  const [assets, setAssets] = useState(data);
  const [direction, setDirection] = useState("asc");
  useEffect(() => {
    setAssets(data);
  }, [data]);

  const click = (key) => {
    const headers = document.getElementsByClassName("sortable-header");
    for (let header of headers) {
      header.classList.remove("highlight-column");
    }
    const activeHeader = document.querySelector(`[data-key="${key}"]`);
    if (activeHeader) {
      console.log(activeHeader);
      activeHeader.classList.add("highlight-column");
    }
    sort(key);
  };

  const sort = (key) => {
    const sorted = [...assets].sort((a, b) => {
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

  const winners = assets?.filter((asset) => asset.change > 0);
  const losers = assets?.filter((asset) => asset.change < 0);

  const renderTable = (assets) => (
    <Table responsive striped bordered hover>
      <caption>List of most perfmorming and underperfoming assets in porfolio</caption>
      <thead>
        <tr>
          <th>Asset Name</th>
          <th
            className="sortable-header"
            onClick={() => click("price")}
            data-key="price"
          >
            Price ($)
          </th>
          <th
            className="sortable-header"
            onClick={() => click("change")}
            data-key="change"
          >
            Change (%)
          </th>
          <th
            className="sortable-header"
            onClick={() => click("roc")}
            data-key="roc"
          >
            Rate of Change
          </th>
          <th>Sector</th>
          <th
            className="sortable-header"
            onClick={() => click("allocation")}
            data-key="allocation"
          >
            Allocation
          </th>
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
              {asset.change < 0 && asset.allocation > 10 ? "⚠️" : ""}
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
