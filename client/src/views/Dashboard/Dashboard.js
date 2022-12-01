import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Dashboard.css'
import TransactionItemCard from '../../components/TransactionItemCard/TransactionItemCard'

function Dashboard() {
  const [transactionItems, setTransactionItems] = useState([])

  useEffect(() => {
     async function loadData(){
      const  res= await axios.get('/transactionItem')
      setTransactionItems(res.data.data)
     }
     loadData()
  }, [])
  return (
    <div>
      <h1>Dashboard</h1>
      <div className='row'>
        <div className='col-md-6'>
          <h2>Transaction Item</h2>
          <div className='transaction-items-container'>
          {
            transactionItems.map((item, index) => {
              return (
                <TransactionItemCard title={item.title} amount={item.amount} itemType={item.itemType} category={item.category} note={item.note} />
              )
            })
          }
          </div>
        </div>
        <div className='col-md-6'>
        </div>
      </div>
    </div>
  )
}

export default Dashboard