import {app} from './app.js'
import Razorpay from 'razorpay';
import express from 'express'
export const instance=new Razorpay({
    key_id:process.env.KEY_ID,
    key_secret:process.env.SECRET
})
app.get('/',(req,res)=>{
    res.send("hello");
})
app.listen(process.env.PORT,process.env.HOST,()=>{
   console.log( "Server up and running boss");
});
//NOTE:Since the mobile device and the device on which the backend has been hosted can't connect through localhost, they must be connected to the same network such as a wifi. HOST is the ipv4 address of the device on which the server is ran, and port is the localhost address.
//* Any frontend post or get request, now has to specify the HOST address before the actual server's port address. Example - axios.post('http://192.168.2:5000'),where 5000 is the localhost address and 192.168.2 is the ip4 address of the network to which the device on which the frontend is displayed and the backend server is connected.
