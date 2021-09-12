import user from './json/user.json';
import statisticalData from './json/statistical-data.json';
import friends from './json/friends.json';
import transactions from './json/transactions.json';
import Profile from 'components/Profile/Profile';
import StatisticsList from 'components/Statistic/StatisticsList';
import Section from 'Section/Section';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Section title="Upload stats">
        <StatisticsList stats={statisticalData} />
        {/* <Statistics stats={statisticalData} />; */}
      </Section>

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
