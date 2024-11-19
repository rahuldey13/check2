require('dotenv').config();

const express =require('express')

//express app
const app= express();


//routes
app.get('/', (req, res)=>{
    res.json({message: 'welcome to the app'})
})

//listening to requests
app.listen(process.env.PORT, ()=>{
    console.log("listening on port", process.env.PORT)
})


// process.env.PORT