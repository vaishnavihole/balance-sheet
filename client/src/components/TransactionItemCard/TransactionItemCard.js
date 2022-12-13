import React from 'react'
import './TransactionItemCard.css'

function TransactionItemCard({ title, amount, itemType, category, note }) {
  return (
    <div className={`transaction-item-card-container  ${itemType}`} >
      <div className='transaction-item-card-title'>
        <span> {title} </span>
        <span> {amount} </span>
      </div>
      <div className='transaction-item-card-details'>
        <span>{note}</span>
        <span className='category-badge'>{category}</span>
      </div>
        <span className='delete-button'>
        🗑️
        </span>
    </div>
  )
}

export default TransactionItemCard;