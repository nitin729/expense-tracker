import { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";

const Expenses = ({ expensesData }) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const onRecievingNewYearValue = (selectedNewYear) => {
    setFilteredYear(selectedNewYear);
  };

  const filteredExpenses = expensesData.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      {/*selectedFilteredYear is sent baack to ExpensesFilter for two way binding*/}
      <Card className="expenses">
        <ExpensesFilter
          onNewYearValue={onRecievingNewYearValue}
          selectedFilteredYear={filteredYear}
        />

        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
