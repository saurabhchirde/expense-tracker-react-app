import React, { useState } from "react";
import ExpenseItemList from "./Expense/ExpenseItemList";
import NewExpenseItem from "./Expense/NewExpenseItem";
import uuid from "react-uuid";

const demoExpenses = [
  {
    id: uuid(),
    title: "AC Repair",
    amount: 1050,
    date: "2019-02-12",
  },
  {
    id: uuid(),
    title: "New Mobile",
    amount: 9500,
    date: "2020-02-08",
  },
  {
    id: uuid(),
    title: "Chair",
    amount: 6850,
    date: "2022-10-07",
  },
  {
    id: uuid(),
    title: "Car Service",
    amount: 3420,
    date: "2021-07-25",
  },
  {
    id: uuid(),
    title: "Recharge",
    amount: 599,
    date: "2021-06-15",
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(demoExpenses);

  const onNewItemHandler = (newExpense) => {
    setExpenses((preExpenses) => {
      return [newExpense, ...preExpenses];
    });
  };

  const onDeleteClickHandler = (id) => {
    // console.log(id);
    setExpenses((preExpenses) => {
      return preExpenses.filter((item) => {
        return item.id !== id;
      });
    });
  };

  const onFilteredYearHandler = (filteredYear) => {
    // console.log("From App", filteredYear);
    // setExpenses((preExpenses) => {
    //   return preExpenses.filter((item) => {
    //     // console.log(item.date);
    //     return item.date.includes(filteredYear);
    //   });
    // });
  };

  return (
    <div>
      <NewExpenseItem onNewItem={onNewItemHandler} />
      <ExpenseItemList
        id={expenses.id}
        expenseList={expenses}
        onDeleteClick={onDeleteClickHandler}
        onFilteredYear={onFilteredYearHandler}
      />
    </div>
  );
};

export default App;
