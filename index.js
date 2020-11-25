const express = require('express');
var router =express.Router();
const cors = require('cors');
const monk = require('monk')('localhost:27017/test');
var userData = monk.get('mydata')

//var url = 'mongodb://localhost:27017/test'

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        server: 'is online'
    });


});

app.post('/week', (req, res)=>{
    
    var temp = req.body;
    userData
    .insert(temp)
    .then(createdObj => {
        res.json(createdObj)
    })
    .then(() => monk.close())
});


app.get('/history', (req, res) => {
    userData
    .find()
    .then(data =>{
        res.json(data);
    });
})

app.listen(5000, () => {
    console.log('Listening in http://localhost:5000')
});
