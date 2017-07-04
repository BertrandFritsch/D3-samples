import * as React from 'react';
import * as d3 from 'd3';

import './styles.scss';
import { Chapter2Data } from './reducers';

interface Props {
  data: Chapter2Data
}

const renderChart = (node: HTMLElement | null, data: Chapter2Data) => {

  const localData = [ ['Country', 'Life expectancy (years from birth)'], ...data ];

  if (node && node.firstChild) {
    node.removeChild(node.firstChild);
  }

  const rows = localData;
  const header = rows.shift() || []; // Remove the first element for the header

  const table = d3.select(node)
                  .append('table')
                  .attr('class', 'table');

  table.append('thead')
       .append('tr')
       .selectAll('td')
       .data(header)
       .enter()
       .append('th')
       .text(d => d);

  table.append('tbody')
       .selectAll('tr')
       .data(rows)
       .enter()
       .append('tr')
       .selectAll('td')
       .data(d => d)
       .enter()
       .append('td')
       .text(d => d);

  table.selectAll('tr')
       .filter(i => i !== undefined)
       .sort(([ , yearsA ], [ , yearsB ]) => +yearsA - +yearsB);
};

export default (props: Props) => {
  return (
    <div ref={ node => renderChart(node, props.data) }/>
  );
}
