const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const emp = require('../models/employee');

router.get('/', async(req, res) =>{
    try{

        const employees = await emp.find();
        return res.json(employees);
    } catch(err){
        res.send("Error "+err);
    }
})

router.get('/:id', async(req, res) =>{
    try{

        const employees = await emp.findById(req.params.id);
        return res.json(employees);
    } catch(err){
        res.send("Error "+err);
    }
})

router.post('/', async(req, res) => {
const emp1 = new emp({
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone
})
try{
const data = await emp1.save();
res.json(data);
} catch(err){
res.send("Error "+ err);
}
})


router.patch('/:id', async(req, res) =>{
    try{
        const employee = await emp.findById(req.params.id)
        employee.address = req.body.address
        const emp1 = await employee.save()
        res.send(emp1)
    } catch(erre){

        res.send("Error "+ err);
    }
})

router.delete('/', async(req, res) =>{
    try{
        const employee = await emp.findById(req.body.id)
        
        const emp1 = await employee.remove()
        res.send(emp1)
    } catch(erre){

        res.send("Error "+ err);
    }
})

module.exports = router