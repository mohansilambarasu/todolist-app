import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Heading from './header.jsx';
import TodoNote from './List.jsx';
import InputArea from './InputArea.jsx';



function App() {

  const [note,setNote] = useState('');
  const [items,setItems] = useState([]);


  function handleChange(e) {
    setNote(e.target.value)
  }

  function addItem() {
    setItems(
      function (prevItems) {
        return [...prevItems,note]
      }
    );
    setNote('')
  }

  function deleteItem(id) {
    setItems(
      function (prevItems) {
        return prevItems.filter( function (item,index) {
          return index != id;
        })
      }
    )
  }

  return (
    <div className="container">
      <Heading />
      <InputArea
        onhandle = {handleChange}
        onclickAddItems = {addItem}
        value = {note}
      />
      <div className="note-items">
        <ul>
          {items.map(
            function (todoList,index) {
              return <TodoNote
                        key = {index}
                        id = {index}
                        item = {todoList}
                        onChecked = {deleteItem}
                      />
            }
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
