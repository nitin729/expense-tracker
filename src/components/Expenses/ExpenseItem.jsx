import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = ({ date, title, amount }) => {
  const [newTitle, setTitle] = useState(title);
  console.log("ExpenseItem evaluated by react");
  const clickHandler = () => {
    setTitle("updated");
    console.log(newTitle);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{newTitle}</h2>
        <div className="expense-item__price">Rs.{amount}</div>
      </div>
      <button onClick={clickHandler}>C M</button>
    </Card>
  );
};

export default ExpenseItem;
