import React, { Fragment, useState } from "react";
import Error from "../components/Error";

const Question = ({ setBudget, setRemaining, setQuestion }) => {
  //Define State
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);

  //Change Handler Function
  const changeHandler = (e) => {
    setAmount(parseInt(e.target.value), 10);
  };

  //Submit
  const addBudget = (e) => {
    e.preventDefault();

    //Validate
    if (amount < 1 || isNaN(amount)) {
      setError(true);
      return;
    }
    //Validated
    setError(false);
    setBudget(amount);
    setRemaining(amount);
    setQuestion(false);
  };

  return (
    <Fragment>
      <h2>What´s your Weekly Budget?</h2>
      {error ? <Error message="Invalid Budget" /> : null}
      <form onSubmit={addBudget}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Your weekly budget"
          onChange={changeHandler}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Define Budget"
        />
      </form>
    </Fragment>
  );
};

export default Question;
