const express = require('express')
// cette instruction est équivalent à
// import React from 'react'
const router = express.Router()
const {GETALL1,GETALL2,GETALL3,GETALL4,GETALL5}= require ('../controllers/index')
//cette fonction est express.Router est pour créer un nouvelle objet router
//const {getGoals} = require ('../controllers/index.js')
// On peut faires d'autre choces comme suite :
/*
var  express = require('express);
var app = express();
var PORT = 3000;

// Multiple routing 
var router1= express.Router()
var router2 = express.Router();
var router3=  express.Router()

router1.get('/user',function (req,res)){
console.log("User router working");
res.end();
});

router2.get('/admin', function (req, res, next) {
    console.log("Admin Router Working");
    res.end();
});

router2.get('/student', function (req, res, next) {
    console.log("Student Router Working");
    res.end();
});

app.use(router1);
app.use(router2);
app.use(router3);

*/
 router.get('/',(req, res) =>{
    GETALL1(req.body)
 })

 router.get('/:id',(req, res) =>{
    GETALL2(req.body)
 })
 
 router.post('/',(req, res) =>{
    GETALL3(req.body)
 })
 
 router.put('/:id',(req, res) =>{
    GETALL4(req.body)
 })

 router.delete('/:id',(req, res) =>{
    GETALL5(req.body)
 })

 module.exports = router;
 
 
 

 
