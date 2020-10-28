import React from 'react';
import Stats from '../Stats/Stats'
import PropTypes from 'prop-types';

const Profile = ({avatar,name,tag,location,stats}) => {
    return (
       <div className="profile">
  <div className="description">
    <img
      src={avatar}
      alt="user avatar"
      className="avatar"
    />
    <p className="name">{name}</p>
    <p className="tag">{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className={stats}>
  {Object.keys(stats).map(title => <Stats title={title} value={stats[title]} key={title}/>)}
    
  </ul>
</div>
    );
};

export default Profile;

Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.object
}