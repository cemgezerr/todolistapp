import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {

    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        addTodo(value)
        setValue("")
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input className='todo-input' type='text' placeholder='add todo' value={value} onChange={e => setValue(e.target.value)} />
            <button type='submit' className='todo-btn'>Add Todo</button>
        </form>
    )
}

export default TodoForm