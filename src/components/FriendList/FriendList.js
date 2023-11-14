import PropTypes from "prop-types";
import FriendListItem from './FriendListItem';
import CSS from './FriendList.module.css'

const FriendList = ({friends}) => {
    return (<ul className={CSS.friend_list}>
        {friends.map( ({id, avatar, name, isOnline}) => (
            <FriendListItem
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}/>
        ))}
            </ul>)
        };
    
    FriendList.propTypes ={
   id: PropTypes.number,
   avatar: PropTypes.string, 
   name: PropTypes.string, 
   isOnline: PropTypes.bool,
}
export default FriendList
