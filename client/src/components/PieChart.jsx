import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";
import { categoryColors } from "../utils/constants";

// Register pie chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const { transactions } = useContext(BudgetContext);
  const expenseData = transactions.filter(t => t.type === "expense");
  const categories = [...new Set(expenseData.map(t => t.category))];

  const data = {
    labels: categories,
    datasets: [
      {
        data: categories.map(cat =>
          expenseData
            .filter(t => t.category === cat)
            .reduce((sum, t) => sum + Number(t.amount), 0)
        ),
        backgroundColor: categories.map(cat => categoryColors[cat] || "#ccc"),
      },
    ],
  };

  return <Pie data={data} key={JSON.stringify(data)} />;
};

export default PieChart;
