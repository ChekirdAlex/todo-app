import React, { Component } from "react";
import PropTypes from "prop-types";

import "./task-filter.css"

export default class TaskFilter extends Component {
    static defaultProps = {
        onToggleVis: () => {}
    }
    static propTypes = {
        onToggleVis: PropTypes.func
    }
    state = {
        selected: "all"
    }
    onToggleSelect = (btn) => {
        this.setState(() => ({selected: btn}))
        this.props.onToggleVis(btn)
    }
    render() {
        const { selected } = this.state
        return (
            <ul className="filters">
                <li>
                    <button className={(selected === "all") ? "selected" : ""}
                            onClick={() => this.onToggleSelect("all")}>All</button>
                </li>
                <li>
                    <button className={(selected === "active") ? "selected" : ""}
                            onClick={() => this.onToggleSelect("active")}>Active</button>
                </li>
                <li>
                    <button className={(selected === "completed") ? "selected" : ""}
                            onClick={() => this.onToggleSelect("completed")}>Completed</button>
                </li>
            </ul>
        )
    }
}