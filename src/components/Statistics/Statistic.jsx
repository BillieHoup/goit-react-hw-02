import css from './Statistics.module.css';

export const Statistic = ({ good, neutral, bad, total, positivPrs }) => {
  return (
    <ul className={css.list}>
      <li className={css.listItem}>Good: {good}</li>
      <li className={css.listItem}>Neutral: {neutral}</li>
      <li className={css.listItem}>Bad: {bad}</li>
      <li className={css.listItem}>Total: {total}</li>
      <li className={css.listItem}>Positive feedback: {positivPrs}%</li>
    </ul>
  );
};