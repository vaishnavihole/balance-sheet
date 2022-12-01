import React, {useState} from 'react';
import axios from 'axios'
import './AddTransaction.css'

function AddTransaction() {
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const [itemType, setItemType] =useState("")
    const [note, setNote] = useState("")
    const [category, setCategory] = useState("")
    
   function addTransactionItem() {
      const response = axios.post("/transactionItem",{
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

        alert("Transaction item added sucessfully!!🤗");
    }
    return (
        <div>
            <form>
                <div><input type='text' placeholder='Enter Title' value={title} onChange={(e)=>{setTitle(e.target.value)}} required /></div>
                <div><input type='text' placeholder='Enter Amount' value={amount} onChange={(e)=>{setAmount(e.target.value)}} required /></div>
                <div><input type='text' placeholder='Enter ItemType' value={itemType}  onChange={(e) =>{setItemType(e.target.value)}} required /></div>
                <div><input type='text' placeholder='Note' value={note} onChange={(e) =>{setNote(e.target.value)}} required /></div>
                <div><input type='text' placeholder='Category' value={category} onChange={(e) =>{setCategory(e.target.value)}} required /></div>
                <button type="button" onClick={addTransactionItem}>Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction