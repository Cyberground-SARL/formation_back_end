const express =require('express')
const router = express.Router()
//const {getGoals} = require ('../controllers/index.js')

 router.get('/',(req, res) =>{
    GETALL1(req.body)
 })

 router.get('/:id',(req, res) =>{
    GETTALL2(req.body)
 })
 
 router.post('/',(req, res) =>{
    GETALL3(req.body)
 })
 
 router.put('/:id',(req, res) =>{
    GETALL4(req.body)
 })

 // la requete delete non travaille pas
 
 router.delete('/:id',(req, res) =>{
    GETALL(req.body)
 })

 
 
 

 
