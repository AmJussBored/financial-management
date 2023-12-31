import React, { useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import TransactionForm from "../TransactionForm";

export default function Transactions({ accounts, transactions }) {
  const [transactionform, setTransactionForm] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    setTransactionForm(!transactionform);
  };

  console.log(transactions)

  return (
    <div className="bg-white text-black">
      <div>
        <button className="btn btn-primary" onClick={handleAdd}>
          Add Transaction
        </button>
      </div>
      {transactionform && (
        <div className="fixed inset-0 z-50 overflow-x-hidden overflow-y-auto flex bg-black bg-opacity-50 justify-center items-center outline-none focus:outline-none">
          <TransactionForm accounts={accounts} exit={handleAdd} />
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="table">
          <thead className="text-black">
            <tr>
              <th>Account</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Remarks</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.data.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.name}</td>
                  <td>{transaction.type_of_account}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.date}</td>
                  <td>{transaction.remarks}</td>
                  <td className="space-x-3">
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-error btn-outline">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <div className="flex flex-row text-3xl">
            <div>
              <Link href={transactions.prev_page_url}><i class="ri-arrow-left-s-line"></i></Link>
            </div>
            <div>
              <Link href={transactions.next_page_url}><i class="ri-arrow-right-s-line"></i></Link>
            </div>
          </div>
        </table>
      </div>
    </div>
  );
}
