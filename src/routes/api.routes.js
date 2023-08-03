import { Router } from 'express';
import { createSingleTodo, deleteSingleTodo, getAllTodos, getSingleTodo, updateSingleTodo } from '../controllers/todo.controller.js';
const router = new Router();

// todo routes
router.get( '/todos', getAllTodos );
router.get( '/todos/:id', getSingleTodo );
router.post( '/todos', createSingleTodo );
router.patch( '/todos/:id', updateSingleTodo );
router.delete('/todos/:id', deleteSingleTodo);

export const appRouter = router;