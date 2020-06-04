import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('Hello!');
  const onClickLeave = () => setMessage('Bye!');
  const [color, setColor] = useState('');
  const onClickChangeColor1 = () => setColor('BLUE');
  const onClickChangeColor2 = () => setColor('RED');

  return (
    <div>
      <button type="button" onClick={onClickEnter}>Enter</button>
      <button type="button" onClick={onClickLeave}>Leave</button>
      {message}
      <br />
      <button type="button" onClick={onClickChangeColor1}>BLUE!</button>
      <button type="button" onClick={onClickChangeColor2}>RED!</button>
      {color}
    </div>
  );
};

export default Say;
