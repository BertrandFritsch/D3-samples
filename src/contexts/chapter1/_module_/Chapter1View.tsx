import * as React from 'react';
import * as d3 from 'd3';

import './styles.scss';
import { Chapter1Data, Chapter1Item } from './reducers';

interface Props {
  data: Chapter1Data
}

const renderChart = (node: HTMLElement | null, data: Chapter1Data) => {

  if (node && node.firstChild) {
    node.removeChild(node.firstChild);
  }

  const chart = d3.select(node)
                  .append('svg');

  chart
    .attr('width', window.innerWidth)
    .attr('height', window.innerHeight);

  const x = d3.scaleBand()
              .domain(data.map(d => d.region))
              .rangeRound([ 50, window.innerWidth - 50 ])
              .padding(0.1);

  const y = d3.scaleLinear()
              .domain([ 0, d3.max(data, d => d.meanPctTurnout) || 0 ])
              .range([ window.innerHeight - 50, 0 ]);

  const xAxis = d3.axisBottom(x);
  const yAxis = d3.axisLeft(y);

  chart.append('g')
       .attr('class', 'axis')
       .attr('transform', `translate(0, ${window.innerHeight - 50})`)
       .call(xAxis);

  chart.append('g')
       .attr('class', 'axis')
       .attr('transform', 'translate(50, 0)')
       .call(yAxis);

  chart.selectAll('rect')
       .data(data)
       .enter()
       .append('rect')
       .attr('class', 'bar')
       .attr('x', (d: Chapter1Item) => x(d.region) || null)
       .attr('y', window.innerHeight - 50)
       .attr('width', x.bandwidth())
       .attr('height', 0)
       .transition()
       .delay((d, i) => i * 20)
       .duration(800)
       .attr('y', d => y(d.meanPctTurnout))
       .attr('height', d => (window.innerHeight - 50) - y(d.meanPctTurnout));
};

export default (props: Props) => {
  return (
    <div ref={ node => renderChart(node, props.data) }/>
  );
}
