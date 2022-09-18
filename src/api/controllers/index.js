
const getTask = (req, res)=>{
 console.log(req,body)

    res.json({message :'get Task'})
}

const getOneTask =(req,res)=>{
    res.json({message :'get one Task'})
}
const setTask = (req, res)=>{
    res.json({message :'set Task'})
}
const UpdateTask = (req, res)=>{
    res.json({message :`Update goal ${req.params.id}`})
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