import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = ({ onAddNewExpense }) => {
  const submitExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString,
    };
    onAddNewExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpenseData={submitExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
