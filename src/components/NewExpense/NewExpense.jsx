import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = ({ onAddNewExpense }) => {
  const [form, setForm] = useState(false);

  const submitExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString,
    };
    onAddNewExpense(expenseData);
  };
  const addFormHandler = () => {
    setForm(true);
  };
  const toggleFormHandler = () => {
    setForm(false);
  };

  return (
    <div className="new-expense">
      {!form ? (
        <button onClick={addFormHandler}>Add Expenses</button>
      ) : (
        <ExpenseForm
          onSubmitExpenseData={submitExpenseDataHandler}
          toggleFormHandler={toggleFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
