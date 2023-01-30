import React, { Component } from 'react';

import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
import Footer from '../footer';

import './app.css';

export default class App extends Component {
  nextId = 1;

  state = {
    todoData: [],
    visible: 'all',
  };

  componentDidMount() {
    this.updateTime();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // handlers
  toggleProperty = (arr, id, propName, value = !arr[arr.findIndex((item) => item.id === id)][propName]) => {
    const idx = arr.findIndex((item) => item.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: value };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => ({ todoData: this.toggleProperty(todoData, id, 'done') }));
  };

  getTime = (minutes, seconds) => +minutes * 60 + +seconds;

  addItem = (description, minutes, seconds) => {
    const totalTime = this.getTime(minutes, seconds);
    const newItem = this.createTodoItem(description, totalTime);

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr,
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((item) => item.id === id);
      const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArr,
      };
    });
  };

  deleteDoneItems = () => {
    this.setState(({ todoData }) => {
      const newArr = todoData.filter((item) => !item.done);
      return {
        todoData: newArr,
      };
    });
  };

  onToggleVis = (selector) => {
    this.setState(() => ({ visible: selector }));
  };

  showList = (visibility) => {
    const { todoData } = this.state;
    switch (visibility) {
      case 'all':
        return todoData;
      case 'active':
        return todoData.filter((item) => !item.done);
      default:
        return todoData.filter((item) => item.done);
    }
  };

  // timer
  onPlayClicked = (id) => {
    this.setState(({ todoData }) => ({ todoData: this.toggleProperty(todoData, id, 'isTimerOn', true) }));
  };

  onPauseClicked = (id) => {
    this.setState(({ todoData }) => ({ todoData: this.toggleProperty(todoData, id, 'isTimerOn', false) }));
  };

  updateTime = () => {
    // const { todoData } = this.state;
    // clearInterval(this.interval);
    // this.interval = setInterval(() => {
    //   // eslint-disable-next-line array-callback-return
    //   todoData.map((item) => {
    //     if (item.isTimerOn) {
    //       const newTime = item.totalTime - 1;
    //       this.setState(() => ({ todoData: this.toggleProperty(todoData, item.id, 'totalTime', newTime) }));
    //     }
    //   });
    // }, 1000);
    this.interval = setInterval(() => {
      this.setState(({ todoData }) => {
        const newArr = todoData.map((item) => {
          if (item.totalTime === 0 || item.done) {
            return item;
          }
          if (item.isTimerOn) {
            // eslint-disable-next-line no-param-reassign
            item.totalTime -= 1;
          }
          return item;
        });
        return {
          todoData: newArr,
        };
      });
    }, 1000);
  };

  createTodoItem(description, totalTime) {
    return {
      description,
      totalTime,
      isTimerOn: false,
      creationTime: Date.now(),
      done: false,
      editable: false,
      id: `item${this.nextId++}`,
    };
  }

  render() {
    const { todoData, visible } = this.state;
    const doneCount = todoData.filter((item) => item.done).length;
    const activeCount = todoData.length - doneCount;
    const visibleList = this.showList(visible);
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm addItem={this.addItem} />
        </header>
        <section className="main">
          <TaskList
            todoData={visibleList}
            onToggleDone={this.onToggleDone}
            deleteItem={this.deleteItem}
            onPlayClicked={this.onPlayClicked}
            onPauseClicked={this.onPauseClicked}
          />
          <Footer activeCount={activeCount} onToggleVis={this.onToggleVis} deleteDoneItems={this.deleteDoneItems} />
        </section>
      </section>
    );
  }
}
