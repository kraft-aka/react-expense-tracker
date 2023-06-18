import React, { useState, useEffect } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // variable to show add expenseFrom
  const [isShown, setIsShown] = useState(false);

  function titleChangeHandler(e) {
    setEnteredTitle(e.target.value);
  }

  function amountChangeHandler(e) {
    setEnteredAmount(e.target.value);
  }

  function dateChangeHandler(e) {
    setEnteredDate(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setIsShown(false);
  }

  function showHandler() {
    setIsShown(true);
  }

  function cancelHandler(e) {
    e.preventDefault();
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setIsShown(false);
  }

  if (!isShown) {
    return <button onClick={() => setIsShown(true)}>Add New Expenses</button>;
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__constrols">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button className="submit" type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button className="submit" type="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
}
