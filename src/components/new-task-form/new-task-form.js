import React from "react";

import "./new-task-form.css"

const NewTaskForm = ({onSubmit}) => {
    return (
        <input type="text"
               className="new-todo"
               placeholder="What needs to be done?"
               autoFocus={true}
               onKeyDown={(evt) => onSubmit(evt)}/>
    )
}

export default NewTaskForm