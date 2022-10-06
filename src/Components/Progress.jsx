import React, { useState } from 'react'
import Button from './Button'
import ProgressCircle from './ProgressCircle'

function Progress() {
  
  let progressStartValue=0,
   progressEndValue=100,
   speed=80;
  const [text,setText] = useState(progressStartValue);
  const [progressID,setProgressID] = useState();

  const startProgress=()=>{
    let progress=setInterval(()=>{
      progressStartValue++;
      if(progressStartValue === progressEndValue){
        clearInterval(progress)
      }
      setText(progressStartValue)
      setProgressID(progress);
    },speed);
  }

  const pauseProgress=()=>{ 
      clearInterval(progressID);
  }
  
  return (
    <>
        <div className='ProgressBarArea'>
            <ProgressCircle progressvalue={text}/>
            <div>
                <Button Name="Start" function={startProgress}/>
                <Button Name="Pause" function={pauseProgress}/>
            </div>
        </div>
    </>
  )
}

export default Progress
