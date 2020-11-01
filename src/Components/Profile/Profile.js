import React from 'react';
import Stats from '../Stats/Stats'
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({avatar,name,tag,location,stats}) => {
    return (
       <div className={styles.profile}>
  <div className="description">
    <img
      src={avatar}
      alt="user avatar"
      className={styles.avatar}
    />
    <p className={styles.name}>{name}</p>
    <p className={styles.tag}>@{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>

  <ul className={styles.stats}>
  {Object.keys(stats).map(title => <Stats title={title} value={stats[title]} key={title}/>)}
    
  </ul>
</div>
    );
};

export default Profile;

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string,
    location: PropTypes.string.isRequired,
    stats: PropTypes.object
}

Profile.defaultProps = {
  avatar: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png",
  name: 'user name'
}