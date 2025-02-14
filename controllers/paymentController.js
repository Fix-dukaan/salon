import {instance} from '../server.js'
import crypto from 'crypto';
export const checkout=async(req,res)=>{
    const options={
        amount:Number(req.body.amount*100),
        currency:"INR"
    }
    const order=await instance.orders.create(options);
    res.send(order);

}
export const paymentVerification=async(req,res)=>{
    const {razorpay_order_id,razorpay_payment_id,razorpay_signature}=req.body;
    const body=razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature=crypto.createHmac("sha256",process.env.KEY_ID).update(body.toString()).digest("hex");
    const isAuthentic=expectedSignature===razorpay_signature;
    if(isAuthentic){
       //payment id and other payment details are saved to the database over here
       res.redirect(
        `http://${process.env.HOST}:3000/paymentsuccess?reference=${razorpay_payment_id}`
       );
    } 
    else{
       res.status(400).send("Failed to verify");
    }


}; 