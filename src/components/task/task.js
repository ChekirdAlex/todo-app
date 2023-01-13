import React, { Component } from "react";
import PropTypes from "prop-types";

import { formatDistanceToNow } from "date-fns";

import "./task.css"

export default class Task extends Component {
    static defaultProps = {
        description: "",
        creationTime: Date.now(),
        done: false,
        onToggleDone: () => {},
        editItem: () => {},
        deleteItem: () => {}
    }
    static propTypes = {
        description: PropTypes.string,
        creationTime: PropTypes.number,
        done: PropTypes.bool,
        onToggleDone: PropTypes.func,
        editItem: PropTypes.func,
        deleteItem: PropTypes.func
    }
    onCheckDone = (status) => {
        if (status) return true
        return false
    }
    render() {
        const { description, creationTime, done, onToggleDone, editItem, deleteItem } = this.props;

        const distanceCreation = formatDistanceToNow(creationTime, {addSuffix: true})

        return (
            <div className="view">
                <input type="checkbox" className="toggle" onClick={onToggleDone} defaultChecked={this.onCheckDone(done)} />
                <label>
                    <span className="description">{description}</span>
                    <span className="created"> сreated {distanceCreation}</span>
                </label>
                <button className="icon icon-edit" onClick={editItem}></button>
                <button className="icon icon-destroy" onClick={deleteItem}></button>
            </div>
        )
    }
}