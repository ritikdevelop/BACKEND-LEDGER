const mongoose = require("mongoose");

const ledgerSchema = new mongoose.Schema({
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
    required: [true, "Account reference is required"],
    index: true,
    immutable: true, // Prevent changes to the account reference after creation
  },
  amount: {
    type: Number,
    required: [true, "Amount is required for creating a ledger entry"],
    immutable: true, // Prevent changes to the amount after creation
  },
  transaction: {},
  type: {
    type: String,
    enum: {
      values: ["CREDIT", "DEBIT"],
      message: "Type must be either CREDIT or DEBIT",
    },
    required: [
      true,
      "Transaction type is required for creating a ledger entry",
    ],
    immutable: true, // Prevent changes to the transaction type after creation
  },
});

function preventLedgerModification(next) {
  throw new Error(
    "Ledger entries are immutable and cannot be modified or deleted after creation.",
  );
}
