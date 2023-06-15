import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

export default function (props) {
  const [year, setYear] = useState("2019");
  function expenseFilterHandler(selectedYear) {
    setYear(selectedYear);
  }
  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onExpenseFilter={expenseFilterHandler} />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
    </Card>
  );
}
