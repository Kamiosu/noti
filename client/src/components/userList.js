import React, { useState } from 'react';
import styles from './UserList.module.css';
import UserInfo from '../userInfo/userInfo';

const UserList = ({ users }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setSelectedUser(null);
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.toggleButton} onClick={toggleDropdown}>
        User List
      </button>
      {isOpen && (
        <div className={styles.listContainer}>
          {users.map((user) => (
            <button
              key={user.id}
              className={`${styles.card} ${selectedUser === user ? styles.selected : ''}`}
              onClick={() => handleUserClick(user)}
            >
              <p> {user.username}</p>
            </button>
          ))}
        </div>
      )}
      {selectedUser && (
        <UserInfo
          username={selectedUser.username}
          program={selectedUser.program}
          socials={selectedUser.socials}
          courseName={selectedUser.courseName}
          University={selectedUser.University}

        />
      )}
    </div>
  );
};

export default UserList;
