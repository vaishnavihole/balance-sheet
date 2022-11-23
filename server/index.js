import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();


const app = express();

mongoose.connect(process.env.MONGO_DB_URL, () => {
    console.log("Connected to mongo DB📦")
})

app.listen(process.env.PORT || 5000, () => {
    console.log('server started running on port 5000📦')
})
