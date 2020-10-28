import React from 'react';
import TransElem from '../TransElem/TransElem'
import PropTypes from 'prop-types';


const TransactionHistory = ({items}) => {
    return (
       <table className="transaction-history">
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