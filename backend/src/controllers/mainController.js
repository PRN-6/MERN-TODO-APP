import todo from "../models/todoModel.js";

export async function getTodo (req , res){
    const todos = await todo.find()
    res.json(todos); 
}

export async function createTodo (req , res){
    const {text} = req.body
    const newTodo = await todo.create({text})
    res.json(newTodo);
}

export async function updateTodo (req , res){
    const todo = await todo.findByIdAndUpdate(req.params.id, req.body,{new : true})
    res.json(todo);
}

export async function deleteTodo ( req , res){
    await todo.findByIdAndDelete(req.params.id);
    res.json({message: "Todo deleted"})

}