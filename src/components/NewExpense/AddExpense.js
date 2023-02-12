import React from 'react'
import ExpenseForm from './ExpenseForm'
import './AddExpense.css'

export default function AddExpense({onAddExpense}) {
  const saveExpenseDateHandler=(userInput)=>{
    const expenseData={
        ...userInput,
        id:Math.random().toString(),
        date:new Date(userInput.date)
    }
    onAddExpense(expenseData);
  }  
  return (
    <div className='new-expense'>
    <ExpenseForm onSaveExpenseData={saveExpenseDateHandler}/>
    </div>
  )
}
