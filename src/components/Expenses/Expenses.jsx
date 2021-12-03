import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = ({ expensesData }) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const onRecievingNewYearValue = (selectedNewYear) => {
    setFilteredYear(selectedNewYear);
  };
  return (
    <div>
      {/*selectedFilteredYear is sent baack to ExpensesFilter for two way binding*/}
      <Card className="expenses">
        <ExpensesFilter
          onNewYearValue={onRecievingNewYearValue}
          selectedFilteredYear={filteredYear}
        />

        {expensesData.map((item) => (
          <ExpenseItem
            date={item.date}
            title={item.title}
            amount={item.amount}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
