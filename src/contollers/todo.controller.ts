import { addTodo, deleteTodo, getAllTodos, getTodo, updateTodo } from "../model/todo.model"
import { db } from "../config/firebase"
import { Request, Response } from "express"
import { Timestamp } from "firebase/firestore"

async function getAll(req: Request, res: Response) {
    res.status(200).json({
        'status': true,
        'message': 'All Todo',
        'data': await getAllTodos(db)
    })
}

async function findTodo(req: Request, res: Response) {
    const todo = await getTodo(db, req.params.id)
    if(todo.exists()) {
        res.status(200).json({
            'status': true,
            'message': 'Todo Found',
            'data': todo.data()
        })
    } else {
        res.status(404).json({
            'status': false,
            'message': 'Todo Not Found'
        })
    }
}

async function newTodo(req: Request, res: Response) {
    const todo = {
        'todo': req.body.todo,
        'done': false,
        'createdAt': Timestamp.fromDate(new Date())
    }
    
    const addNewTodo = await addTodo(db, todo)

    if(addNewTodo) {
        const todo = await getTodo(db, addNewTodo.id)

        res.status(200).json({
            'status': true,
            'message': 'Add New Todo Successfully',
            'data': todo.data()
        })
    } else {
        res.status(500).json({
            'status': false,
            'message': 'Failed Add New Todo!'
        })
    }
}

async function removeTodo(req: Request, res: Response) {
    const todo = await deleteTodo(db, req.params.id)

    res.status(200).json({
        'status': true,
        'message': 'Delete Todo Successfully'
    })
}

async function editTodo(req: Request, res: Response) {
    const payload = {
        'todo': req.body.todo,
        'done': req.body.done
    }
    const todo = await updateTodo(db, req.params.id, payload)

    res.status(200).json({
        'status': true,
        'message': 'Update Todo Successfully'
    })
}

export { getAll, findTodo, newTodo, removeTodo, editTodo }