import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm({ onSaveExpenseData }) {
  const initialValues = {
    title: "",
    amount: "",
    date: "",
  };

  const [userInput, setUserInput] = useState(initialValues);

  const onChangeHandler = (e) => {
    let { name, value } = e.target;

    setUserInput((prevState) => {
      return { ...prevState, [name]: value };
    });
  };


  const submitHandler = (e) => {
    e.preventDefault();
    setUserInput(initialValues);
    onSaveExpenseData(userInput);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={userInput.title}
            onChange={onChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={userInput.amount}
            onChange={onChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={userInput.date}
            onChange={onChangeHandler}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
