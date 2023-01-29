import React, { Component } from 'react';

import './task-timer.css';
import { getPadTime } from '../../helpers';

export default class TaskTimer extends Component {
  state = {
    isTimerOn: false,
    timeLeft: null,
  };

  componentDidMount() {
    const { startTime } = this.props;
    this.setState({ timeLeft: startTime });
  }

  componentDidUpdate() {
    const { isTimerOn } = this.state;
    if (isTimerOn) {
      this.updateTime();
    } else {
      clearInterval(this.interval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateTime = () => {
    const { timeLeft } = this.state;
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      const newTime = timeLeft - 1;
      this.setState(() => ({ timeLeft: newTime }));
    }, 1000);
    if (timeLeft === 0) clearInterval(this.interval);
  };

  onPlayClicked = () => {
    this.setState({ isTimerOn: true });
  };

  onPauseClicked = () => {
    this.setState({ isTimerOn: false });
  };

  formatTime = (timeState) => {
    const minutes = getPadTime(Math.floor(timeState / 60));
    const seconds = getPadTime(timeState - minutes * 60);
    return `${minutes}:${seconds}`;
  };

  render() {
    const { timeLeft } = this.state;
    const displayTime = this.formatTime(timeLeft);
    return (
      <span className="description">
        <button type="button" className="icon icon-play" aria-label="play" onClick={this.onPlayClicked} />
        <button type="button" className="icon icon-pause" aria-label="pause" onClick={this.onPauseClicked} />
        <div className="timer">{displayTime}</div>
      </span>
    );
  }
}
