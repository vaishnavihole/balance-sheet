import React from 'react'
import './TransactionItemCard.css'

function TransactionItemCard({ title, amount, itemType, category, note }) {
  return (
    <div className={`transaction-item-card-container  ${itemType}`} >
      <div className='transaction-item-card-title'>
       <span> {title} </span>
       <span> {amount} </span>
      </div>
      <div className='transaction-item-card-category'>
      {category}
      </div>
      <div className='transaction-item-card-note'>
       {note}   
      </div>
    </div>
  )
}

export default TransactionItemCard;