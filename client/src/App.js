import React from 'react'
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom'

import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import NavBar from './components/NavBar';
import Courses from './pages/Courses';
import MakeNotes from './pages/MakeNotes'
import Connect from './pages/Connect'


export default function App(){
    
    return (
        <div >
            <NavBar> </NavBar>
            
            <Router>
                <Routes>
                    <Route path="/Profile" exact element={<Profile/>}/>
                    <Route path="/login" exact element={<Login/>}/>
                    <Route path="/register" exact element={<Register/>}/>
                    <Route path="/Connect" exact element={<Connect/>}/>
                    <Route path="/Courses" exact element={<Courses/>}/>
                    <Route path="/MakeNotes" exact element={<MakeNotes/>}/>
                </Routes>
            </Router>
        </div>
    )
}

