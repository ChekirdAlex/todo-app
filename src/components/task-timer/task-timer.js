import React, { Component } from 'react';
import './task-timer.css';

export default class TaskTimer extends Component {
  onPlayClicked = () => {
    console.log('Play');
  };

  onPauseClicked = () => {
    console.log('Pause');
  };

  render() {
    return (
      <span className="description">
        <button type="button" className="icon icon-play" aria-label="play" onClick={this.onPlayClicked} />
        <button type="button" className="icon icon-pause" aria-label="pause" onClick={this.onPauseClicked} />
        <div className="timer">12:25</div>
      </span>
    );
  }
}
