import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();
app.use(bodyParser.json());

app.post('/events',async (req, res) => {
    const {type,data} = req.body
    if(type === 'commentCreated'){
        const status = data.content.includes('orange') ? 'rejected' : 'approved'
        await axios.post('http://localhost:4005/events',{
            type: 'commentModerated',
            data:{
                id:data.id,
                postId:data.postId,
                status,
                content:data.content
            }
        })
    }
    res.send({})
})

app.listen(4003,()=>{
    console.log('Listening to 4003');
})