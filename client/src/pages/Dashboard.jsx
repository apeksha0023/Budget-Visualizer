import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import SummaryCards from "../components/SummaryCards";
import PieChart from "../components/PieChart";
import BarChart from "../components/BarChart";

const Dashboard = () => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Personal Budget Visualizer</h1>
      <TransactionForm />
      <SummaryCards />
      <TransactionList />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="bg-white p-4 rounded shadow"><PieChart /></div>
        <div className="bg-white p-4 rounded shadow"><BarChart /></div>
      </div>
    </div>
  );
};

export default Dashboard;
