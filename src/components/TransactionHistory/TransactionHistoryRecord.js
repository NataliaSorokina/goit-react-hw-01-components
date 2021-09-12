import PropTypes from 'prop-types';
import './TransactionHistoryRecord.module.css';

function TransactionHistoryRecord(props) {
  const { type, amount, currency, id } = props;
  return (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

TransactionHistoryRecord.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistoryRecord;
