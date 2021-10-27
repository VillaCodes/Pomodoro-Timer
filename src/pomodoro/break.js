import React from "react";
import { minutesToDuration } from "../utils/duration/index";

function Break ({session, breakDuration, setBreakDuration}) {
  
    const handleIncrease = () => {
    setBreakDuration(Math.min(15, breakDuration + 1))
  }
  
  const handleDecrease = () => {
    setBreakDuration(Math.max(1, breakDuration - 1))
  }
  
  return (
    <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-break">
                {/* TODO: Update this text to display the current break session duration */}
                Break Duration: {minutesToDuration(breakDuration)}
              </span>
              <div className="input-group-append">
                {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="decrease-break"
                  onClick = {handleDecrease}
                  disabled = {breakDuration === 1 || session}
                >
                  <span className="oi oi-minus" />
                </button>
                {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-break"
                  onClick = {handleIncrease}
                  disabled = {breakDuration === 15 || session}
                >
                  <span className="oi oi-plus" />
                </button>
              </div>
            </div>
  )
}


export default Break