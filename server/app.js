const express=require('express')
const bodyParser=require('body-parser');
const cors=require('cors');
const app=express();


app.use(bodyParser.json());
app.use(cors());

app.get('/todos',(req,res)=>{
    const todos=[
        {
            title:'Todo One',
        },
        {
            title:'Todo Two',
        },
        {
            title:'Todo Three',
        },
        {
            title:'Todo Four',
        },
        {
            title:'Todo five',
        },
    ]
    res.send(todos);
})

app.listen(9000,()=>{
    console.log('listening at port 9000');
})