import React, { useState } from 'react';

function Transactions() {
  const transactionData = [
    { id: 1, type: "Buy", asset: "BTC", amount: "0.5", price: "$23,000", date: "2024-09-01", fee: "$2", total: "$11,500" },
    { id: 2, type: "Sell", asset: "ETH", amount: "1.0", price: "$1,600", date: "2024-09-02", fee: "$1.5", total: "$1,598.5" },
    { id: 3, type: "Buy", asset: "LTC", amount: "2.5", price: "$85.25", date: "2024-09-03", fee: "$0.75", total: "$212.50" },
    { id: 4, type: "Sell", asset: "XRP", amount: "1000", price: "$0.50", date: "2024-09-04", fee: "$0.10", total: "$499.90" },
  ];

  const [activeTransaction, setActiveTransaction] = useState(null);

  const toggleTransactionDetails = (id) => {
    setActiveTransaction(activeTransaction === id ? null : id);
  };

  return (
    <div className='py-[28px]'>
      <h2 className="text-black dark:text-white text-2xl font-semibold mb-4">Transactions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {transactionData.map((transaction) => (
          <div key={transaction.id} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold">{transaction.asset} - {transaction.type}</h3>
            <p className="mt-2"><strong>Amount:</strong> {transaction.amount}</p>
            <p className="mt-2"><strong>Price:</strong> {transaction.price}</p>
            <p className="mt-2"><strong>Date:</strong> {transaction.date}</p>
            <button 
              onClick={() => toggleTransactionDetails(transaction.id)} 
              className="text-blue-500 mt-4"
            >
              {activeTransaction === transaction.id ? "Hide Details" : "Show Details"}
            </button>
            {activeTransaction === transaction.id && (
              <div className="mt-4 bg-gray-100 dark:bg-gray-700 p-2 rounded">
                <h4 className="font-semibold">Transaction Details</h4>
                <p><strong>Fee:</strong> {transaction.fee}</p>
                <p><strong>Total:</strong> {transaction.total}</p>
                <p><strong>Status:</strong> Completed</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Transactions;
