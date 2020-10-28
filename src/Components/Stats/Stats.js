import React from 'react';
import PropTypes from 'prop-types';

const Stats = ({title,value}) => {
    return (
    <li>
            <span className="label">{title}</span>
            <span className="quantity">{value}</span>
    </li>
    );
};

export default Stats;

Stats.propTypes = {
    title: PropTypes.string,
    value: PropTypes.number,
}
