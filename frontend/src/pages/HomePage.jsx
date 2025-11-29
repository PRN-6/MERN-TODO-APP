import React, { useEffect, useState } from 'react'
import axios from 'axios'

const HomePage = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        console.log("Fetching todos from http://localhost:5200/api/todos")
        const res = await axios.get('http://localhost:5200/api/todos')
        console.log("Response received:", res.data)
        setTodos(res.data)
        setLoading(false)
      } catch(error) {
        console.error("Error details:", error.response || error.message)
        setError(error.message)
        setLoading(false)
      }
    }
    fetchTodos()
  }, [])

  return (
    <div className="container">
      <h1>My Todos</h1>
      {error && <p style={{color: 'red'}}>Error: {error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>Total todos: {todos?.length || 0}</p>
          {Array.isArray(todos) && todos.length > 0 ? (
            <ul>
              {todos.map((todo) => (
                <li key={todo._id}>
                  <h3>{todo.text || JSON.stringify(todo)}</h3>
                </li>
              ))}
            </ul>
          ) : (
            <p>No todos yet. Create one!</p>
          )}
        </>
      )}
    </div>
  )
}

export default HomePage