import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatisticalData.module.css';


const StaticticalData = ({label, percentage}) => {
    return (
    <li className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
    );
};

export default StaticticalData;

StaticticalData.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}