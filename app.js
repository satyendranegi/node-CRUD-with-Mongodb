const express = require('express');
const mongose = require('mongoose');

const url = 'mongodb://localhost/EmployeesDB'
const app = express();
mongose.connect(url, {useNewUrlParser: true});

const con = mongose.connection

con.on('open', function(){
    console.log('Connected....');
})

app.use(express.json())

const empRouter = require('./routes/employees') ;
app.use('/employees', empRouter);

app.listen(3000, function(){
    console.log('server started');
});

