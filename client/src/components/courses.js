import React from "react";
import styles from "./courses.module.css";

const Courses = ({ courseName, description }) => {
  return (
    <div className={styles.button}>
      <button className={styles.buttonContent}>
        <span className={styles.name}>{courseName}</span>
        <span className={styles.description}>{description}</span>
      </button>
    </div>
  );
};

export default Courses;
