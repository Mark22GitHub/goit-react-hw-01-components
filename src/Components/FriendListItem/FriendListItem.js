import React from 'react';
import PropTypes from 'prop-types';

const FriendListItem = ({avatar,name,isOnline}) => {
    return (
        
  <li className="item">
  <span className="status" style={{backgroundColor: isOnline ? "green": "red"}}>{isOnline ? "online" :"offline"}</span>
  <img className="avatar" src={avatar} alt="" width="248" />
  <p className='name'>{name}</p>
</li>
    );
};

export default FriendListItem;

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
}