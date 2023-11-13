import PropTypes from "prop-types";
import CSS from './profile.module.css';
    const Profile = ({username, tag, location, avatar,  stats  }) => (
    <div className={CSS.profile}>
  <div className={CSS.description}>
    <img
      src={avatar}
      alt={username}
      className={CSS.avatar}
    />
    <p className={CSS.name}>{username}</p>
    <p className={CSS.tag}>{tag}</p>
    <p className={CSS.location}>{location}</p>
  </div>

  <ul className={CSS.stats}>
    <li>
      <span className={CSS.label}>followers</span>
      <span className={CSS.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={CSS.label}>views</span>
      <span className={CSS.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={CSS.label}>likes</span>
      <span className={CSS.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
    )

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
}
export default Profile

