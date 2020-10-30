import express from 'express';
import data from './data.js';
const app = express();

app.get('/api/products', (req, res) => {
    res.send(data.products);
})

app.get('/', (req, res) =>{
    res.send('Server Is ready');
});

const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`Server Is running On http://127.0.0.1:${port}`);
})