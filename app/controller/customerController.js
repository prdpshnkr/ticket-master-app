const Customer=require('../model/customer')

module.exports.list=(req,res)=>{
    Customer.find()
    .then(customers=>{
        res.json(customers)
    })
    .catch(err=>{
        res.json(err)
    })
}

module.exports.create=(req,res)=>{
    const body=req.body
    const customer=new Customer(body)
    customer.save()
    .then(customer=>{
        res.json(customer)
    })
    .catch(err=>{
        res.json(err)
    })
}


module.exports.show=(req,res)=>{
    const id=req.params.id
    Customer.findById(id)
    .then(customer=>{
        res.json(customer)
    })
    .catch(err=>{
        res.json(err)
    })
}

module.exports.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    Customer.findByIdAndUpdate(id, body,{new:true})
    .then(customer=>{
        res.json(customer)
    })
    .catch(err=>{
        res.json(err)
    })
}

module.exports.delete=(req,res)=>{
    const id=req.params.id
    Customer.findByIdAndDelete(id)
    .then(customer=>{
        res.json(customer)
    })
    .catch(err=>{
        res.json(err)
    })
}