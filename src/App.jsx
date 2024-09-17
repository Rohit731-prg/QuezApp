import React, { useState } from 'react';
import './App.css';
import TestCompo from './components/TestCompo';
import Result from './components/Result';

function App() {
  const [contentNo, setContentNo] = useState(0);
  const [score, setScore] = useState(0);


  return (
    <div className='App'>
      {contentNo == 0 ? <h1 className='container'>Basic Quze Test</h1> : <h1 className='container'>This is Your Score</h1>}

      {contentNo == 0 
      ? 
      <TestCompo 
      contentNo={contentNo} 
      setContentNo={setContentNo}
      score={score}
      setScore={setScore}
      /> 
      : 
      <Result
      score={score}
      />}
      
    </div>
  )
}

export default App
