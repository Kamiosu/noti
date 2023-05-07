import React, { useState } from 'react';
import styles from './courseList.module.css';
import UserInfo from '../userInfo/userInfo';

const CourseList = ({ courses }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setSelectedCourse(null);
  };

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.toggleButton} onClick={toggleDropdown}>
        Course List
      </button>
      {isOpen && (
        <div className={styles.listContainer}>
          {courses.map((course) => (
            <button
              key={course.id}
              className={`${styles.button} ${selectedCourse === course ? styles.selected : ''}`}
              onClick={() => handleCourseClick(course)}
            >
              <p>{course.name}</p>
            </button>
          ))}
        </div>
      )}
      {selectedCourse && (
        <UserInfo
          username={selectedCourse.username}
          program={selectedCourse.program}
          socials={selectedCourse.socials}
          courseName={selectedCourse.courseName}
          University={selectedCourse.University}
        />
      )}
    </div>
  );
};

export default CourseList;
