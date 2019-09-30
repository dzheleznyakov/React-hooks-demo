import React, { useState, useEffect, useRef, useReducer } from 'react';

let effectCount = 0;

const List = (props) => {
  const [value, setValue] = useState('');
  // const [names, setNames] = useState([]);
  const inputRef = useRef();

  const namesReducer = (state, action) => {
    switch(action.type) {
      case 'ADD': return state.concat(action.payload);
      case 'DELETE': return state.slice(0, action.payload).concat(state.slice(action.payload + 1));
      default: return state;
    }
  };

  const [names, dispatchName] = useReducer(namesReducer, []);

  const onButtonClicked = event => {
    // setNames(names.concat(value))
    dispatchName({ type: 'ADD', payload: value });
    setValue('');
    inputRef.current.focus()
  };

  const mouseClickHandler = (event) => {
    console.log(`(${event.screenX}, ${event.screenY})`);
  };

  useEffect(() => {
    console.log(++effectCount);
    document.addEventListener('click', mouseClickHandler);
    if (inputRef.current) {
      inputRef.current.focus();
    }
    return () => document.removeEventListener('click', mouseClickHandler)
  }, []);

  return (
    <div className="List">
      <input 
        type="text" 
        placeholder="Enter name"
        value={value}
        ref={inputRef}
        onChange={event => setValue(event.target.value)}
      />
      <button onClick={onButtonClicked}>Add</button>
      <ul>
        {names.map((name, index) => (
          <li 
            key={`li-${index}`} 
            onClick={() => dispatchName({ type: 'DELETE', payload: index })
          }>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
