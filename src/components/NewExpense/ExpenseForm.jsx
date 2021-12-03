import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSubmitExpenseData }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");

  /*   const [userInput, setUserInput] = useState({
    newTitle: "",
    newAmount: "",
    newDate: "",
  }); */

  const addTitle = (e) => {
    if (e.target.value === "") {
      alert("Please enter a title");
    } else {
      setNewTitle(e.target.value);
      /*  setUserInput({ ...userInput, newTitle: e.target.value }); */
    }
  };

  const addAmount = (e) => {
    setNewAmount(e.target.value);
    /* setUserInput({ ...userInput, newDate: e.target.value }); */
  };

  const addDate = (e) => {
    setNewDate(e.target.value);
    /* setUserInput({ ...userInput, newDate: e.target.value }); */
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const expenses = {
      title: newTitle,
      amount: newAmount,
      date: new Date(newDate),
    };
    //expenses is being passed as an argument to onSubmitExpenseData. This will allow us to send data from this component to parent component i.e NewExpenses
    onSubmitExpenseData(expenses);
    setNewTitle("");
    setNewAmount("");
    setNewDate("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={newTitle} onChange={addTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={newAmount}
            onChange={addAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            value={newDate}
            onChange={addDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expenses</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
