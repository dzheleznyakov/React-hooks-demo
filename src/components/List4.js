import React, { useState, useEffect } from 'react';

let effectCount = 0;

const List = (props) => {
  const [value, setValue] = useState('');
  const [names, setNames] = useState([]);

  const onButtonClicked = event => {
    setNames(names.concat(value))
    setValue('');
  };

  const mouseClickHandler = (event) => {
    console.log(`(${event.screenX}, ${event.screenY})`);
  };

  useEffect(() => {
    console.log(++effectCount);
    document.addEventListener('click', mouseClickHandler);
    return () => document.removeEventListener('click', mouseClickHandler)
  }, []);  

  return (
    <div className="List">
      <input 
        type="text" 
        placeholder="Enter name"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <button
        onClick={onButtonClicked}
      >Add</button>
      <ul>
        {names.map((name, index) => <li key={`li-${index}`}>{name}</li>)}
      </ul>
    </div>
  );
};

export default List;
