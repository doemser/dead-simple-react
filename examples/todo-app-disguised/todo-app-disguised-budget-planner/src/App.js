import { useState } from "react";
import { nanoid } from "nanoid";

// This app is super cluttered and should definitely be split into components.
export default function App() {
  const [budget, setBudget] = useState(1337);
  const [editBudget, setEditBudget] = useState(false);

  const [expenseValue, setExpenseValue] = useState("");
  const [expenses, setExpenses] = useState(0);
  const [expensesList, setExpensesList] = useState([]);

  // If you want to calculate with two different states,
  // you usually do not need another state for this.
  const budgetLeft = budget + expenses;
  const percentOfBudgetLeft = budgetLeft / (budget / 100);

  return (
    <>
      <h1>Budget Planner</h1>

      <label>
        Budget:
        {editBudget ? (
          <input
            type="number"
            value={budget}
            onChange={(event) => {
              setBudget(Number.parseFloat(event.target.value));
            }}
          />
        ) : (
          <span> {budget}</span>
        )}
      </label>

      <br />

      <button
        type="button"
        onClick={() => {
          setEditBudget(!editBudget);
        }}
      >
        {editBudget ? "save" : "edit"}
      </button>
      <br />
      <span>Expenses: {expenses}</span>

      <hr />

      <label>
        {budgetLeft} ( {Math.round(percentOfBudgetLeft)}% ) of Budget left:
        <div
          style={{
            minHeight: "20px",
            background: `linear-gradient(90deg, rgba(16,172,132,1) ${percentOfBudgetLeft}%, rgba(195,6,86,1) ${percentOfBudgetLeft}%)`,
          }}
        />
      </label>

      <hr />

      <form
        onSubmit={(event) => {
          event.preventDefault();

          const expense = Number.parseFloat(expenseValue);
          const negatedExpense = expense < 0 ? expense : -expense;

          setExpensesList([
            {
              expense: negatedExpense,
              id: nanoid(6),
            },
            ...expensesList,
          ]);
          setExpenses(expenses + negatedExpense);
          setExpenseValue("");
        }}
      >
        <label>
          Add expense:
          <br />
          <input
            type="number"
            value={expenseValue}
            onChange={(event) => {
              setExpenseValue(event.target.value);
            }}
          />
        </label>
        <br />
        <button type="submit">add expense</button>
      </form>

      <hr />

      <h2>Expenses</h2>
      <ul>
        {expensesList.map((expense) => {
          return <li key={expense.id}>{expense.expense}</li>;
        })}
      </ul>
    </>
  );
}
