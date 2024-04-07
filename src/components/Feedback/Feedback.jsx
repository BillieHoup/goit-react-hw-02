import css from './Feedback.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.feedback}>
    {options.map(option => (
      <button
        key={option}
        className={css.button}
        onClick={() => onLeaveFeedback(option)}
      >
        {option.charAt(0).toUpperCase() + option.slice(1)}
      </button>
    ))}
  </div>
);