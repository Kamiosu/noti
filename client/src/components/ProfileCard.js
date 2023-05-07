import React from 'react';
import './ProfileCard.css';


export default function ProfileCard({props}) {
    const name = props.name;
    const email = props.email;
    const social = props.social;

  return (
    <div className="profile-card">
      <div className="profile-picture">
       
      </div>
      <div className="profile-info">
        <div className="profile-field">
          <p className="name">{name}</p>
        </div> 
        <div className="profile-field">

          <p className="profile-field__label">Email:</p>
          <p className="profile-field__value">{email}</p>
        </div>
        <div className="profile-field">

          <p className="profile-field__label">Socials:</p>
          <p className="profile-field__value">{social}</p>
        </div>
      </div>
    </div>
  );
};

