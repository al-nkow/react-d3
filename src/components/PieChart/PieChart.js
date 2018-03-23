import React, {Component} from 'react';
import classes from './PieChart.scss';
import * as d3 from 'd3';

class PieChart extends Component {

    constructor() {
        super();
        this.width = 400;
        this.height = 400;
        this.data = [
            {title: '<5', value: '2704659'},
            {title: '5-13', value: '4499890'},
            {title: '14-17', value: '2159981'},
            {title: '18-24', value: '3853788'},
            {title: '25-44', value: '14106543'},
        ];
    }

    componentDidMount() {

        const svg = d3.select('svg');
        const radius = Math.min(this.width, this.height) / 2;
        const g = svg.append('g').attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')');

        const color = d3.scaleOrdinal(['#c07b7b', '#59ac7c', '#0b5a8a', '#c67151', '#205153']);

        const pie = d3.pie()
            .sort(null)
            .value((d) => d.value);

        const path = d3.arc()
            .outerRadius(radius - 10)
            .innerRadius(0);

        const label = d3.arc()
            .outerRadius(0)
            .innerRadius(radius);

        const arc = g.selectAll('.arc')
            .data(pie(this.data))
            .enter().append('g')
            .attr('class', classes.arc);

        arc.append('path')
            .attr('d', path)
            .attr('fill', (d) => color(d.data.title));
        arc.append('text')
            .attr('transform', (d) => 'translate(' + label.centroid(d) + ')')
            .attr('dy', '0.35em')
            .text((d) => d.data.title);
    }

    render() {
        return (<svg className={classes.wrap} width={this.width} height={this.height}></svg>)
    }
}

export default PieChart;