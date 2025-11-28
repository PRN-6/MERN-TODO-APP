import express from 'express'
import { createTodo, deleteTodo, getTodo, updateTodo } from '../controllers/mainController'


const router = express.Router()

router.get('/',getTodo)
router.post('/',createTodo)
router.put('/:id',updateTodo)
router.delete('/:id',deleteTodo)


export default router