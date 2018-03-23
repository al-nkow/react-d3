import React from 'react';
import classes from './PieChart.scss';
import * as d3 from 'd3';
import DataGen from '../../hoc/DataGen/DataGen';
import Arc from '../Arc/Arc';

const PieChart = (props) => {

    const { width, height, data } = props;

    const radius = Math.min(width, height) / 2;
    const pie    = d3.pie().sort(null).value((d) => d.value)(data);
    const path   = d3.arc().outerRadius(radius - 10).innerRadius(0);
    const label  = d3.arc().outerRadius(0).innerRadius(radius);

    return (
        <svg className={classes.wrap} width={width} height={height}>
            <Arc width={width} height={height} arcClass={classes.arc} label={label} pie={pie} path={path}/>
        </svg>
    )

};

export default DataGen(PieChart);