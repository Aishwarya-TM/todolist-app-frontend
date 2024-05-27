import React, { useState } from 'react'
import Create from './Create'

const ToDoComponent = () => {
  const [todos,setTodos]=useState([])
  return (
    
    <div>
      <h2>To do List</h2>
      <Create/>
      {
        todos.length === 0
        ?
        <div><h4>No record</h4></div>
        :
        todos.map(todo =>
          {
            <div>
              {todo}
              </div>
          }
        )
      }
    </div>
  )
}

export default ToDoComponent