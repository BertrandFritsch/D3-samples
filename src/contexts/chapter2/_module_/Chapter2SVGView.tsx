import * as React from 'react';
import * as d3 from 'd3';

import './styles.scss';
import { chartFactory } from  '../../../lib/common';

interface Props {
}

const renderChart = (node: HTMLElement | null) => {

  if (node) {
    if (node.firstChild) {
      node.removeChild(node.firstChild);
    }

    const chart = chartFactory(node);

    const text = chart.container.append('text')
                      .text("Ceci n'est pas un trajet!")
                      .attr('x', 50)
                      .attr('y', 200)
                      .attr('text-anchor', 'start');

    chart.container.append('circle')
       .attr('cx', 350)
       .attr('cy', 250)
       .attr('r', 100)
       .attr('fill', 'green')
       .attr('fill-opacity', 0.5)
       .attr('stroke', 'steelblue')
       .attr('stroke-width', 2);

    const ellipses = chart.container.append('ellipse')
                          .attr('cx', 350)
                          .attr('cy', 250)
                          .attr('rx', 150)
                          .attr('ry', 70)
                          .attr('fill', 'green')
                          .attr('fill-opacity', 0.3)
                          .attr('stroke', 'steelblue')
                          .attr('stroke-width', 0.7);

    chart.container.append('ellipse')
         .attr('cx', 350)
         .attr('cy', 250)
         .attr('rx', 80)
         .attr('ry', 7);

    const line = chart.container.append('line')
                      .attr('x1', 10)
                      .attr('y1', 10)
                      .attr('x2', 100)
                      .attr('y2', 100)
                      .attr('stroke', 'blue')
                      .attr('stroke-width', 3);

    const rect = chart.container.insert('rect', 'circle')
                      .attr('x', 200)
                      .attr('y', 50)
                      .attr('width', 300)
                      .attr('height', 400);

    rect.attr('stroke', 'green')
        .attr('stroke-width', 0.5)
        .attr('fill', 'white')
        .attr('rx', 20)
        .attr('ry', 4);

    chart.container.selectAll('ellipse, circle')
         .attr('transform', `translate(150, 0) scale(1.2) translate(-250, 0) rotate(-45, ${350 / 1.2}, ${250 / 1.2}) skewY(20)`);
  }
};

export default (props: Props) => {
  return (
    <div ref={ node => renderChart(node) }/>
  );
}
