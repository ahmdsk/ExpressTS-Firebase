import express from "express"
import { editTodo, findTodo, getAll, newTodo, removeTodo } from "./contollers/todo.controller"

const router = express.Router()

router.get('/todos', getAll)
router.get('/todos/:id', findTodo)
router.post('/todos', newTodo)
router.delete('/todos/:id', removeTodo)
router.put('/todos/:id', editTodo)

export default router