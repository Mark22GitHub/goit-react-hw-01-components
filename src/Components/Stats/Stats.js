import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css'

const Stats = ({title,value}) => {
    return (
    <li className={styles.stats}>
            <span className={styles.stats_title}>{title}</span>
            <span className={styles.value}>{value}</span>
    </li>
    );
};

export default Stats;

Stats.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
}
