import css from './Options.module.css';

export default function Options({ onRatingChange, onReset, isReset }) {
  return (
    <div className={css.options}>
      <button onClick={() => onRatingChange('good')}>Good</button>
      <button onClick={() => onRatingChange('neutral')}>Neutral</button>
      <button onClick={() => onRatingChange('bad')}>Bad</button>
      {isReset ? <button onClick={onReset}>Reset</button> : null}
    </div>
  );
}
