import React from "react";
import PropTypes from "prop-types";

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
NewTaskForm.defaultProps = {
    onSubmit: () => {}
}
NewTaskForm.protoTypes = {
    onSubmit: PropTypes.func
}
export default NewTaskForm