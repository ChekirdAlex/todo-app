import React, { Component } from "react";

import TaskList from "../task-list";
import NewTaskForm from "../new-task-form";
import Footer from "../footer";

import "./app.css"
export default class App extends Component {
    state = {
        todoData: [
            {description: "Completed task", creationTime: "created 17 seconds ago", id: "item1"},
            {description: "Editing task", creationTime: "created 5 minutes ago", id: "item2"},
            {description: "Active task", creationTime: "created 5 minutes ago", id: "item3"}
        ]
    }
    render() {
        return (
            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <NewTaskForm />
                </header>
                <section className="main">
                    <TaskList todos={this.state.todoData} />
                    <Footer />
                </section>
            </section>
        )
    }
}