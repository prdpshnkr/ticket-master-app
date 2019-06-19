const express=require('express')
const mongoose=require('./config/database')
const router=require('./config/router')
const cors=require('cors')
const port=3006
const app=express()


app.use(express.json())
app.use((cors()))

app.use('/',router)

app.listen(port,()=>{
    console.log('listening to port',port)
})
