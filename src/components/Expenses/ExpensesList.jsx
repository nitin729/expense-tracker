import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ filteredExpenses }) => {
  if (filteredExpenses.length === 0) {
    return <p className="expenses-list__fallback">No Expenses Found</p>;
  }
  return (
    <ul className="expenses-list">
      {filteredExpenses.map((item) => (
        <ExpenseItem
          key={item.id}
          date={item.date}
          title={item.title}
          amount={item.amount}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
