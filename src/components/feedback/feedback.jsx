import styles from './feedback.module.css';

const Feedback = ({ feedback, totalFeedback, positiveFeedbackPercentage }) => {
  const { good, neutral, bad } = feedback;

  return (
    <div className={styles.feedback}>
      <h2>Feedback statistics:</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total feedback: {totalFeedback}</p>
      <p>Positive feedback: {positiveFeedbackPercentage}%</p>
    </div>
  );
};

export default Feedback;
