import React from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button
          onClick={() => onLeaveFeedback(option)}
          type="button"
          key={option}
          className={css.button}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
