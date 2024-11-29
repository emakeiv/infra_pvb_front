import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';
import GranularityToolbar from './buttons/granularity_toolbar';
import data from '../../data/porfolio_stats.json';
import becnhmark_data from '../../data/benchmark_data.json'
import './chart.css';

export default function PortfolioOpsHistory() {
  const container = useRef();

  useEffect(() => {
    const options = {
      layout: {
        fontSize: 15,
        textColor: 'black',
        background: {
          type: 'solid',
          color: 'white',
        },
      },
      grid: {
        vertLines: { color: '#f0f0f0' },
        horzLines: { color: '#f0f0f0' },
      },
    };

    const chart = createChart(container.current, {
      ...options,
      width: container.current.clientWidth,
      height: container.current.clientHeight,
    });

    const returnsSeries = chart.addHistogramSeries({
      color: '#26a69a' ,
      priceScaleId: 'left',
      lineWidth: 2,
    });
    returnsSeries.setData(data.returns);

    const netGrowthSeries = chart.addAreaSeries({
      topColor: 'rgba(61, 193, 211, 0.3)', 
      bottomColor: 'rgba(61, 193, 211, 0)',
      lineColor: 'rgba(41, 98, 255, 1)',
      lineWidth: 2,
      priceScaleId: 'right',
    });
    netGrowthSeries.setData(data.net);

    const benchmarkSeries = chart.addLineSeries({
      color: 'rgba(255, 99, 132, 1)', // RED
      lineWidth: 2,
      priceScaleId: 'right',
    });
    benchmarkSeries.setData(becnhmark_data.sp500);
    

    chart.priceScale('left').applyOptions({
      position: 'left',
      visible: true, 
      scaleMargins: {
        top: 0.1,
        bottom: 0.1,
      },
      lastValueVisible: true
    });

    chart.priceScale('right').applyOptions({
      mode: 2,
      position: 'right', 
      visible: true, 
      scaleMargins: {
        top: 0.1,
        bottom: 0.1,
      },
      
    });


    chart.timeScale().fitContent();


    const handleResize = () => {
      chart.resize(container.current.clientWidth, container.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, []);

  return (
    <div>
      <GranularityToolbar/>
      <div ref={container} className="general-chart" />
    </div>
  );
}
