import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import Summary from '../components/Summary';

const Home = () => {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    const res = await axios.get('/api/transactions');
    setTransactions(res.data);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

 return (
  <div className="page-wrapper">
    <div className="container">
      <h1>Expense Tracker</h1>
      <Summary transactions={transactions} />
      <TransactionForm onAdd={fetchTransactions} />
      <TransactionList transactions={transactions} onDelete={fetchTransactions} />
    </div>

    <footer className="footer">
      <p>&copy; Copyright 2025</p>
      <p>Developed By Vinit Thote and Dattarya Mukde</p>
      <p>CONTACT: 7350515037</p>
    </footer>
  </div>
);

};

export default Home;