import React, { Component } from 'react';

import './task-timer.css';
import { getPadTime } from '../../helpers';

export default class TaskTimer extends Component {
  formatTime = (timeState) => {
    const minutes = getPadTime(Math.floor(timeState / 60));
    const seconds = getPadTime(timeState - minutes * 60);
    return `${minutes}:${seconds}`;
  };

  render() {
    const { onPlayClicked, onPauseClicked, totalTime } = this.props;
    const displayTime = this.formatTime(totalTime);
    return (
      <span className="description">
        <button type="button" className="icon icon-play" aria-label="play" onClick={onPlayClicked} />
        <button type="button" className="icon icon-pause" aria-label="pause" onClick={onPauseClicked} />
        <div className="timer">{displayTime}</div>
      </span>
    );
  }
}
