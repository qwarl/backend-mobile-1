const express=require('express')
const router=express.Router()
const phongLogsController=require('../app/controllers/PhongLogsController')

router.get('/getAll', phongLogsController.getAll);
router.post('/create', phongLogsController.create);
router.post('/update/:_id', phongLogsController.update);
router.get('/search', phongLogsController.search);

module.exports=router