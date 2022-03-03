import ExpenseItem from "./ExpenseItem";
import "./ExpenseItemList.css";
import FilterItemList from "./FilterItemList";

const ExpenseItemList = (props) => {
  const onDeleteClickHandler = (id) => {
    props.onDeleteClick(id);
    // console.log(id);
  };

  const onFilterOptionHandler = (filteredYear) => {
    props.onFilteredYear(filteredYear);
    // console.log("From Expense item list", filteredYear);
  };

  return (
    <div className="expenseList-container">
      <FilterItemList onFilterOption={onFilterOptionHandler} />
      {props.expenseList.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            id={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
            deleteClick={onDeleteClickHandler}
          />
        );
      })}
    </div>
  );
};

export default ExpenseItemList;
