const mongoose=require('mongoose')

//Schema -ocb

const Schema=mongoose.Schema

const CustomerSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:String
    }
})

const Customer=mongoose.model('Customer',CustomerSchema)

module.exports=Customer