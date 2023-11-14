import PropTypes  from 'prop-types';
// import CSS from "./FriendList.module.css";
import CSS from './FriendList.module.css'
 function FriendListItem({avatar, name, isOnline, id }) {
    return (
    <li className={CSS.item} key={id}>
  <span className={isOnline ? CSS.status_true : CSS.status_false}>{isOnline}</span>
  <img className={CSS.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={CSS.name}>{name}</p>
</li>)
    
}
FriendListItem.propTypes ={
   id: PropTypes.number,
   avatar:PropTypes.string, 
   name: PropTypes.string, 
   isOnline: PropTypes.bool,
}
export default FriendListItem