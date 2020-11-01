import React from 'react';
import StatisticalData from '../StatisticalData/StatisticalData'
import PropTypes from 'prop-types';
import styles from './Statistics.module.css'

const Statistics = ({title, stats}) => {
    return (
        <section className={styles.statistics}>
  <h2 className={styles.title}>{title}</h2>

  <ul className={styles.stats}>
                
  {stats.map(stat => <StatisticalData label={stat.label} percentage={stat.percentage} key={stat.id}/>)}
   
  </ul>
</section>
    );
};

export default Statistics;

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
}

Statistics.defaultProps = {
  title: 'title'
}