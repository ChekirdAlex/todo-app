import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

import './task.css';
import TaskTimer from '../task-timer';

export default class Task extends PureComponent {
  static defaultProps = {
    description: '',
    creationTime: Date.now(),
    done: false,
    onToggleDone: () => {},
    deleteItem: () => {},
  };

  static propTypes = {
    description: PropTypes.string,
    creationTime: PropTypes.number,
    done: PropTypes.bool,
    onToggleDone: PropTypes.func,
    deleteItem: PropTypes.func,
  };

  render() {
    const { description, creationTime, done, onToggleDone, deleteItem, startTime } = this.props;

    const distanceCreation = formatDistanceToNow(creationTime, { addSuffix: true });

    return (
      <div className="view">
        <input type="checkbox" className="toggle" onClick={onToggleDone} defaultChecked={done} />
        <div className="wrapper">
          <span className="title">{description}</span>
          <TaskTimer startTime={startTime} />
          <span className="created"> сreated {distanceCreation}</span>
        </div>
        <button type="button" aria-label="Edit" className="icon icon-edit" />
        <button type="button" aria-label="Clear" className="icon icon-destroy" onClick={deleteItem} />
      </div>
    );
  }
}
