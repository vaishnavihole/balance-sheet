import React, { useState } from 'react';
import axios from 'axios'
import './AddTransaction.css'

function AddTransaction() {
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const [itemType, setItemType] = useState("")
    const [note, setNote] = useState("")
    const [category, setCategory] = useState("")

    async function addTransactionItem() {
        const response = await axios.post("/transactionItem", {
            title: title,
            amount: amount,
            itemType: itemType,
            note: note,
            category: category
        })
        console.log(response.data)
        setTitle("")
        setAmount("")
        setItemType("")
        setNote("")
        setCategory("")

        if (response.data.status === true) {

            alert("Transaction item added sucessfully!!🤗");
        }
        else {
            
            alert(response.data.message)
        }

    }
    return (
        <div>
            <div className='heading-container'>
                <h1 className='heading'>💰 Add Transaction</h1>
            </div>
            <div className='form-container'>
                <form>
                    <div>
                        <input className='form-input'
                            type='text' placeholder='Enter Title' value={title}
                            onChange={(e) => { setTitle(e.target.value) }} required />
                    </div>

                    <div>
                        <input className='form-input'
                            type='text' placeholder='Enter Amount' value={amount}
                            onChange={(e) => { setAmount(e.target.value) }} required />
                    </div>

                    <div>
                        <input className='form-input'
                            type='text' placeholder='Enter ItemType' value={itemType}
                            onChange={(e) => { setItemType(e.target.value) }} required />
                    </div>

                    <div>
                        <input className='form-input'
                            type='text' placeholder='Note' value={note}
                            onChange={(e) => { setNote(e.target.value) }} required />
                    </div>

                    <div>
                        <input className='form-input'
                            type='text' placeholder='Category' value={category}
                            onChange={(e) => { setCategory(e.target.value) }} required />
                    </div>

                    <div className='btn-add-transaction-container'>
                        <button className='btn-add-transaction'
                            type="button" onClick={addTransactionItem}>Add Transaction</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddTransaction