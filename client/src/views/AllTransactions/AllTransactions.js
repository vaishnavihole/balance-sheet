import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './AllTransactions.css'
import TransactionItemCard from '../../components/TransactionItemCard/TransactionItemCard'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'


function AllTransactions() {
  const [transactionItems, setTransactionItems] = useState([])

  useEffect(() => {
    async function loadData() {
      const res = await axios.get('/transactionItem')
      setTransactionItems(res.data.data)
    }
    loadData()
  }, [])

  return (
    <div>
      <Navbar />
      <div className='heading-container'>
        <h1 className='heading'>💰 All Transactions</h1>
      </div>

      <div className='all-transaction-container'>
        {
          transactionItems.map((item, index) => {
            return (
              <TransactionItemCard title={item.title} amount={item.amount} itemType={item.itemType} category={item.category} note={item.note}   itemId={item._id} />
            )
          })
        }
        
      </div>

    <Footer />
    </div>

  )
}

export default AllTransactions