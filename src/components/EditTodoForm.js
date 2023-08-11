import React, { useState } from 'react'

const EditTodoForm = ({ editTodo, task }) => {

    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        editTodo(value, task.id)

    }


    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder={task.task}
                className='todo-input'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button
                type='submit'
                className='todo-btn'>
                Update Task
            </button>
            <button className='todo-btn'>Cancel</button>
        </form>
    )
}

export default EditTodoForm