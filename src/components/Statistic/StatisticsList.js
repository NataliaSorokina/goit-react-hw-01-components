import PropTypes from 'prop-types';
import Statistics from './Statistics';
import styles from './StatisticsList.module.css';
import getRandomNumber from './getrandomNumber';

function StatisticsList({ stats }) {
  return (
    <ul className={styles.statList}>
      {stats.map(stat => (
        <li
          key={stat.id}
          className={styles.item}
          style={{
            backgroundColor: `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(
              0,
              255,
            )}, ${getRandomNumber(0, 255)})`,
          }}
        >
          <Statistics label={stat.label} percentage={stat.percentage} />
        </li>
      ))}
    </ul>
  );
}

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default StatisticsList;
