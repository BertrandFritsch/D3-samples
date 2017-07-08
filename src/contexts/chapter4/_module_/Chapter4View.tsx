import * as React from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson';

import './styles.scss';
import { Chapter4Data } from './reducers';
import { chartFactory } from '../../../lib/common/index';

interface Props {
  data: Chapter4Data
}

const renderChart = (node: HTMLElement | null, data: Chapter4Data) => {

  if (node) {
    if (node.firstChild) {
      node.removeChild(node.firstChild);
    }

    const chart = chartFactory(node);

    const projection = d3.geoEquirectangular()
      .center([ 8, 56 ])
      .scale(500);

    const addToMap = (collection: any, key: any) => chart.container.append('g')
                                               .selectAll('path')
                                               .data(topojson.feature(collection, collection.objects[key]).features)
                                               .enter()
                                               .append('path')
                                               .attr('d', d3.geoPath().projection(projection));

    const draw = (worldData: Chapter4Data) => {
      const [sea, land, cultural] = worldData;
      addToMap(sea, 'water').classed('water', true);
      addToMap(land, 'land').classed('land', true);
      addToMap(cultural, 'ne_50m_admin_0_boundary_lines_land').classed('boundary', true);
      addToMap(cultural, 'ne_50m_urban_areas').classed('urban', true);
      chart.svg.node().classList.add('map');
    };

    draw(data);
  }
};

export default (props: Props) => {
  return (
    <div ref={ node => renderChart(node, props.data) }/>
  );
}
