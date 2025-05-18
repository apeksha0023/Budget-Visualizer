import { createContext, useState, useEffect } from "react";
import { getTransactions, createTransaction } from "../services/transactionService";

export const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  const fetchData = async () => {
    const data = await getTransactions();
    setTransactions(data);
  };

  const addTransaction = async (txn) => {
    const newTxn = await createTransaction(txn);
    setTransactions(prev => [...prev, newTxn]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <BudgetContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </BudgetContext.Provider>
  );
};
