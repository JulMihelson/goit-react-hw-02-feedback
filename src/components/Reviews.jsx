import React from 'react';
import css from './Reviews.module.css';

class Reviews extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleIncrementNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleIncrementBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalReviews = good + neutral + bad;
    const positivePercentage = Math.round((good / totalReviews) * 100);

    return (
      <div className={css.counter}>
        <span className={css.title}>Reviews' count</span>
        <div className={css.btnSection}>
          <button className={css.goodBtn} type="button" onClick={this.handleIncrementGood}>
            Good
          </button>
          <button className={css.neuBtn} type="button" onClick={this.handleIncrementNeutral}>
            Neutral
          </button>
          <button className={css.badBtn} type="button" onClick={this.handleIncrementBad}>
            Bad
          </button>
        </div>
        {totalReviews > 0 ? (
          <div>
            <span className={css.title}>Statistics</span>
            <span>Good: {good}</span>
            <span>Neutral: {neutral}</span>
            <span>Bad: {bad}</span>
            <span className={css.title}>Total reviews: {totalReviews}</span>
            <span className={css.title}>Positive feedback: {positivePercentage}%</span>
          </div>
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