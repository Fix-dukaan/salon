const express =require('express');
const {checkout,paymentVerification}=require('../controllers/paymentController')
 const router=express.Router();
 router.post('/checkout',checkout);//This request will work when a post is made to /api/payments/checkout 
 router.post('/verification',paymentVerification);//similar for this also


 module.exports= router;