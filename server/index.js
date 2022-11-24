import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import TransactionItem from './models/TransactionItem.js'

dotenv.config();


const app = express();
app.use(express.json()) 

app.post('/transactionItem', async(req, res) =>{
    const {title, amount, itemType, note} = req.body
   
    const newTransactionItem = new TransactionItem({
        title: title,
        amount: amount,
        itemType: itemType,
        note: note
    })
   
    const savedItem = await newTransactionItem.save()
   
    res.send({
        message: 'data saved successfully',
        data:  savedItem
    })
})

app.get('/transactionItem', async (req, res)=>{
    const transactionItems = await TransactionItem.find()

    res.send({
        message: 'data fetched successfully',
        data: transactionItems
    })
})

mongoose.connect(process.env.MONGO_DB_URL, () => {
    console.log("Connected to mongo DB📦")
})

app.listen(process.env.PORT || 5000, () => {
    console.log('server started running on port 5000📦')
})
