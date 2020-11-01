import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css'

const FriendListItem = ({avatar,name,isOnline}) => {
    return (
        
  <li className={styles.item}>
  <span className={styles.status} style={{backgroundColor: isOnline ? "green": "red"}}></span>
  <img className={styles.avatar} src={avatar} alt="" width="48" />
  <p className={styles.name}>{name}</p>
</li>
    );
};

export default FriendListItem;

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}

FriendListItem.defaultProps = {
    avatar: "https://i.pinimg.com/originals/7e/a1/c4/7ea1c4d26d656c955e278ec617557c06.jpg",
    name: 'your name'
}