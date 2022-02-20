import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();
app.use(bodyParser.json());

app.post('/events',async (req, res) => {
    const event = req.body

    await axios.post('http://localhost:4000/events',event)
    await axios.post('http://localhost:4001/events',event)
    await axios.post('http://localhost:4002/events',event)

    res.send({
        status:'OK'
    })
})

app.post('/events', (req, res) => {
    console.log('Event',req.body.type)
    res.send({})
})

app.listen(4005,()=>{
    console.log('listening on 4005');
})