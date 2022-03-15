import React, { useState } from 'react';
import ReactDOM from 'react-dom';


function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.onhandle} type="text" value={props.value} />
      <button onClick={props.onclickAddItems}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
