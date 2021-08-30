import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

function FriendListItem(props) {
  const { avatar, name, isOnline } = props;
  return (
    <>
      <span className={`${styles.status} ${styles[isOnline]}`}>{isOnline}</span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
