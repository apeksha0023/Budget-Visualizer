import Transaction from '../models/Transaction.js';

export const getAllTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find().sort({ date: -1 });
    res.json(transactions);
  } catch (error) {
    next(error);
  }
};

export const createTransaction = async (req, res, next) => {
  try {
    const { title, amount, type, category } = req.body;
    const newTransaction = new Transaction({ title, amount, type, category });
    const saved = await newTransaction.save();
    res.status(201).json(saved);
  } catch (error) {
    next(error);
  }
};

export const deleteTransaction = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Transaction.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Transaction not found' });
    res.json({ message: 'Transaction deleted' });
  } catch (error) {
    next(error);
  }
};
