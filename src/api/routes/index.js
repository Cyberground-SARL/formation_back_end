const router = require("express").Router();
const {
    GET_ALL, 
    GET_ONE, 
    CREATE_ONE, 
    DELETE_ONE,
    UPDATE_ONE } = require('../controllers')
router.route("/all").get((req,res)=>{
    GET_ALL(req,res);
});
router.route("/one/:id").get((req,res)=>{
    GET_ONE(req,res);
});
router.route("/create").post((req,res)=>{
    GCREATE_ONE(req,res);
});
router.route("/delete").put((req,res)=>{
    UPDATE_ONE(req,res);
});
router.route("/update").delete((req,res)=>{
    DELETE_ONE(req,res);
});

module.exports = router ;