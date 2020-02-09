import React from 'react';

const IterationSample = () => {
  const list = [1, 2, 3, 4, 5];
  const squaredList = list.map((num) => <li key={num}>{num * num}</li>);
  return (
    <div>
      <ul>
        {squaredList}
      </ul>
    </div>
  );
};

export default IterationSample;
