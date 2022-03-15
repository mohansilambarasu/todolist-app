import React, { useState } from 'react';
import ReactDOM from 'react-dom';


function TodoNote(props) {

  return <div className='noteBox'>
          <li>{props.item}</li>
          <button onClick={ function () {
                    return props.onChecked(props.id)
                  } }
          >Remove</button>
        </div>
}

export default TodoNote;


// // Strike
// function TodoNote(props) {
//   const [clickedItem,setClickedItem] = useState(false);
//   function handleItem() {
//     setClickedItem( function (prevValue) {
//       console.log(!prevValue);
//       return !prevValue
//     } );
//   }
//
//   return <li onClick={handleItem} style={{textDecoration : (clickedItem === true) ? "line-through" : "none"}}>{props.item}</li>
// }
