import React from 'react';
import './Result.css'

function Result({ score }) {
  const refresh = () => {
    location.reload();
  }

  return (
    <div>
      <div className="container-result">
        {
            score >= 3
            ?
            <p>Congrats! You Done It well..<br/>Your Score is <span className='green'> {score}</span> out of 5</p>
            :
            <p>Too Bad! You Done It not so well..<br/>Your Score is <span className='cos-red'>{score}</span> out of 5</p>
        }
        <div className="refresh-btn">
          <button onClick={refresh}>Refresh</button>
        </div>
      </div>
    </div>
  )
}

export default Result
