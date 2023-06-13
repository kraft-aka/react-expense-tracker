import React from 'react'
import './ExpensesFilter.css'

export default function ExpensesFilter() {
  return (
    <form action="" className='expenses-filter'>
      <label className='expenses-filter__label'>Filter by Year</label>
      <select name="" id="" className='select'>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </form>
  )
}
