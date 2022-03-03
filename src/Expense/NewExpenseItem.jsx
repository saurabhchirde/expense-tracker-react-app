import { useState } from "react";
import "./NewExpenseItem.css";
import uuid from "react-uuid";

const NewExpenseItem = (props) => {
  const [showNewInput, setShowNewInput] = useState(false);
  const [showInputError, setShowInputError] = useState(false);

  const [newExpense, setNewExpense] = useState({
    id: uuid(),
    title: "",
    amount: "",
    date: "",
  });

  const newExpenseItemBtnHandler = () => {
    setShowNewInput(true);
  };

  const onDoubleClickHandler = () => {
    setShowNewInput(!showNewInput);
  };

  const newExpenseHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewExpense((preExpense) => {
      return {
        ...preExpense,
        [name]: value,
      };
    });
  };

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    if (
      newExpense.title === "" ||
      newExpense.amount === "" ||
      newExpense.date === ""
    ) {
      setShowInputError(true);
      setTimeout(() => {
        setShowInputError(false);
      }, 4000);
    } else {
      setShowInputError(false);
      props.onNewItem(newExpense);
      setNewExpense({
        id: uuid(),
        title: "",
        amount: "",
        date: "",
      });
    }
  };

  return (
    <>
      <div
        className="newExpenseItem-container"
        onDoubleClick={onDoubleClickHandler}
      >
        {!showNewInput && (
          <div className="newExpenseItem-btn-container">
            <button
              onClick={newExpenseItemBtnHandler}
              className="newExpenseItem-btn"
            >
              Add New Expense
            </button>
          </div>
        )}
        {showNewInput && (
          <form onSubmit={onFormSubmitHandler}>
            <div className="newExpenseItem-header">
              <h1> Add New Expense</h1>
              {showInputError && <h2>Some fields are empty, try again!</h2>}
            </div>
            <div className="newExpenseItem-input">
              <div className="newExpenseItem-title">
                <label>
                  Title
                  <input
                    type="title"
                    name="title"
                    autoComplete="off"
                    onChange={newExpenseHandler}
                    value={newExpense.title}
                    placeholder="enter title"
                  />
                </label>
              </div>
              <div className="newExpenseItem-amount">
                <label>
                  Amount
                  <input
                    type="amount"
                    name="amount"
                    autoComplete="off"
                    onChange={newExpenseHandler}
                    value={newExpense.amount}
                    placeholder="enter amount"
                  />
                </label>
              </div>
              <div className="newExpenseItem-date">
                <label>
                  Date
                  <input
                    type="date"
                    name="date"
                    autoComplete="off"
                    onChange={newExpenseHandler}
                    value={newExpense.date}
                  />
                </label>
              </div>
            </div>
            <div className="newExpenseItem-btns">
              <button type="submit">Add Expense</button>
              <button type="reset">reset</button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default NewExpenseItem;
