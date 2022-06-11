import React from "react";
import module from "./completedList.module.css";

const CompletedList = ({ completedList = [] }) => {
  return (
    <div className={module.completeList}>
      <h2 className={module.heading}>Completed..</h2>
      <div>
        {completedList && completedList.map((val) => {
          return (
            <h4  key={val.uuid} className={module.listName}>
              {val.name}
            </h4>
          );
        })}
      </div>
    </div>
  );
};

export default CompletedList;
