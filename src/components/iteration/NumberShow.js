import React from 'react';
import PropTypes from 'prop-types';

const NumberShow = ({ number }) => (
  <li key={number}>{number * number}</li>
);

NumberShow.propTypes = {
  number: PropTypes.number,
};

NumberShow.defaultProps = {
  number: 0,
};

export default NumberShow;
