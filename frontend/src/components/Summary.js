import React from 'react';

const Summary = ({ transactions }) => {
  const income = transactions.filter(t => t.type === 'income').reduce((acc, t) => acc + t.amount, 0);
  const expense = transactions.filter(t => t.type === 'expense').reduce((acc, t) => acc + t.amount, 0);
  const balance = income - expense;

  return (
    <div className="summary-simple">
      <h3>Total Income: <span className="summary-income-value">₹{income}</span></h3>
      <h3>Total Expense: <span className="summary-expense-value">₹{expense}</span></h3>
      <h3>Balance: <span className="summary-balance-value">₹{balance}</span></h3>
    </div>
  );
};

export default Summary;