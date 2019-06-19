const Department=require('../model/department')

module.exports.list=(req,res)=>{
    Department.find()
    .then(departments=>{
        res.json(departments)
    })
    .catch(err=>{
        res.json(err)
    })
}

module.exports.create=(req,res)=>{
    const body=req.body
    const department=new Department(body)
    department.save()
    .then(department=>{
        res.json(department)
    })
    .catch(err=>{
        res.json(err)
    })
}


module.exports.show=(req,res)=>{
    const id=req.params.id
    Department.findById(id)
    .then(department=>{
        res.json(department)
    })
    .catch(err=>{
        res.json(err)
    })
}

module.exports.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    Department.findByIdAndUpdate(id, body,{new:true})
    .then(department=>{
        res.json(department)
    })
    .catch(err=>{
        res.json(err)
    })
}

module.exports.delete=(req,res)=>{
    const id=req.params.id
    Department.findByIdAndDelete(id)
    .then(department=>{
        res.json(department)
    })
    .catch(err=>{
        res.json(err)
    })
}