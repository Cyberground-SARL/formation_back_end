const {task}= require('../models/index')
const server = require('express')
app = server()
const bodyParser = require('body-parser')
// to be able to receive json file on data 
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

const getTask = async (req, res)=>{
    try {
        const tasks = await task.find(
            re.json(tasks)
        )
    }catch(error){
        res.status(500).send(error)

    }
   
    // Task = await task.findb()
    // res.json(Task)
}


const getOneTask =(req,res)=>{
    res.json({message :'get one Task'})
}


const setTask = async(req, res)=>{
    const {name,description}=req.body
    try{
        const newTask = await task.create({name,description});
        res.json(newTask)
    }catch(error){
        res.status(500).send(error)
    }

    // const Task = await task.create({
    //     name: req.body
    // })
   
}



const UpdateTask = async(req, res)=>{
    const Task = await task.findById(req.params.id)
    if (!Task){
        res.status(400)
        throw new error('task not found')
    }

    const UpdateTask = await task.findByIdAndUpdate(req.params.id, req.
        body,{
        new:true,
    })
    res.json(UpdateTask)
}



const DeleteTask = (req, res)=>{
    res.json({message :`Delete goal ${req.params.id}`})
}






module.exports ={
    getTask,
    getOneTask,
    setTask,
    UpdateTask,
    DeleteTask,
}