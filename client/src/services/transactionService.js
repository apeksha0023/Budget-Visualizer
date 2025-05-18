import axios from "axios";

const API = "http://localhost:5000/api/transactions";

export const getTransactions = async () => {
  const res = await axios.get(API);
  return res.data;
};

export const createTransaction = async (txn) => {
  const res = await axios.post(API, txn);
  return res.data;
};
