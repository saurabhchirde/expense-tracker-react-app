import { useState } from "react";
import "./FilterItemList.css";

const FilterItemList = (props) => {
  const [filteredYear, setFilteredYear] = useState(2019);

  const onFilterChangeHandler = (e) => {
    setFilteredYear(e.target.value);
    // console.log("From filterItem", filteredYear);
    props.onFilterOption(filteredYear);
  };

  return (
    <div className="filterItemList">
      <h2>Filter by Year</h2>
      <select
        value={filteredYear}
        onChange={onFilterChangeHandler}
        className="filterItemList-select"
      >
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
};

export default FilterItemList;
