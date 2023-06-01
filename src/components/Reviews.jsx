import React from 'react';
import css from './Reviews.module.css';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';

class Reviews extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotal = () => {
    return Object.values(this.state).reduce((acc, item) => acc + item, 0);
  };

  countPercents = () => {
    const total = this.countTotal();
    const { good } = this.state;
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalReviews = this.countTotal();
    const positivePercentage = this.countPercents();

    return (
      <div className={css.counter}>
        <span className={css.title}>Reviews' count</span>
        <FeedbackOptions
          onLeaveFeedback={this.handleLeaveFeedback}
          options={Object.keys(this.state)}
        />
        {totalReviews > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalReviews={totalReviews}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}

const Notification = ({ message }) => {
  return <span className={css.notification}>{message}</span>;
};

export default Reviews;
