import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import paymentRoute from'./routes/paymentRouter.js'
dotenv.config();
export const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api',paymentRoute);//This means that any request made to /api route will be forwared to the paymentRoute middleware




