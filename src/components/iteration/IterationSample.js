import React from 'react';
import NumberShow from './NumberShow';

const IterationSample = () => {
  const list = [1, 2, 3, 4, 5];
  const squaredList = list.map((num) => <NumberShow key={num} number={num * num} />);
  return (
    <div>
      <ul>
        {squaredList}
      </ul>
    </div>
  );
};

export default IterationSample;
