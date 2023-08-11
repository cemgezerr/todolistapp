import React from 'react'
import { FaTrashAlt, FaEdit } from 'react-icons/fa'

const Todo = ({task,toggleComplete,deleteTodo,editTodo}) => {
  return (
    <div className='Todo'>
      <p onClick={()=> toggleComplete(task.id)} className={`${task.completed ? "completed" : ""}`}>{task.task}</p>
      <div>
        <FaEdit onClick={()=> editTodo(task.id)} />
        <FaTrashAlt onClick={() =>deleteTodo(task.id)} />
      </div>
    </div>
  )
}

export default Todo