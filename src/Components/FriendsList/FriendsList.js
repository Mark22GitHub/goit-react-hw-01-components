import React from 'react';
import FriendListItem from '../FriendListItem/FriendListItem'
import './FriendsList.css'
import PropTypes from 'prop-types';

const FriendsList = ({friends}) => {
    return (
        <ul className={friends}>
            
            { friends.map(friend => <FriendListItem key={friend.id} {...friend} />)}

        </ul>
        
    );
};

export default FriendsList;

FriendsList.propTypes = {
    friends: PropTypes.array,
}