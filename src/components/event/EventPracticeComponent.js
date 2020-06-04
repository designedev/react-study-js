import React, { useState } from 'react';

const EventPracticeComponent = () => {
  const [val, setVal] = useState('');
  const onChangeHandler = (e) => {
    console.log(e.target.value);
    console.log(e.target);
    setVal(e.target.value);
  };
  const resetValHandler = () => {
    alert(val);
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
