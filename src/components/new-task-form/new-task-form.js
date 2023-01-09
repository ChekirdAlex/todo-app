import React from "react";

import "./new-task-form.css"

const NewTaskForm = () => {
    return (
        <input type="text" className="new-todo" placeholder="What needs to be done?" autoFocus={true}/>
    )
}

export default NewTaskForm