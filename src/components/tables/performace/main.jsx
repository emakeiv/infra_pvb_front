import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

import data from "../../../data/porfolio_metrics.json"

export default function MetricsTable() {

      const [metrics, setMetrics] = useState([]);
      useEffect(() =>{
            setMetrics(data.basic);
      }, []);
      
      return (
      <Table responsive>
            <thead>
                  <tr>
                        <th>Metric</th>
                        <th>Value</th>
                  </tr>
            </thead>
            <tbody>
                  {metrics.map(({metric, value}, index) =>(
                        <tr key={index}>
                              <td>{metric}</td>
                              <td>{value}</td> 
                        </tr>
                  ))}
            </tbody>
      </Table>
      );
}
