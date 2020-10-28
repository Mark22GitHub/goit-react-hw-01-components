import React from 'react';
import StaticticalData from '../StaticticalData/StaticticalData'
import PropTypes from 'prop-types';

const Statistics = ({title, stats}) => {
    return (
        <section className="statistics">
  <h2 className={title}>Upload stats</h2>

  <ul className={stats}>
                
  {stats.map(stat => <StaticticalData label={stat.label} percentage={stat.percentage} key={stat.id}/>)}
   
  </ul>
</section>
    );
};

export default Statistics;

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array
}