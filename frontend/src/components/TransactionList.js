import React from 'react';
import axios from 'axios';

const TransactionList = ({ transactions, onDelete }) => {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/transactions/${id}`);
    onDelete();
  };

  return (
  <div className="transaction-list">
    <ul>
      {transactions.map((tx) => (
        <li className="transaction-item" key={tx._id}>
          <div className="transaction-info">
            <div className="transaction-title">{tx.title}</div>
            <div className="transaction-meta">
              <span className={`transaction-amount ${tx.type}`}>₹{tx.amount}</span>
              <span className={`transaction-type ${tx.type}`}>{tx.type}</span>
            </div>
          </div>
          <button 
            className="delete-btn"
            onClick={() => handleDelete(tx._id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);
};

export default TransactionList;