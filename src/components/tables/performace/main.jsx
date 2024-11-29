import React from 'react';
import { Table } from 'react-bootstrap';

export default function MetricsTable() {
  const metrics = {
    sortinoRatio: '2.35',
    sharpeRatio: '1.58',
    valueAtRisk: '-5.2%',
    volatility: '12.4%',
    maxDrawdown: '-15.7%',
    alpha: '+1.5%',
    beta: '0.85',
    trackingError: '3.2%',
    informationRatio: '0.75',
    calmarRatio: '0.95',
    turnoverRate: '20.3%'
  };

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Metric</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sortino Ratio</td>
          <td>{metrics.sortinoRatio}</td>
        </tr>
        <tr>
          <td>Sharpe Ratio</td>
          <td>{metrics.sharpeRatio}</td>
        </tr>
        <tr>
          <td>Value at Risk (VaR)</td>
          <td>{metrics.valueAtRisk}</td>
        </tr>
        <tr>
          <td>Volatility (%)</td>
          <td>{metrics.volatility}</td>
        </tr>
        <tr>
          <td>Maximum Drawdown (%)</td>
          <td>{metrics.maxDrawdown}</td>
        </tr>
        <tr>
          <td>Alpha</td>
          <td>{metrics.alpha}</td>
        </tr>
        <tr>
          <td>Beta</td>
          <td>{metrics.beta}</td>
        </tr>
        <tr>
          <td>Tracking Error (%)</td>
          <td>{metrics.trackingError}</td>
        </tr>
        <tr>
          <td>Information Ratio</td>
          <td>{metrics.informationRatio}</td>
        </tr>
        <tr>
          <td>Calmar Ratio</td>
          <td>{metrics.calmarRatio}</td>
        </tr>
        <tr>
          <td>Turnover Rate (%)</td>
          <td>{metrics.turnoverRate}</td> 
        </tr>
      </tbody>
    </Table>
  );
}
