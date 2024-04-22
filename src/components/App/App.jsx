import { useState, useEffect } from 'react';

import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

import css from './App.module.css';

const getSavedClicks = () => {
  const savedClicks = window.localStorage.getItem('userFeedbackData');
  return savedClicks !== null
    ? JSON.parse(savedClicks)
    : { good: 0, neutral: 0, bad: 0 };
};

export default function App() {
  const [clicks, setClicks] = useState(getSavedClicks);

  const updateFeedback = feedbackType => {
    setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setClicks({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    window.localStorage.setItem('userFeedbackData', JSON.stringify(clicks));
  }, [clicks]);

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const hasFeedback = totalFeedback > 0;
  const positivePercentage = Math.round(
    ((clicks.good + clicks.neutral) / totalFeedback) * 100
  );

  return (
    <div className={css.container}>
      <section className={css.head}>
        <Description />
        <Options
          onRatingChange={updateFeedback}
          onReset={resetFeedback}
          isReset={hasFeedback}
        />
      </section>
      <section className={css.statistics}>
        {hasFeedback ? (
          <Feedback
            count={clicks}
            total={totalFeedback}
            percent={positivePercentage}
          />
        ) : (
          <Notification />
        )}
      </section>
    </div>
  );
}
