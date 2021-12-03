import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = ({ expensesData }) => {
  return (
    <Card className="expenses">
      {expensesData.map((item) => (
        <ExpenseItem date={item.date} title={item.title} amount={item.amount} />
      ))}
    </Card>
  );
};

export default Expenses;
