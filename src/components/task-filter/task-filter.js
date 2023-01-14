import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './task-filter.css';

export default class TaskFilter extends Component {
  static defaultProps = {
    onToggleVis: () => {},
  };

  static propTypes = {
    onToggleVis: PropTypes.func,
  };

  state = {
    selected: 'all',
  };

  onToggleSelect = (btn) => {
    const { onToggleVis } = this.props;
    this.setState(() => ({ selected: btn }));
    onToggleVis(btn);
  };

  render() {
    const { selected } = this.state;
    return (
      <ul className="filters">
        <li>
          <button
            type="button"
            className={selected === 'all' ? 'selected' : ''}
            onClick={() => this.onToggleSelect('all')}
          >
            All
          </button>
        </li>
        <li>
          <button
            type="button"
            className={selected === 'active' ? 'selected' : ''}
            onClick={() => this.onToggleSelect('active')}
          >
            Active
          </button>
        </li>
        <li>
          <button
            type="button"
            className={selected === 'completed' ? 'selected' : ''}
            onClick={() => this.onToggleSelect('completed')}
          >
            Completed
          </button>
        </li>
      </ul>
    );
  }
}
