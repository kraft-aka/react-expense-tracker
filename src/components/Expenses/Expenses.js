import React, { useState } from "react";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

export default function (props) {
  const [filteredYear, setFilteredYear] = useState("2019");

  function expenseFilterHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onExpenseFilter={expenseFilterHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      {filteredExpenses.length === 0 && <p className='expenses-list__fallback'>No items found!</p>}
      {filteredExpenses.length > 0 && <ExpensesList item={filteredExpenses} />}
    </Card>
  );
}
