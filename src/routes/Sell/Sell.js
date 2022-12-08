const Router=require('express').Router()
const sell_controller=require('../../app/controllers/Shared/Sell.controller')

Router.get('/getAll',sell_controller.getAll)
Router.post('/create',sell_controller.create)
Router.get('/getById/:info',sell_controller.getById)    // info is _id of Booking
Router.post('/updateById/:info',sell_controller.updateById)   // info is _id of Booking

module.exports=Router