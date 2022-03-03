import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const onDeleteHandler = () => {
    props.deleteClick(props.id);
    // console.log(props.id);
  };

  return (
    <>
      <div className="item-container">
        <div className="item-date">
          <h2>{props.date.slice(0, 4)}</h2>
          <h3>{props.date.slice(5, 7)}</h3>
          <h1>{props.date.slice(8)}</h1>
        </div>
        <div className="item-text">
          <div className="item-title">
            <h1>{props.title}</h1>
          </div>
          <div className="item-price">
            <h2>Rs. {props.amount}/-</h2>
          </div>
        </div>
        <div onClick={onDeleteHandler} className="item-delete">
          <i className="fas fa-trash"></i>
        </div>
      </div>
    </>
  );
};

export default ExpenseItem;
