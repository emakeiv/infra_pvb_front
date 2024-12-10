import React, { useState, useEffect } from 'react';
import { Table, Tabs, Tab } from 'react-bootstrap';
import data from '../../../data/assets_performance.json';

import './alloc_table.css';

export default function AllocationTable() {
  const [winners, setWinners] = useState([]);
  const [losers, setLosers] = useState([]);

  useEffect(() => {
    // Filter data into winners and losers
    const assets = data.assets;
    setWinners(assets.filter(asset => asset.change > 0));
    setLosers(assets.filter(asset => asset.change < 0));
  }, []);

  const renderTable = (assets) => (
    <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>Asset Name</th>
          <th>Price ($)</th>
          <th>Change (%)</th>
          <th>RoC</th>
          <th>Sector</th>
          <th>Allocation size</th>
        </tr>
      </thead>
      <tbody>
        {assets.map((asset, index) => (
          <tr key={index}>
            <td>{asset.roc > 2 ? "🚀" : ""}{asset.name}</td>
            <td>{asset.price.toFixed(2)}</td>
            <td style={{ color: asset.change > 0 ? 'green' : 'red' }}>
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
      <Tabs defaultActiveKey="winners" id="performance-tabs" className="mb-3">
        <Tab eventKey="winners" title="Gainers 🡅">
          {renderTable(winners)}
        </Tab>
        <Tab eventKey="losers" title="Losers 🡇">
          {renderTable(losers)}
        </Tab>
      </Tabs>
  );
}
