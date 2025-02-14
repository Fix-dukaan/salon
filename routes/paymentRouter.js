import express from 'express';
import {checkout,paymentVerification} from '../controllers/paymentController.js'
 const router=express.Router();
 router.post('/checkout',checkout);//This request will work when a post is made to /api/checkout 
 router.post('/verification',paymentVerification);//similar for this also


 export default router;