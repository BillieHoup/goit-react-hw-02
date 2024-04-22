import css from './Feedback.module.css';

export default function Feedback({
  count: { good, neutral, bad },
  total,
  percent,
}) {
  return (
    <div>
      <p className={css.stat}>
        Good: <span>{good}</span>
      </p>
      <p className={css.stat}>
        Neutral: <span>{neutral}</span>
      </p>
      <p className={css.stat}>
        Bad: <span>{bad}</span>
      </p>
      <div className={css.divider}></div>
      <p className={css.stat}>
        Total: <span>{total}</span>
      </p>
      <p className={css.stat}>
        Positive: <span>{percent}%</span>
      </p>
    </div>
  );
}
