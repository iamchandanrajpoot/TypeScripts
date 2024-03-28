import { Router } from "express";
import {Todo} from '../models/todo'
const router = Router();

const todos : Todo[] = [];
type RequstBody = {text : string} 
type RequstParams = {paramId : string} 

router.get("/todos", (req, res) => {
    res.status(200).json({todos: todos})
});

router.post("/todo", (req, res)=>{
    const body = req.body as RequstBody
    const newTodo : Todo ={
        id: new Date().toISOString(),
        text: body.text
    }
    todos.push(newTodo);
    res.status(201).json({message: "todo added successfully"})
})

router.delete("/todos/:paramId",(req, res)=>{
    const params = req.params as RequstParams;
    const todoIndex = todos.findIndex((todo=> req.params.paramId === todo.id))
    if(todoIndex === -1){
        return res.status(404).json({message: "Item not found"})
    }
    todos.splice(todoIndex, 1);
    res.status(200).json({message: "todo delete succssfully"})
})
router.put("/todos/:paramId",(req, res)=>{
    const body = req.body as RequstBody
    const params = req.params as RequstParams;
    const todo =  todos.find(todo=> todo.id = params.paramId);
    if(!todo){
        return res.status(404).json({message: "Item not found"})
    }
    
    todo.text = body.text;

    res.status(200).json({message: "todo updated succssfully"})
})

export default router;