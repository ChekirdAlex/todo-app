import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './new-task-form.css';

export default class NewTaskForm extends Component {
  state = {
    description: '',
    minutes: '',
    seconds: '',
  };

  onLabelChange = (evt) => {
    const { target } = evt;
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  };

  onSubmit = (evt) => {
    const { addItem } = this.props;
    const { description, seconds, minutes } = this.state;
    evt.preventDefault();
    addItem(description, minutes, seconds);
    this.setState({
      description: '',
      minutes: '',
      seconds: '',
    });
  };

  render() {
    const { description, minutes, seconds } = this.state;
    return (
      <form className="new-todo-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="new-todo"
          name="description"
          placeholder="Task"
          onChange={this.onLabelChange}
          minLength={1}
          maxLength={20}
          value={description}
          required
          /* eslint-disable-next-line jsx-a11y/no-autofocus */
          autoFocus
        />
        <input
          type="text"
          className="new-todo-form__timer"
          name="minutes"
          value={minutes}
          placeholder="Min"
          onChange={this.onLabelChange}
          pattern="[0-9]*"
          required
        />
        <input
          type="text"
          className="new-todo-form__timer"
          name="seconds"
          value={seconds}
          placeholder="Sec"
          onChange={this.onLabelChange}
          pattern="[0-6]{1}[0-9]*"
          required
        />
        <button type="submit" aria-label="submission" className="new-todo-form-btn" />
      </form>
    );
  }
}
NewTaskForm.defaultProps = {
  addItem: () => {},
};
NewTaskForm.propTypes = {
  addItem: PropTypes.func,
};
