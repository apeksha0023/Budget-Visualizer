import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

const TransactionList = () => {
  const { transactions } = useContext(BudgetContext);

  return (
    <div className="mt-4">
      {transactions.map((txn) => (
        <div key={txn._id} className="flex justify-between p-2 border-b">
          <span>{txn.category}</span>
          <span className={txn.type === "income" ? "text-green-600" : "text-red-600"}>
            {txn.type === "income" ? "+" : "-"}₹{txn.amount}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
