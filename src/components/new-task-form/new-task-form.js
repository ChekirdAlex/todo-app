import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './new-task-form.css';

export default class NewTaskForm extends Component {
  state = {
    description: '',
  };

  onLabelChange = (evt) => {
    this.setState({
      description: evt.target.value,
    });
  };

  onSubmit = (evt) => {
    const { addItem } = this.props;
    const { description } = this.state;
    evt.preventDefault();
    addItem(description);
    this.setState({ description: '' });
  };

  render() {
    const { description } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={this.onLabelChange}
          minLength={1}
          maxLength={20}
          value={description}
          required
        />
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
