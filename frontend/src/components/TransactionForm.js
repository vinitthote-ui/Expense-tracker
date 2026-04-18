import React, { useState } from 'react';
import axios from 'axios';

const TransactionForm = ({ onAdd }) => {
  const [form, setForm] = useState({ title: '', amount: '', type: 'expense' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/transactions', form);
    setForm({ title: '', amount: '', type: 'expense' });
    onAdd();
  };

 return (
  <form className="transaction-form" onSubmit={handleSubmit}>
    <div className="form-group">
      <input 
        className="form-control"
        name="title" 
        value={form.title} 
        onChange={handleChange} 
        placeholder="Title" 
        required 
      />
    </div>
    <div className="form-group">
      <input 
        className="form-control"
        name="amount" 
        value={form.amount} 
        type="number" 
        onChange={handleChange} 
        placeholder="Amount" 
        required 
      />
    </div>
    <div className="form-group">
      <select 
        className="form-control form-select"
        name="type" 
        value={form.type} 
        onChange={handleChange}
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
    </div>
    <button className="form-submit" type="submit">Add Transaction</button>
  </form>
);
};

export default TransactionForm;