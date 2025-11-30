import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TodoCard from '../components/TodoCard'
import NavBar from '../components/NavBar'

const HomePage = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
        const fetchNote = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/todos')
                console.log(res.data)
                setTodos(res.data)
            } catch (error) {
                console.log('error fetching', error)
            } finally {
                setLoading(false)
            }
        }
        fetchNote()
    }, [])
  return (
    <div className='min-h-screen'>
      <NavBar/>
      <div>
        {todos.length > 0 &&(
          <div className='grid grid-cols-1 '>
            {todos.map((todo , idx) => (
              <TodoCard key={todo._id} todo={todo}/>
            ))}

          </div>
        )}
      </div>
      
    </div>
  )
}

export default HomePage