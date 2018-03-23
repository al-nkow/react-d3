import React from 'react';
import PropTypes from 'prop-types';

const Arc = (props) => {

    const { width, height, arcClass, label, pie, path } = props;

    return (
        <g transform={`translate(${width/2},${height/2})`}>
            {pie.map((d, i) => (<g className={arcClass} key={i}>
                <path d={path(d)} fill={d.data.color}> </path>
                <text dy="0.35em" transform={'translate(' + label.centroid(d) + ')'}>{d.data.title}</text>
            </g>))}
        </g>
    )

};

Arc.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    arcClass: PropTypes.string,
    label: PropTypes.func,
    pie: PropTypes.array,
    path: PropTypes.func
};

export default Arc;