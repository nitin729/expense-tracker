import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Book",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 1294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 4500,
      date: new Date(2021, 5, 12),
    },
  ];

  const addNewExpense = (expense) => {
    // setNewExpense([...expenses, expense]);
  };

  return (
    <div>
      <NewExpense onAddNewExpense={addNewExpense} />
      <Expenses expensesData={expenses} />
    </div>
  );
}

export default App;
