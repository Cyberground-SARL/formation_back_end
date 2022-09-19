const express = require("express");
const router =express.Router();
const { getTask, UpdateTask,setTask,DeleteTask ,getOneTask} = require('../controllers/index')



router.get('/',getTask)
router.post('/',setTask)
router.get('/:id',getOneTask)
router.put('/:id',UpdateTask)
router.delete('/:id',DeleteTask)
    




module.exports = router;