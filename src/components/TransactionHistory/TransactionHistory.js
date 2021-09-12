import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';
import TransactionHistoryRecord from 'components/TransactionHistory/TransactionHistoryRecord';

function TransactionHistory({ items }) {
  return (
    <table className={styles.history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TransactionHistoryRecord
            type={item.type}
            amount={item.amount}
            currency={item.currency}
            id={item.id}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
