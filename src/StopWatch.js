import React, { useState, useEffect } from 'react'
import "./StopWatch.css"

export default function Stopwatch () {
    const [time, setTime] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
  
    useEffect(() => {
      let intervalId
      if (isRunning) {
        console.log('Time: ', time)
        intervalId = setInterval(() => setTime((prevTime)=>(prevTime + 1)), 1000)
      } else {
        clearInterval(intervalId)
      }
      return () => clearInterval(intervalId)
    }, [isRunning])

    let mins = String(parseInt(time/60))
    let secs = String(time % 60)
    secs.length===1 && (secs='0'+secs)
    let display = String('Time: '+mins+":"+secs)
    return (
      <div className="container">
        <h1>Stopwatch</h1>
        <p>{display}</p>
          <button onClick={()=>setIsRunning(!isRunning)}>
            {!isRunning? "Start": "Stop"}
          </button>
          <button onClick={()=>{
            setTime(0)
          }}>
            Reset
          </button>
      </div>
    )
  }