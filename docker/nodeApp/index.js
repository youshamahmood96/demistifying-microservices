import express from 'express';
const app = express();

app.get('/', (req, res) => {
     res.send("Hi there")
})

app.listen(8000,()=>{
    console.log("listening on 8000");
})