import axios from "axios";

const API = "https://budget-visualizer-7767.onrender.com/api/transactions";

export const getTransactions = async () => {
  const res = await axios.get(API);
  return res.data;
};

export const createTransaction = async (txn) => {
  const res = await axios.post(API, txn);
  return res.data;
};
