const express=require('express')
const router=express.Router()
const ticketController=require('../app/controller/ticketController')
const customerController=require('../app/controller/customerController')
const departmentContrtoller=require('../app/controller/departmentController')

router.get('/tickets',ticketController.list)
router.post('/tickets',ticketController.create)
router.get('/tickets/:id',ticketController.show)
router.put('/tickets/:id',ticketController.update)
router.delete('/tickets/:id',ticketController.delete)


router.get('/customers',customerController.list)
router.post('/customers',customerController.create)
router.get('/customers/:id',customerController.show)
router.put('/customers/:id',customerController.update)
router.delete('/customers/:id',customerController.delete)

router.get('/departments',departmentContrtoller.list)
router.post('/departments',departmentContrtoller.create)
router.get('/departments/:id',departmentContrtoller.show)
router.put('/departments/:id',departmentContrtoller.update)
router.delete('/departments/:id',departmentContrtoller.delete)


module.exports=router