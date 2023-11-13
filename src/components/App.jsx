import user  from 'user.json';
// import Profile  from "./profile/Profile";

// import Statistics from './Statistics/Statistics';
// import data  from 'data.json';

// import FriendList from './FriendList/FriendList'
// import friend from "friends.json";

// import transactions from "transactions.json";
// import TransactionHistory from "./TransactionHistory/TransactionHistory.js";


 const App = () => {
        return(
        <div>
      <Profile 
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}/>
      <Statistics
  title="Upload stats"
  stats={data}
  />
      <FriendList 
  friends={friend}/> 
      <TransactionHistory
  items={transactions}/>
  </div>)
    }
 export default App