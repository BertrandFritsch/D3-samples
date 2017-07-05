import * as React from 'react';
import * as d3 from 'd3';

import './styles.scss';
import { chartFactory } from '../../../lib/common';

interface Props {
}

const renderChart = (node: HTMLElement | null) => {

  if (node) {
    if (node.firstChild) {
      node.removeChild(node.firstChild);
    }

    const chart = chartFactory(node);

    const sine = d3.range(0, 10)
                   .map(k => [ 0.5 * k * Math.PI, Math.sin(0.5 * k * Math.PI) ]);

    const x = d3.scaleLinear()
                .range([
                  0,
                  (chart.width / 2) - (chart.margin.left + chart.margin.right)
                ])
                .domain(d3.extent(sine, d => d[ 0 ]) as [ number, number ]);

    const y = d3.scaleLinear()
                .range([
                  (chart.height / 2) - (chart.margin.top + chart.margin.bottom),
                  0
                ])
                .domain([ -1, 1 ]);

    const line = d3.line()
                   .x(d => x(d[ 0 ]))
                   .y(d => y(d[ 1 ]));

    const g = chart.container.append('g');
    g.append('path')
     .datum(sine)
     .attr('d', line)
     .attr('stroke', 'steelblue')
     .attr('stroke-width', 2)
     .attr('fill', 'none');

    g.append('path')
     .datum(sine)
     .attr('d', line.curve(d3.curveStepBefore))
     .attr('stroke', 'black')
     .attr('stroke-width', 1)
     .attr('fill', 'none');

    const g2 = chart.container.append('g')
                    .attr('transform', `translate(${(chart.width / 2) + (chart.margin.left + chart.margin.right)}, ${chart.margin.top})`);

    const area = d3.area()
                   .x(d => x(d[ 0 ]))
                   .y0(chart.height / 2)
                   .y1(d => y(d[ 1 ]))
                   .curve(d3.curveBasis);

    g2.append('path')
      .datum(sine)
      .attr('d', area)
      .attr('fill', 'steelblue')
      .attr('fill-opacity', 0.4);

    g2.append('path')
      .datum(sine)
      .attr('d', line.curve(d3.curveBasis))
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 2)
      .attr('fill', 'none');

    const arc = d3.arc();
    const g3 = chart.container.append('g')
                    .attr('transform', `translate(${chart.margin.left + chart.margin.right}, ${(chart.height / 2) + (chart.margin.top + chart.margin.bottom)})`);

    g3.append('path')
      .attr('d',
        arc({
          outerRadius: 100,
          innerRadius: 50,
          startAngle: -Math.PI * 0.25,
          endAngle: Math.PI * 0.25,
          padAngle: 0
        }))
      .attr('transform', 'translate(150, 150)')
      .attr('fill', 'lightslategrey');

    const symbols = d3.symbol()
                      .type(d => (d[ 1 ] > 0 ? d3.symbolTriangle : d3.symbolDiamond))
                      .size((d, i) => (i % 2 ? 0 : 64));

    g2.selectAll('path')
      .data(sine)
      .enter()
      .append('path')
      .attr('d', symbols)
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 2)
      .attr('fill', 'white')
      .attr('transform', (d: [ number, number ]) => `translate(${x(d[ 0 ])},${y(d[ 1 ])})`);

    g3.append('g')
      .selectAll('path')
      .data([ {
        source: {
          radius: 50,
          startAngle: -Math.PI * 0.30,
          endAngle: -Math.PI * 0.20
        },
        target: {
          radius: 50,
          startAngle: Math.PI * 0.30,
          endAngle: Math.PI * 0.30
        }
      } ])
      .enter()
      .append('path')
      .attr('d', d3.ribbon());

    const data = d3.zip(d3.range(0, 12), d3.shuffle(d3.range(0, 12)));
    const colors = [ 'linen', 'lightsteelblue', 'lightcyan', 'lavender', 'honeydew', 'gainsboro' ];

    const ribbon = d3.ribbon<number[], number>()
                     .source(d => d[ 0 ])
                     .target(d => d[ 1 ])
                     .radius(150)
                     .startAngle(d => -2 * Math.PI * (1 / data.length) * d)
                     .endAngle(d => -2 * Math.PI * (1 / data.length) * ((d - 1) % data.length));

    g3.append('g')
      .attr('transform', 'translate(300, 200)')
      .selectAll('path')
      .data(data)
      .enter()
      .append('path')
      .attr('d', ribbon)
      .attr('fill', (d: number, i: number) => colors[ i % colors.length ])
      .attr('stroke', (d: number, i: number) => colors[ (i + 1) % colors.length ]);
  }
};

const renderChart2 = (node: HTMLElement | null) => {

  if (node) {
    if (node.firstChild) {
      node.removeChild(node.firstChild);
    }
    // d3.select(node)
    //   .selectAll("p")
    //   .data([4, 8, 15, 16, 23, 42])
    //   .enter().append("p")
    //   .text(function(d) { return "I’m number " + d + "!"; });
    // return;
    // ------ axes
    const chart = chartFactory(node, {
      margin: { top: 30, bottom: 10, left: 50, right: 50 }
    });

    const amount = 200;

    const x = d3.scaleLinear()
                .domain([ 0, amount ])
                .range([
                  0,
                  chart.width - chart.margin.right - chart.margin.left - 20
                ]);

    const axes = [
      d3.axisBottom(x),
      d3.axisTop(x).ticks(5),
      d3.axisBottom(x).tickSize(20),
      d3.axisTop(x).tickValues([0, 20, 50, 70, 100])
        .tickFormat((d, i) => ['a', 'e', 'i', 'o', 'u'][i])
    ];

    axes.forEach((axis, i) =>
      chart.container
           .append('g')
           .attr('transform', `translate(0,${(i * 50) + chart.margin.top})`)
           // .data(d3.range(0, amount))
           .call(axis)
    );
  }
};

export default (props: Props) => {
  return (
    <div ref={ node => renderChart2(node) }/>
  );
}
