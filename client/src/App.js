import React from 'react'
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom'

import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Register from './pages/Register'
import NavBar from './components/NavBar';

export default function App(){
    
    return (
        <div class="root">
            <NavBar> </NavBar>
            <Router>
                <Routes>
                    <Route path="/homepage" exact element={<Homepage/>}/>
                    <Route path="/login" exact element={<Login/>}/>
                    <Route path="/register" exact element={<Register/>}/>
                </Routes>
            </Router>
        </div>
    )
}

