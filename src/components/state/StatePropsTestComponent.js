import React, { useState } from 'react';
import PropTypes from 'prop-types';

const StatePropsTestComponent = ({ value }) => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('Hello!');
  const onClickLeave = () => setMessage('Bye!');

  const [count, setCount] = useState(value);
  const onClickPlus = () => {
    (setCount(count + 1));
  };
  const onClickMinus = () => {
    (setCount(count - 1));
  };
  return (
    <div>
      <button type="button" onClick={onClickEnter}>Enter!</button>
      <button type="button" onClick={onClickLeave}>Leave!</button>
      {message}
      <button type="button" onClick={onClickPlus}>Plus!</button>
      <button type="button" onClick={onClickMinus}>Minus!</button>
      {count}
    </div>
  );
};

StatePropsTestComponent.defaultProps = {
  value: 0,
};

StatePropsTestComponent.propTypes = {
  value: PropTypes.number,
};


export default StatePropsTestComponent;
