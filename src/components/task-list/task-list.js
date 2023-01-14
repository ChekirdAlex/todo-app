import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Task from '../task';

import './task-list.css';

export default class TaskList extends PureComponent {
  static defaultProps = {
    todoData: [],
    onToggleDone: () => {},
    editItem: () => {},
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
    editItem: PropTypes.func,
    deleteItem: PropTypes.func,
  };

  render() {
    const { todoData, onToggleDone, editItem, deleteItem } = this.props;

    const items = todoData.map(({ id, ...itemProps }) => {
      let classNames = '';
      if (itemProps.done) classNames += 'completed';
      if (itemProps.editable) classNames += 'editing';

      const editing = <input type="text" className="edit" value={itemProps.description} />;

      return (
        <li key={id} className={classNames}>
          <Task
            {...itemProps}
            onToggleDone={() => onToggleDone(id)}
            editItem={() => editItem(id)}
            deleteItem={() => deleteItem(id)}
          />
          {itemProps.editable ? editing : null}
        </li>
      );
    });
    return <ul className="todo-list">{items}</ul>;
  }
}
