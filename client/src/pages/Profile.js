import React, { useState, useEffect } from 'react';
import './Profile.css'
import profileImage from '../images/profile.jpeg';
import jwt_decode from 'jwt-decode'
import ProfileCard from '../components/ProfileCard'



export default function Profile() {

  const [profileData, setProfileData] = useState({});
  const [editMode, setEditMode] = useState(false);
  
  
  async function updateUser() {
    const name = profileData.name;
    const email = profileData.email;
    const password = profileData.password;
    const social = profileData.social;
    const id = profileData.id;
    console.log(profileData);
  
    try {
      const response = await fetch('http://localhost:1337/api/update', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          password,
          social,
          id
        })
      });
  
      if (!response.ok) {
        throw new Error('Failed to update user');
      }
  
      const data = await response.json();
      console.log('User updated successfully:', data);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  }
  


  useEffect(() => {
    //Saves the effect executed state in local storage so it does not active again on render or mount 
    const hasExecuted = localStorage.getItem('hasExecuted');
    if (!hasExecuted) {
      const storedProfileData = localStorage.getItem('user_data');
      if (storedProfileData) {
        const userData = jwt_decode(storedProfileData, 'secret123');
        const email = userData.email;

        const fetchUserData = async () => {
          try {
            console.log("Before fetch")
            const response = await fetch('http://localhost:1337/api/info', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email })
            });
            const response_info = await response.json();
            console.log(response_info)
            setProfileData(response_info.user);

            console.log(profileData)

          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };

        fetchUserData();
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // Save profile data to localStorage (Edit to change to save to mongoDB)

      localStorage.setItem('user_data', JSON.stringify(profileData));
      setProfileData(profileData)
      console.log('Profile data submitted:', profileData);
      
      //before toggling edit more off update mongodb with new info
      updateUser();

      // Toggle edit mode off
      setEditMode(false);
    } catch (error) {
      console.error('Error updating profile data:', error);
    }
  };

  return (
    <div className="container bg-gradient-to-br from-yellow-400 to-blue-70" >
      <img src={profileImage} alt='profileimage' className="profile_image shadow-xl" />


      {editMode ? (
        <div className='form-container'>
          <form onSubmit={handleSubmit}>

            {/* Render form fields for profile data */}
            {/* For example: */}
            <label className='form-item'>
              Name:
              <input
                type="text"
                value={profileData.name || ''}
                onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
              />
            </label>

            <label className='form-item'>
              Email:
              <input
                type="text"
                value={profileData.email || ''}
                onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
              />
            </label>

            <label className='form-item'>
              Social: 
              <input
                type="text"
                value={profileData.social || ''}
                onChange={(e) => setProfileData({ ...profileData, social: e.target.value })}
              />
            </label>

            <button type="submit" className='button'> Save </button>
          </form>
        </div>

      ) : (
        <div className="front-card-container ">

          <ProfileCard props={profileData} className="card shadow-lg" />
          {/* ...other profile data */}
          <button onClick={() => setEditMode(true)} className='button'>Edit</button>
        </div>
      )}
    </div>

  );



}




