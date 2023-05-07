import React, { useEffect } from 'react'
import {useState} from 'react'
import './Connect.css'

export default function Connect() {
    // const [courseList, setCourseList] = useState('')

    // useEffect (() => {
    //   const token = localStorage.getItem("token")
    //   const fetchData = async () => {
    //     const response = await fetch('http://localhost:1337/api/connect', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }, 
    //     body: JSON.stringify({
    //       token
    //     })
    //   })
    //   const data = await response.json()
    //   if (data.status == "ok") {
    //     console.log(data.questions)
    //     setQuestionList(data.questions)
    //   }
    //   setOpen(true)
    //   }
    // })

    return (
      <div className="App">
        <div className="heading">
          <h1>Connect <br/>With Other <br/>Students</h1>
          <p>"Connectivity is a force that leads to<br/>commitment to a common cause"</p>
        </div>
        <h2>Your Courses</h2>
      </div>
    );
  }
  
  
  
  
  