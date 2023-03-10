import React, { useState } from 'react';
import Section from './modul/Section';
import FeedbackOptions from './modul/FeedbackOptions';
import Statistics from './modul/Statistics';
import Notification from './modul/Notification';
import css from './feedback.module.css';

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const incrementFeedback = feedbackKey => {
    setFeedback(prevState => ({
      ...prevState,
      [feedbackKey]: prevState[feedbackKey] + 1,
    }));
  };

  const getTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const getPositiveFeedbackPercentage = () => {
    return getTotalFeedback()
      ? Math.round((feedback.good / getTotalFeedback()) * 100)
      : 0;
  };

  return (
    <div className={css.feedback__all}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={incrementFeedback}
        />
      </Section>

      {getTotalFeedback() > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={getTotalFeedback()}
            positivePercentage={getPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
};

export default Feedback;
