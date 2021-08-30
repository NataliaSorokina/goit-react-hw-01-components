import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function Statistics(props) {
  const { label, percentage } = props;
  return (
    <>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </>
  );
}

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
