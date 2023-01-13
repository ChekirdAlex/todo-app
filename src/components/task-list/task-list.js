import React, { Component } from "react";
import PropTypes from "prop-types";

import Task from "../task";

import "./task-list.css"

export default class TaskList extends Component {
    static defaultProps = {
        todoData: [],
        onToggleDone: () => {},
        editItem: () => {},
        deleteItem: () => {}
    }
    static propTypes = {
        todoData: PropTypes.arrayOf(PropTypes.object),
        onToggleDone: PropTypes.func,
        editItem: PropTypes.func,
        deleteItem: PropTypes.func
    }
    render() {
        const { todoData, onToggleDone, editItem, deleteItem } = this.props

        const items = todoData.map(({id, ...itemProps}) => {
            let classNames = ""
            if (itemProps.done) classNames += "completed"
            if (itemProps.editable) classNames += "editing"

            const editing = <input type="text"
                                   className="edit"
                                   value={itemProps.description} />

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