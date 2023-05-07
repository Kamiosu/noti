import { useState } from 'react'
import SearchBar from '../components/searchBar'
import './Courses.css'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

export default function Courses() {
    const [questionList, setQuestionList] = useState([])
    const [open, setOpen] = useState(false)
    const [cName, setCName] = useState('')
    async function findCourse(courseName) {
      setCName(courseName)
      const response = await fetch('http://localhost:1337/api/findcourse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
          courseName
        })
      })
      const data = await response.json()
      if (data.status == "ok") {
        console.log(data.questions)
        setQuestionList(data.questions)
      }
      setOpen(true)


    }
    return (
      <div className="App">
        <div class="searchbar"><SearchBar onSearch={findCourse}/></div>
        <Popup setOpen={setOpen} open={open} onClose={() => setOpen(false)} position="right center">
          <div>
            <h1>"{cName}": Questions and Answers</h1>
            <ul>
              {
                questionList.map(function(object, i){
                  return <div className="container-pair">
                    <div className="search-pair">
                      <li obj={object} key={i}>{object.question}</li>
                      <li obj={object} key={i}>{object.answer}</li>
                    </div>
                    <div className ="tooltip">
                      <p>Made by {object.user},<br/>
                         They are from {object.school},<br/>
                         You can reach them at: {object.email}</p>
                    </div>
                     
                  </div>
                  ;})
              }
            </ul>
          </div>
        </Popup>
        <h1 id="title">Popular Courses</h1>
        <div className="popular-courses">
          <div className="pop-card">
            <img src="https://brocku.ca/conference-services/wp-content/uploads/sites/198/Lecture-Halls.jpg?x83018"/>
            <p>CS 115</p>
          </div>
          <div className="pop-card">
            <img src="https://brocku.ca/conference-services/wp-content/uploads/sites/198/Lecture-Halls.jpg?x83018"/>
            <p>CS 115</p>
          </div>
          <div className="pop-card">
            <img src="https://brocku.ca/conference-services/wp-content/uploads/sites/198/Lecture-Halls.jpg?x83018"/>
            <p>CS 115</p>
          </div>
        </div>
      </div>
    );
}