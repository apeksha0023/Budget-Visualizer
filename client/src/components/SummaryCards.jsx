import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

const SummaryCards = () => {
  const { transactions } = useContext(BudgetContext);
  const income = transactions.filter(t => t.type === "income").reduce((acc, curr) => acc + Number(curr.amount), 0);
  const expense = transactions.filter(t => t.type === "expense").reduce((acc, curr) => acc + Number(curr.amount), 0);

  return (
    <div className="grid grid-cols-2 gap-4 my-4">
      <div className="bg-green-100 p-4 rounded shadow">
        <h3 className="text-green-700 font-bold">Total Income</h3>
        <p className="text-lg">₹{income}</p>
      </div>
      <div className="bg-red-100 p-4 rounded shadow">
        <h3 className="text-red-700 font-bold">Total Expense</h3>
        <p className="text-lg">₹{expense}</p>
      </div>
    </div>
  );
};

export default SummaryCards;
