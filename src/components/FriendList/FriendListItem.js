import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

function FriendListItem(props) {
  const { avatar, name, isOnline, id } = props;
  return (
    <li className={styles.item} key={id}>
      <span className={`${styles.status} ${styles[isOnline]}`}>{isOnline}</span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
