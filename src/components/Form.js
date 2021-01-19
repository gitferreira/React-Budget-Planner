import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";

const Form = ({ setExpense, setCreateExpense }) => {
  //State
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);

  //Add Expenses
  const addExpense = (e) => {
    e.preventDefault();

    //Validate
    if (amount < 1 || isNaN(amount) || name.trim() === "") {
      setError(true);
      return;
    }

    //Build expense
    const expense = {
      name,
      amount,
      id: shortid.generate(),
    };

    //Pass to Principal Component
    setExpense(expense);
    setCreateExpense(true)

    //Reset Form
    setName("");
    setAmount(0);
  };

  return (
    <form onSubmit={addExpense}>
      <h2>Expenses</h2>
      {error ? <Error message="Invalid input" /> : null}
      <div className="campo">
        <label> Expense Name</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="i.e. Dinner"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Amount</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="i.e. 300"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value), 10)}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Add Expense"
      />
    </form>
  );
};

export default Form;
