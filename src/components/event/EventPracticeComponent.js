import React, { useState } from 'react';

const EventPracticeComponent = () => {
  const [val, setVal] = useState('');
  const onChangeHandler = (e) => {
    setVal(e.target.value);
  };
  const resetValHandler = () => {
    setVal('');
  };

  return (
    <div>
      <h1>Event Practice</h1>
      <p>{val}</p>
      <input type="text" value={val} onChange={onChangeHandler} />
      <button type="button" onClick={resetValHandler}>Reset!</button>
    </div>
  );
};

export default EventPracticeComponent;
