import React, { useState, useEffect } from 'react'
import './Dashboard.css'
import TransactionItemCard from '../../components/TransactionItemCard/TransactionItemCard'

function Dashboard() {
  const transactionItems = [{ title: "ABC", amount: 12, itemType: "receivable", category: "school fees", note: "Hii" }, { title: "PQR", amount: 50, itemType: "payable", category: " shopping", note: "Hello" }, { title: "XYZ", amount: 39, itemType: "receivable", category: "clg fees", note: "Hii" }, { title: "WXY", amount: 12, itemType: "receivable", category: "clg fees", note:"Hello" }]
  return (
    <div>
      <h1>Dashboard</h1>
      <div className='row'>
        <div className='col-md-6'>
          <h2>Transaction Item</h2>
          {
            transactionItems.map((item, index) => {
              return (
                <TransactionItemCard title={item.title}  amount={item.amount}  itemType={item.itemType} category={item.category} note={item.note}/>
              )
            })
          }
        </div>
        <div className='col-md-6'>
        </div>
      </div>
    </div>
  )
}

export default Dashboard