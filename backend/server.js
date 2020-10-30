import express from 'express';
const app = express();

app.get('/', (req, res) =>{
    res.send('Server Is ready');
});

app.listen('5000', ()=>{
    console.log('Server Is running On http://127.0.0.1:5000');
})