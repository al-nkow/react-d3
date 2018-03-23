import React, {Component} from 'react';
import classes from './PieChart.scss';
import * as d3 from 'd3';
import DataGen from '../../hoc/DataGen'

class PieChart extends Component {

    constructor() {
        super();
        this.data = [
            {title: '<5', value: '2704659', color: '#c07b7b'},
            {title: '5-13', value: '4499890', color: '#59ac7c'},
            {title: '14-17', value: '2159981', color: '#0b5a8a'},
            {title: '18-24', value: '3853788', color: '#c67151'},
            {title: '25-44', value: '14106543', color: '#205153'},
        ];
    }

    componentDidMount() {

        const { width, height } = this.props;

        const svg = d3.select('svg');
        // const radius = Math.min(width, height) / 2;
        // const g = svg.append('g').attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

        // const color = d3.scaleOrdinal(['#c07b7b', '#59ac7c', '#0b5a8a', '#c67151', '#205153']);

        // const pie = d3.pie()
        //     .sort(null)
        //     .value((d) => d.value);

        // const path = d3.arc()
        //     .outerRadius(radius - 10)
        //     .innerRadius(0);
        //
        // const label = d3.arc()
        //     .outerRadius(0)
        //     .innerRadius(radius);

        // const arc = g.selectAll('.arc')
        //     .data(pie(this.data))
        //     .enter().append('g')
        //     .attr('class', classes.arc);
        //
        // arc.append('path')
        //     .attr('d', path)
        //     .attr('fill', (d) => color(d.data.title));
        //
        // arc.append('text')
        //     .attr('transform', (d) => 'translate(' + label.centroid(d) + ')')
        //     .attr('dy', '0.35em')
        //     .text((d) => d.data.title);
    }

    render() {
        const { width, height } = this.props;

        const radius = Math.min(width, height) / 2;
        const pie = d3.pie().sort(null).value((d) => d.value)(this.data);
        const path = d3.arc().outerRadius(radius - 10).innerRadius(0);
        const label = d3.arc().outerRadius(0).innerRadius(radius);

        return (
            <svg className={classes.wrap} width={width} height={height}>
                <g transform={`translate(${width/2},${height/2})`}>
                    {pie.map((d, i) => (<g className={classes.arc} key={i}>
                        <path d={path(d)} fill={d.data.color}> </path>
                        <text dy="0.35em" transform={'translate(' + label.centroid(d) + ')'}>{d.data.title}</text>
                    </g>))}
                </g>
            </svg>
        )
    }
}

export default DataGen(PieChart);