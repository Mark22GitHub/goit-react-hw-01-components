import React from 'react';
import TransElem from '../TransElem/TransElem'
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';


const TransactionHistory = ({items}) => {
    return (
       <table className={styles.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
      {items.map(item => <TransElem type={item.type} amount={item.amount} currency={item.currency} key={item.id}/>)}
  </tbody>
</table>
    );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
    items: PropTypes.array
}