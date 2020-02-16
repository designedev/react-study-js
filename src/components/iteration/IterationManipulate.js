import React, { useState } from 'react';

const IterationManipulate = () => {
  const [names, setNames] = useState([
    { id: 1, name: 'NAME1' },
    { id: 2, name: 'NAME2' },
    { id: 3, name: 'NAME3' },
    { id: 4, name: 'NAME4' },
    { id: 5, name: 'NAME5' },
  ]);

  const [nextId, setNextId] = useState(names.length + 1);

  const [name, setName] = useState('');

  const addNames = () => {
    if (name !== '') {
      console.log(`ADD => name : ${name}, id : ${nextId}`);
      setNames(names.concat({ id: nextId, name }));
      setNextId(nextId + 1);
      setName('');
    }
  };

  const removeName = (e) => {
    console.log(`REMOVE => name : ${e.name}, id : ${e.id}`);
    setNames(names.filter((element) => element.id !== e.id));
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const namesList = names.map((e) => <li key={e.id}>ID : {e.id}, NAME : {e.name}<button type="button" onClick={() => removeName(e)}>X</button></li>);


  return (
    <div>
      <ul>
        {namesList}
      </ul>
      {name}
      <input type="text" placeholder="enter new name" value={name} onChange={handleNameChange} />
      <button type="button" onClick={addNames}>ADD</button>
    </div>
  );
};

export default IterationManipulate;
