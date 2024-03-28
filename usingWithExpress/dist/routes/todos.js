"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const todos = [];
router.get("/todos", (req, res) => {
    res.status(200).json({ todos: todos });
});
router.post("/todo", (req, res) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text
    };
    todos.push(newTodo);
    res.status(201).json({ message: "todo added successfully" });
});
router.delete("/todos/:paramId", (req, res) => {
    const params = req.params;
    const todoIndex = todos.findIndex((todo => req.params.paramId === todo.id));
    if (todoIndex === -1) {
        return res.status(404).json({ message: "Item not found" });
    }
    todos.splice(todoIndex, 1);
    res.status(200).json({ message: "todo delete succssfully" });
});
router.put("/todos/:paramId", (req, res) => {
    const body = req.body;
    const params = req.params;
    const todo = todos.find(todo => todo.id = params.paramId);
    if (!todo) {
        return res.status(404).json({ message: "Item not found" });
    }
    todo.text = body.text;
    res.status(200).json({ message: "todo updated succssfully" });
});
exports.default = router;
