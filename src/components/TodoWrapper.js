import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid'
import Todo from './Todo'
import EditTodoForm from './EditTodoForm'

const TodoWrapper = () => {

    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
        console.log(todos);
    }
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const toggleComplete = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ))
    }
    const editTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    }
    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
    }


    return (
        <div className='TodoWrapper'>
            <h1>get thinks</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, i) => (
                todo.isEditing ? <EditTodoForm task={todo} key={todo.id}  editTodo={editTask} /> : <Todo task={todo} key={i} deleteTodo={deleteTodo} toggleComplete={toggleComplete} editTodo={editTodo} />
            ))}
        </div>
    )
}

export default TodoWrapper