import styles from './options.module.css';

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={styles.options}>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      <button onClick={resetFeedback} disabled={totalFeedback === 0}>Reset</button>
    </div>
  );
};

export default Options;

