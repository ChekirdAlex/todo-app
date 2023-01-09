import React from "react";

import Task from "../task";

import "./task-list.css"

const TaskList = ({ todos }) => {

    const items = todos.map(({id, ...itemProps}) => {
        return (
            <li key={id}>
                <Task {...itemProps} />
            </li>
        )
    })
    return (
        <ul className="todo-list">
            {items}
        </ul>
    )
}

export default TaskList

// <li className="completed">
//     <Task label={todos[0].label} creationTime={todos[0].startTime} />
// </li>
// <li className="editing">
//     <Task label={todos[1].label} creationTime={todos[1].startTime} />
//     <input type="text" className="edit" value="Editing task"/>
// </li>
// <li>
//     <Task label={todos[2].label} creationTime={todos[2].startTime} />
// </li>