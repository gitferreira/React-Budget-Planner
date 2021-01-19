import React, { useState, useEffect } from "react";
import Question from "./components/Question";
import Form from "./components/Form";
import List from "./components/List";
import BudgetController from "./components/BudgetController";

function App() {
  //Define State
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [question, setQuestion] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({});
  const [createExpense, setCreateExpense] = useState(false);

  //UseEffect to update remaining
  useEffect(() => {
    if (createExpense) {
      //Add Expense
      setExpenses([...expenses, expense]);
    }
    //Substarct from remaining
    console.log(expenses);
    const remainingBudget = remaining - expense.amount;
    setRemaining(remainingBudget);

    //Reset to false
    setCreateExpense(false);
  }, [expense]);

  return (
    <div className="container">
      <header>
        <h1>Weekly Budget</h1>
        <div className="contenido-principal contenido">
          {question ? (
            <Question
              setBudget={setBudget}
              setRemaining={setRemaining}
              setQuestion={setQuestion}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form
                  setExpense={setExpense}
                  setCreateExpense={setCreateExpense}
                />
              </div>
              <div className="one-half column">
                <List expenses={expenses} />
                <BudgetController budget={budget} remaining={remaining} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
export default App;
