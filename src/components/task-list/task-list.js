import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Task from '../task';

import './task-list.css';

export default class TaskList extends PureComponent {
  static defaultProps = {
    todoData: [],
    onToggleDone: () => {},
    deleteItem: () => {},
  };

  static propTypes = {
    todoData: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string.isRequired,
        creationTime: PropTypes.number.isRequired,
        done: PropTypes.bool.isRequired,
        editable: PropTypes.bool.isRequired,
        id: PropTypes.string.isRequired,
      })
    ),
    onToggleDone: PropTypes.func,
    deleteItem: PropTypes.func,
  };

  render() {
    const { todoData, onToggleDone, deleteItem } = this.props;

    const items = todoData.map(({ id, ...itemProps }) => {
      const classes = classNames({
        completed: itemProps.done,
        editing: itemProps.editable,
      });

      const editing = <input type="text" className="edit" value={itemProps.description} />;

      return (
        <li key={id} className={classes}>
          <Task {...itemProps} onToggleDone={() => onToggleDone(id)} deleteItem={() => deleteItem(id)} />
          {itemProps.editable ? editing : null}
        </li>
      );
    });
    return <ul className="todo-list">{items}</ul>;
  }
}
