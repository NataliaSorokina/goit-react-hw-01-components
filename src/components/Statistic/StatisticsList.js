import PropTypes from 'prop-types';
import Statistics from './Statistics';
import styles from './StatisticsList.module.css';

function StatisticsList({ stats }) {
  return (
    <ul className={styles.statList}>
      {stats.map(stat => (
        <Statistics label={stat.label} percentage={stat.percentage} id={stat.id} />
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
