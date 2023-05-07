import React, { useState } from 'react';
import styles from './UserInfo.module.css';
import { FaInstagram } from 'react-icons/fa';

const UserInfo = ({ username, program, socials, courseName, University }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div>
      <button onClick={handleClick} className={styles.userInfoCard}>
        Show User Info
      </button>
      {showInfo && (
        <div className={styles.userInfoCard}>
          <h1>User Info</h1>
          <p>Username: {username}</p>
          <p>Program: {program}</p>
          <p>Course Name: {courseName}</p>
          <p>University: {University}</p>
          <p>
            <FaInstagram className={styles.instagramIcon} /> {socials}
          </p>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
