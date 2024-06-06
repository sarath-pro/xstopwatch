import React, { useState, useEffect } from 'react'
import "./StopWatch.css"

export default function Stopwatch () {
    const [time, setTime] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
  
    useEffect(() => {
      let intervalId
      if (isRunning) {
        intervalId = setInterval(() => setTime(time + 1), 1000)
      }
      return () => clearInterval(intervalId)
    }, [isRunning, time])

    let mins = String(parseInt(time/60))
    let secs = String(time % 60)
    secs.length===1 && (secs='0'+secs)
    return (
      <div className="container">
        <h1>StopWatch</h1>
        <p>Time: <span>{mins}:{secs}</span></p>
          <button onClick={()=>setIsRunning(!isRunning)}>
            {!isRunning? "Start": "Stop"}
          </button>
          <button onClick={()=>{
            setIsRunning(false)
            setTime(0)
          }}>
            Reset
          </button>
      </div>
    )
  }