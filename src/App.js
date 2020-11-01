import user from './db/user.json'
import statisticalData from './db/statistical-data.json'
import friends from './db/friends.json'
import transactions from './db/transactions.json'

import Profile from './Components/Profile/Profile'
import Statistics from './Components/Statistics/Statistics'
import FriendsList from './Components/FriendsList/FriendsList'
import TransactionHistory from './Components/TransactionHistory/TransactionHistory'


function App() {
  return (
    <>
    <Profile {...user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions}/>
      </>
  );
}

export default App;
