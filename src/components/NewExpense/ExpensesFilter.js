import React from "react";
import "./ExpensesFilter.css";

export default function ExpensesFilter(props) {
  return (
    <div className="expenses-filter">
      <label
        className="expenses-filter__label"
        htmlFor="filter-expenses"
        name="expenses-years"
      >
        Filter by Year
      </label>
      <select
        value={props.selected}
        name="expenses-year"
        id="filter"
        className="select"
      >
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
}
