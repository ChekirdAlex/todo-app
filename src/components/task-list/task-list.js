import React, { Component } from "react";

import Task from "../task";

import "./task-list.css"

export default class TaskList extends Component {
    render() {
        const { todoData, onToggleDone, editItem, deleteItem, onSubmit } = this.props

        const items = todoData.map(({id, ...itemProps}) => {
            let classNames = ""
            if (itemProps.done) classNames += "completed"
            if (itemProps.editable) classNames += "editing"

            const editing = <input type="text"
                                   className="edit"
                                   value={itemProps.description}
                                   onKeyDown={(evt) => onSubmit(evt)} />

            return (
                <li key={id} className={classNames}>
                    <Task
                        {...itemProps}
                        onToggleDone={() => onToggleDone(id)}
                        editItem={() => editItem(id)}
                        deleteItem={() => deleteItem(id)} />
                    {(itemProps.editable) ? editing : null}
                </li>
            )
        })
        return (
            <ul className="todo-list">
                {items}
            </ul>
        )
    }
}