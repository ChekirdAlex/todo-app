import React from "react";
import PropTypes from "prop-types";

import "./footer.css"
import TaskFilter from "../task-filter";

const Footer = ({ activeCount, onToggleVis, deleteDoneItems }) => {
    return (
        <footer className="footer">
            <span className="todo-count">{activeCount} items left</span>
            <TaskFilter onToggleVis={onToggleVis} />
            <button className="clear-completed"
                    onClick={deleteDoneItems}>Clear completed</button>
        </footer>
    )
}

Footer.defaultProps = {
    activeCount: 0,
    onToggleVis: () => {},
    deleteDoneItems: () => {}
}
Footer.propTypes = {
    activeCount: PropTypes.number,
    onToggleVis: PropTypes.func,
    deleteDoneItems: PropTypes.func
}
export default Footer