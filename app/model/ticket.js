const mongoose=require('mongoose')

const Schema= mongoose.Schema

const TicketSchema=new Schema({
    customer:{
        // type:String
      
        type:Schema.Types.ObjectId,
        ref:'Customer'
    },
    department:{
        // type:String
      
        type:Schema.Types.ObjectId,
        ref:'Department'
    },
    priority:{
        type:String
    },
    status:{
        type:Boolean,
        default:false
    },
    message:{
        type:String
    },
    ticketCode:{
        type:String
    }
})

const Ticket=mongoose.model('Ticket', TicketSchema)

module.exports=Ticket

