import { useState } from "react";
import ExpenseList from "./components/Expenses/ExpenseList";
import AddExpense from "./components/NewExpense/AddExpense";
import { expenses } from "./ExpenseSeed";

function App() {
  const [initialExpenses,setInitialExpenses]=useState(expenses);
  const AddExpenseHandler=(newexpense)=>{
    console.log(newexpense);
    setInitialExpenses(prev=>{
      return [newexpense,...prev]
    })
    console.log(initialExpenses);
  }
  return (
    <>
      <h1>Expense Tracker</h1>
      <AddExpense onAddExpense={AddExpenseHandler}/>
      <ExpenseList expenses={initialExpenses} />
    </>
  );
}

export default App;
