import React from 'react';
import PropTypes from 'prop-types';

import './new-task-form.css';

function NewTaskForm({ onSubmit }) {
  return (
    <input type="text" className="new-todo" placeholder="What needs to be done?" onKeyDown={(evt) => onSubmit(evt)} />
  );
}
NewTaskForm.defaultProps = {
  onSubmit: () => {},
};
NewTaskForm.propTypes = {
  onSubmit: PropTypes.func,
};
export default NewTaskForm;
