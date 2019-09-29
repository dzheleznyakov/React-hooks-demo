import React from 'react';

const list = (props) => {  
  return (
    <div className="List">
      <input type="text" placeholder="Enter name" />
      <button>Add</button>
      <ul></ul>
    </div>
  );
};

export default list;
