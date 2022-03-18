import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'

const Expenses = (props) => {

  const [filteredYear, setFilteredYear]= useState('2020');

  const filterChangeHandler=(selectyear)=>{
    setFilteredYear(selectyear);
  }

  const filteredExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
    <Card className='expenses'>
     <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
     {filteredExpenses.map(event=><ExpenseItem key={event.id} title={event.title} amount={event.amount} date={event.date}/>)}
     
    </Card>
    </div>
  )
}

export default Expenses
