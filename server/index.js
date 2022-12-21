import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
const __dirname = path.resolve();
import TransactionItem from './models/TransactionItem.js'
import User from './models/User.js'


dotenv.config();


const app = express();
app.use(express.json())

app.post('/transactionItem', async (req, res) => {
    const { title, amount, itemType, note, category } = req.body

    const errorMessages = []

    if (!title) {
        errorMessages.push('title')
    }
    if (!amount) {
        errorMessages.push('amount')
    }
    if (!itemType) {
        errorMessages.push('itemtype')
    }
    if (!note) {
        errorMessages.push('note')
    }

    if (!category) {
        errorMessages.push('category ')
    }

    if (errorMessages.length > 0) {
        return res.send({
            status: false,
            message: errorMessages + " cannot empty"
        })
    }

    const newTransactionItem = new TransactionItem({
        title: title,
        amount: amount,
        itemType: itemType,
        category: category,
        note: note
    })

    const savedItem = await newTransactionItem.save()

    res.send({
        status: true,
        message: 'data saved successfully',
        data: savedItem
    })
})

app.get('/transactionItem', async (req, res) => {
    const transactionItems = await TransactionItem.find()
    res.send({
        message: 'data fetched successfully',
        data: transactionItems
    })
})

app.get('/receivables', async (req, res) => {
    const receivables = await TransactionItem.find({
        itemType: 'receivable'
    })

    res.send({
        message: 'receivable item fetched successfully',
        data: receivables
    })
})

app.get('/payables', async (req, res) => {
    const payables = await TransactionItem.find({
        itemType: 'payable'
    })

    res.send({
        message: 'payables item  fetched successfully',
        data: payables
    })
})


app.get('/calculations', async (req, res) => {
    const rps = await TransactionItem.find({})

    let totalPayable = 0
    let totalReceivable = 0
    let totalBalance = 0

    rps.forEach((transactionItem) => {
        if (transactionItem.itemType === "receivable") {
            totalReceivable = totalReceivable + transactionItem.amount
        }
        else {
            totalPayable = totalPayable + transactionItem.amount
        }
    })

    totalBalance = totalReceivable - totalPayable

    res.send({
        message: 'calcultion fetched successfully',
        totalPayable: totalPayable,
        totalReceivable: totalReceivable,
        totalBalance: totalBalance
    })
})


app.post('/deleteTransactionItem', async (req, res) => {
    const { itemId } = req.body
    const transactionItems = await TransactionItem.deleteOne({
        _id: itemId
    })
    res.send({
        message: 'item deleted successfully',
        data: null
    })
})

app.post('/signup', async (req, res) => {
    const {name,  email,  password} = req.body  
    const user = new User({
        name: name,
        email: email,
        password: password     
    })
    const savedUser = await user.save()
    res.json({
        success: true,
        data: savedUser,
        message: 'signup successfully'
    })
    
})

mongoose.connect(process.env.MONGO_DB_URL, () => {
    console.log("Connected to mongo DB📦")
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
    });
}

app.listen(process.env.PORT || 5000, () => {
    console.log('server started running on port 5000📦')
})


