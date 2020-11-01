import React from 'react';
import PropTypes from 'prop-types';

const TransElem = ({type, amount, currency}) => {
    return (
       <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    );
};

export default TransElem;

TransElem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
}