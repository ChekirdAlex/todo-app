import React, { Component } from "react";

import TaskList from "../task-list";
import NewTaskForm from "../new-task-form";
import Footer from "../footer";

import "./app.css"
export default class App extends Component {
    nextId = 4
    state = {
        todoData: [
            {description: "Completed task", creationTime: "created 17 seconds ago", done: false, editable: false, id: "item1"},
            {description: "Editing task", creationTime: "created 5 minutes ago", done: false, editable: false, id: "item2"},
            {description: "Active task", creationTime: "created 5 minutes ago", done: false, editable: false, id: "item3"},
        ],
        visible: "all"
    }
    createTodoItem(description) {
        return {
            description,
            creationTime: "now",
            done: false,
            editable: false,
            id: `item${this.nextId++}`
        }
    }
    toggleProperty = (arr, id, propName) => {
        const idx = arr.findIndex((item) => item.id === id)
        const oldItem = arr[idx]
        const newItem = {...oldItem, [propName]: !oldItem[propName]}

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ]
    }
    onToggleDone = (id) => {
        this.setState(({todoData}) => ({todoData: this.toggleProperty(todoData, id, "done")}))
    }
    editItem = (id) => {
        this.setState(({todoData}) => ({todoData: this.toggleProperty(todoData, id, "editable")}))
    }
    addItem = (description) => {
        const newItem = this.createTodoItem(description)

        this.setState(({todoData}) => {
            const newArr = [...todoData, newItem]
            return {
                todoData: newArr
            }
        })
    }
    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((item) => item.id === id)
            const newArr = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ]
            return {
                todoData: newArr
            }
        })
    }
    onSubmit = (evt) => {
        if (evt.keyCode === 13) {
            this.addItem(evt.target.value)
            evt.target.value = ""
        }
    }
    onToggleVis = (selector) => {
        this.setState(() => ({visible: selector}))
    }
    showList = (visibility) => {
        const { todoData } = this.state
        switch (visibility) {
            case "all": return todoData
            case "active": return todoData.filter((item) => !item.done)
            default: return todoData.filter((item) => item.done)
        }
    }
    render() {
        const { todoData, visible } = this.state
        const doneCount = todoData.filter((item) => item.done).length
        const activeCount = todoData.length - doneCount
        const visibleList = this.showList(visible);
        console.log(visibleList)
        return (
            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <NewTaskForm addItem={this.addItem} onSubmit={this.onSubmit} />
                </header>
                <section className="main">
                    <TaskList todoData={todoData}
                              onToggleDone={ this.onToggleDone }
                              editItem={this.editItem}
                              deleteItem={this.deleteItem}
                              onSubmit={this.onSubmit}/>
                    <Footer activeCount={activeCount}
                            visible={visible}
                            onToggleVis={this.onToggleVis} />
                </section>
            </section>
        )
    }
}