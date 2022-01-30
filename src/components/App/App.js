import { useState, useEffect } from "react";
import { interval, timer } from "rxjs";
import { first, scan, share, startWith } from "rxjs/operators";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import s from "./App.module.css";

const App = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    const startInterval = interval(1000)
      .pipe(
        startWith(time),
        scan((time) => time + 1000),
        share()
      )
      .subscribe((value) => {
        timerOn && setTime(value);
      });
    return () => startInterval.unsubscribe();
  }, [time, timerOn]);

  const toggleButtonClick = () => {
    setTimerOn(!timerOn);
    timerOn && setTime(0);
  };

  const handleDoubleClick = () => {
    timer(300)
      .pipe(first())
      .subscribe(() => {
        setTimerOn(false);
      });
  };

  return (
    <div>
      <div className={s.timeWrapper}>
        <span>{("0" + Math.floor((time / 3600000) % 60)).slice(-2)}: </span>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}: </span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </div>
      <div className={s.buttonWrapper}>
        <Button onClick={toggleButtonClick} className={s.button}>
          {timerOn ? "Stop" : "Start"}
        </Button>
        <Button onDoubleClick={handleDoubleClick} className={s.button}>
          Wait
        </Button>
        <Button onClick={() => setTime(0)} className={s.button}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default App;
