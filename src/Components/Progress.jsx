import React, { useState } from "react";
import Button from "./Button";
import ProgressCircle from "./ProgressCircle";

function Progress() {
  let progressStartValue = 0,
    progressEndValue = 100,
    speed = 80;
  const [text, setText] = useState(progressStartValue);
  const [progressID, setProgressID] = useState();
  const [pause, setPause] = useState(false);
  const [restart, setRestart] = useState(false);

  const startProgress = () => {
    if (text === 0) {
      let progress = setInterval(() => {
        progressStartValue++;
        if (progressStartValue === progressEndValue) {
          clearInterval(progress);
          setRestart(false);
        }

        setText(progressStartValue);
        setProgressID(progress);
      }, speed);
      setRestart(true);
      
    } else {
      clearInterval(progressID);
      setText(0);
      setRestart(false);
      
    }
  };

  const pauseProgress = () => {
    if (pause == false && text!== 100) {
      clearInterval(progressID);
      
        setPause(true);
      
    } else {
      if (text !== 100) {
        progressStartValue = text;
        let progress = setInterval(() => {
          progressStartValue++;
          if (progressStartValue === progressEndValue) {
            clearInterval(progress);
            setRestart(false);
          }

          setText(progressStartValue);
          setProgressID(progress);
        }, speed);
        setPause(false);
      } else {
        clearInterval(progressID);
        setPause(true);
      }
    }
  };

  return (
    <>
      <div className="ProgressBarArea">
        <ProgressCircle progressvalue={text} />
        <div>
          <Button
            Name={restart ? "Restart" : "Start"}
            function={startProgress}
          />
          <Button Name={pause ? "Resume" : "Pause"} function={pauseProgress} />
        </div>
      </div>
    </>
  );
}

export default Progress;
