import React, { useState } from 'react';
import axios from 'axios'
import swal from 'sweetalert';
import './AddTransaction.css'

function AddTransaction() {
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const [itemType, setItemType] = useState("receivable")
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
            swal({
                title: 'success!',
                text: "Transaction add successfully🤗...",
                icon: 'success'
            })
        }
        else {
            swal({
                title: 'error!',
                text: response.data.message,
                icon: 'error'
            })
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

                    <div className='rp-radio-container'>
                        <span ><input className='rp-radio' type='radio' value='receivable' name='rp' onClick={(e) => { setItemType(e.target.value) }} checked="true"/>Receivable</span>
                        <span><input  className='rp-radio'type='radio' value='payable' name='rp' onClick={(e) => { setItemType(e.target.value) }} />Payable</span>
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