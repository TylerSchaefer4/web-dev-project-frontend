import React from "react";
// import tuitsArray from "./tuits.json";
import TuitSummaryItem from "./tuit-summary-item";
import { useSelector } from "react-redux";

const TuitSummaryList = () => {
  const { tuits } = useSelector((state) => state.tuits);
  console.log("tuits: ", tuits);
  return (
    <ul className="list-group">
      {tuits.map(
        (tuit) => (
          console.log("tuit in summary list: ", tuit),
          (<TuitSummaryItem key={tuit._id} tuit={tuit} />)
        )
      )}
    </ul>
  );
};
export default TuitSummaryList;
