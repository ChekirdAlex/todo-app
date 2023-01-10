import React from "react";

import "./footer.css"
import TaskFilter from "../task-filter/task-filter";

const Footer = ({ activeCount, visible, onToggleVis }) => {
    return (
        <footer className="footer">
            <span className="todo-count">{activeCount} items left</span>
            <TaskFilter visible={visible}
                        onToggleVis={onToggleVis} />
            <button className="clear-completed">Clear completed</button>
        </footer>
    )
}

export default Footer