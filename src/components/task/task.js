import React, { Component } from "react";

import "./task.css"

export default class Task extends Component {
    render() {
        const { description, creationTime, onToggleDone, editItem, deleteItem } = this.props;

        return (
            <div className="view">
                <input type="checkbox" className="toggle" onClick={onToggleDone}/>
                <label>
                    <span className="description">{description}</span>
                    <span className="created">{creationTime}</span>
                </label>
                <button className="icon icon-edit" onClick={editItem}></button>
                <button className="icon icon-destroy" onClick={deleteItem}></button>
            </div>
        )
    }
}