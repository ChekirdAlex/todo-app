import React, { Component } from "react";

import "./task.css"

export default class Task extends Component {
    onToggleClick() {
        console.log(`Done: ${this.props.description}`)
    }
    render() {
        const {description, creationTime} = this.props;

        return (
            <div className="view">
                <input type="checkbox" className="toggle" onClick={this.onToggleClick}/>
                <label>
                    <span className="description">{description}</span>
                    <span className="created">{creationTime}</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy"></button>
            </div>
        )
    }
}