import React from "react";

export const TaskList = (props) => {
  return (
    <div className="mt-3">
      <ul>
        {props.tasks.map((task) => (
          <li className="mt-2">
            {task} <button className="btn btn-danger btn-sm">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
