import './MakeNotes.css'

import React from 'react'
import { useState } from 'react'

export default function MakeNotes() {
    const [notes, setNotes] = useState('')
    const [school, setSchool] = useState('')
    const [courseNo, setCourseNo] = useState('')

    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')

    async function submitToDatabase (event) {
      event.preventDefault()
      const response = await fetch('http://localhost:1337/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          notes,
          school,
          courseNo,
          token: localStorage.getItem('user_data'),
          question,
          answer
        })
      })
      const data = await response.json()
      console.log(data)

    }

    async function convertNotes (event) {
        event.preventDefault()
        const response = await fetch('http://localhost:1337/api/generatequestions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
                notes,
                school,
                courseNo,
                token: localStorage.getItem('user_data') 
            })
        })
        const data = await response.json()
        if (data.status==="ok") {
            setQuestion(data.question)
            setAnswer(data.answer)
        }
        console.log(data)
        
    }

    return (
      <div className="wrapper-1">
        <form className="form-box-1">
          <h1 id="form-title">Make Notes into <br/>Questions.</h1><br/>
          <h2>Input notes below to generate question</h2>
          <input
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="input-box-2" 
            type="text"/><br/>

          <h2>What school do you go to?</h2>
          <input 
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            className="input-box-3" 
            type="text"/>

          <h2>What is the course code?</h2>
          <input 
            value={courseNo}
            onChange={(e) => setCourseNo(e.target.value)}
            className="input-box-3" 
            type="text"/><br/>

          <button onClick={convertNotes}>Generate Question</button>
          <button onClick={submitToDatabase}>Submit to Database</button>
        </form>
        <div className="generated-response">
          <div>
            <h1>Generated Question</h1><br/>
            <p>{question || 'No generated question.'}</p>
          </div>
          <div>
            <h1>Generated Answer</h1><br/>
            <p>{answer || 'No generated answer'}</p>
          </div>
        </div>
      </div>
    );
    
  }
  
  
  
  
  