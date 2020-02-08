import React, { useState } from 'react';

const CounterFunctional = () => {
  const [val, setVal] = useState(0);
  const increase = () => {
    setVal(val + 1);
  };

  const decrease = () => {
    setVal(val - 1);
  };

  const doubleIncrease = () => {
    increase();
    increase();
  };

  return (
    <div>
      <div>VALUE : {val}</div>
      <button type="button" onClick={increase}>+</button>
      <button type="button" onClick={doubleIncrease}>++</button>
      <button type="button" onClick={decrease}>-</button>
    </div>
  );
};

export default CounterFunctional;
