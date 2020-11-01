import React from 'react';
import FriendListItem from '../FriendListItem/FriendListItem'
import PropTypes from 'prop-types';
import styles from './FriendsList.module.css'

const FriendsList = ({friends}) => {
    return (
        <ul className={styles.friends}>
            
            { friends.map(friend => <FriendListItem key={friend.id} {...friend} />)}

        </ul>
        
    );
};

export default FriendsList;

FriendsList.propTypes = {
    friends: PropTypes.array.isRequired,
}