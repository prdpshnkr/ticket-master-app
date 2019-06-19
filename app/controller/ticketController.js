const Ticket=require('../model/ticket')

module.exports.list=(req,res)=>{
    Ticket.find()
    .then(tickets=>{
        res.json(tickets)
    })
    .catch(err=>{
        res.json(err)
    })
}

module.exports.create=(req,res)=>{
    const body=req.body
    const ticket=new Ticket(body)
    ticket.save()
    .then(ticket=>{
        res.json(ticket)
    })
    .catch(err=>{
        res.json(err)
    })
}


module.exports.show=(req,res)=>{
    const id=req.params.id
    Ticket.findById(id).populate('customer','department')
    .then(ticket=>{
        res.json(ticket)
    })
    .catch(err=>{
        res.json(err)
    })
}

module.exports.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    Ticket.findByIdAndUpdate(id, body,{new:true})
    .then(ticket=>{
        res.json(ticket)
    })
    .catch(err=>{
        res.json(err)
    })
}

module.exports.delete=(req,res)=>{
    const id=req.params.id
    Ticket.findByIdAndDelete(id)
    .then(ticket=>{
        res.json(ticket)
    })
    .catch(err=>{
        res.json(err)
    })
}