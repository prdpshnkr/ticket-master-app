const mongoose=require('mongoose')

//Schema -ocb

const Schema=mongoose.Schema

const DepartmentSchema=new Schema({
    name:{
        type:String,
        required:true
    }
})

const Department=mongoose.model('Department',DepartmentSchema)

module.exports=Department