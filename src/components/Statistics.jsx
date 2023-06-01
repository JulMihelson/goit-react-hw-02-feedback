import css from './Reviews.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  totalReviews,
  positivePercentage,
}) => {
  return (
    <div>
      <span className={css.title}>Statistics</span>
      <span>Good: {good}</span>
      <span>Neutral: {neutral}</span>
      <span>Bad: {bad}</span>
      <span className={css.title}>Total reviews: {totalReviews}</span>
      <span className={css.title}>
        Positive feedback: {positivePercentage}%
      </span>
    </div>
  );
};
