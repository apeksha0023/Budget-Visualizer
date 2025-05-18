import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

// Register chart elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const { transactions } = useContext(BudgetContext);

  const data = {
    labels: transactions.map(t => t.category),
    datasets: [
      {
        label: "Amount",
        data: transactions.map(t => t.amount),
        backgroundColor: transactions.map(t =>
          t.type === "income" ? "#4ade80" : "#f87171"
        ),
      },
    ],
  };

  return <Bar data={data} key={JSON.stringify(data)} />;
};

export default BarChart;
