import ExpenseItem from "./ExpenseItem";
import "./ExpenseItemList.css";
// import FilterItemList from "./FilterItemList";

const ExpenseItemList = (props) => {
  const onDeleteClickHandler = (id) => {
    props.onDeleteClick(id);
    // console.log(id);
  };

  return (
    <div className="expenseList-container">
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
