import Transaction from '../models/Transaction.js';

// @desc    Get all transactions
// @route   GET /api/transactions
// @access  Public
export const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (err) {
    console.error('❌ Error fetching transactions:', err.message);
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
};

// @desc    Create a new transaction
// @route   POST /api/transactions
// @access  Public
export const createTransaction = async (req, res) => {
  try {
    const { text, amount } = req.body;

    if (!text || !amount) {
      return res.status(400).json({ error: 'Please provide text and amount' });
    }

    const newTransaction = new Transaction({ text, amount });
    const savedTransaction = await newTransaction.save();
    res.status(201).json(savedTransaction);
  } catch (err) {
    console.error('❌ Error creating transaction:', err.message);
    res.status(500).json({ error: 'Failed to create transaction' });
  }
};

// @desc    Delete a transaction
// @route   DELETE /api/transactions/:id
// @access  Public
export const deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }

    await transaction.deleteOne();
    res.status(200).json({ message: 'Transaction deleted' });
  } catch (err) {
    console.error('❌ Error deleting transaction:', err.message);
    res.status(500).json({ error: 'Failed to delete transaction' });
  }
};

