const express=require('express');
const app=express();
const PORT= 9999;

app.use(express.json());

app.listen(
    PORT,
    ()=>console.log(`It's alive on http://localhost:${PORT}`)
)

app.get('/fire' /*route*/,(req,res)=>{
    res.status(200).send({
        tshirts:'Amani',
        size:'XL'
    })
}); 

app.post('/fire/:id',(req,res)=>{
    const {id}=req.params;
    const {logo}=req.body;

    if(!logo){
        res.status(418).send({
           message:"We need a logo!"
        })
    };

    res.send({
        tshirts:`Amani ${logo} and id is ${id}}`,
        size:'XL'
    });
});

