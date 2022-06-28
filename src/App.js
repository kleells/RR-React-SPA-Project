import React from 'react'
import './App.css'
// import { useState, useEffect } from 'react';
import GitHubCard from './GitHubComponents/GitHubCard';
import Row from 'react-bootstrap/Col';
import Col from 'react-bootstrap/Row';
import NavBar from './components/NavBar';
import { darkMode, lightMode } from './features/modes'
import { useSelector, useDispatch } from 'react-redux'


function App() {
  const dispatch = useDispatch()
  const mode = useSelector((state) => state.mode)
  const toggleMode = () => {
    mode.darkMode ? dispatch(lightMode()) : dispatch(darkMode())
  }

  return (
    <div style={{ backgroundColor: mode.color1, color: 'white' }} className="App pt-5" >
      <Row>
        <Col style={{display: 'flex', justifyContent: 'center'}}>
          <GitHubCard className="Photo" style={{backgroundColor: mode.color3}}/>
        </Col>
      </Row>
        <button onClick={toggleMode}>{ mode.darkMode ? 'Light Mode' : 'Dark Mode '}</button>
    </div>
  );
}

export default App;
