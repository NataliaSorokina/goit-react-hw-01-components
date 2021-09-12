import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import getRandomNumber from './getrandomNumber';

function Statistics(props) {
  const { label, percentage, id } = props;
  return (
    <li
      key={id}
      className={styles.item}
      style={{
        backgroundColor: `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(
          0,
          255,
        )}, ${getRandomNumber(0, 255)})`,
      }}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
}

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
