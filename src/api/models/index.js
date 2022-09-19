const mongoose =require('mongoose')

const taskSchema = new mongoose.Schema({
   
    name :{
        type:String,
        require:true
    },
    description:{
        type:String
    }

})
//task collection 
module.exports = mongoose.model('task',taskSchema)