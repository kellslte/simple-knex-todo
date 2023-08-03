import * as todoService from "../services/todo.service.js";

export const getAllTodos = async function (req, res) {
  try {
    const todos = await todoService.getTodos();

    return res.status(200).json({
      success: true,
      message: "Todos retrieved successfully",
      data: {
        todos: todos,
      },
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Error retrieving todos",
      error: {
        message: e.message,
        stack: e.stack,
      },
    });
  }
};

export const getSingleTodo = async function (req, res) {
  try {
    const todo = await todoService.getTodo(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Todo retrieved successfully",
      data: {
        todo: todo,
      },
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Error retrieving todos",
      error: {
        message: e.message,
        stack: e.stack,
      },
    });
  }
};

export const createSingleTodo = async function (req, res) {
  try {
    const todo = await todoService.createTodo({
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed,
    });

    return res.status(201).json({
      success: true,
      message: "Todo successfully added",
      data: {
        todo: todo,
      },
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Error retrieving todos",
      error: {
        message: e.message,
        stack: e.stack,
      },
    });
  }
};

export const updateSingleTodo = async function (req, res) {
  try {
    const { id } = req.params;
    const payload = req.body;

    const todo = await todoService.updateTodo(id, payload);

    return res.status(200).json({
      success: true,
      message: "Todo updated successfully",
      data: {
        todo: todo,
      },
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Error retrieving todos",
      error: {
        message: e.message,
        stack: e.stack,
      },
    });
  }
};

export const deleteSingleTodo = async function (req, res) {
  try {
    await todoService.deleteTodo(req.params.id);

    return res.status(204).json({
      success: true,
      message: "Todo deleted successfully",
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Error retrieving todos",
      error: {
        message: e.message,
        stack: e.stack,
      },
    });
  }
};
