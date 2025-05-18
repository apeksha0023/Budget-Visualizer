import { useState, useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

const TransactionForm = () => {
  const { addTransaction } = useContext(BudgetContext);
  const [formData, setFormData] = useState({ 
    title: "",           // Add this line
    type: "income", 
    category: "", 
    amount: "" 
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.category || !formData.amount) return;  // Validate title too
    addTransaction(formData);
    setFormData({ title: "", type: "income", category: "", amount: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <div className="flex gap-2 mb-2">
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="flex-1 border px-2"
        />
        <select 
          value={formData.type} 
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input
          type="text"
          placeholder="Category"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="flex-1 border px-2"
        />
        <input
          type="number"
          placeholder="Amount"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          className="w-24 border px-2"
        />
        <button className="bg-blue-500 text-white px-4 py-1 rounded">Add</button>
      </div>
    </form>
  );
};

export default TransactionForm;
