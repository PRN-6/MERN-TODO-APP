import React from 'react'
import { Link } from 'react-router'

const TodoCard = ({todo}) => {
  return (
    <Link to={`/todo/${todo._id}`}
    className='card '>
        <h2 className='card-title'>{todo.text} HWLLO</h2>
       

    </Link>
  )
}

export default TodoCard