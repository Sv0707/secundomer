import { useState, useEffect, useRef } from "react";
import { interval, fromEvent } from "rxjs";
import { buffer, debounceTime, map, filter, scan } from "rxjs/operators";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import s from "./App.module.css";

const App = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const click = fromEvent(ref.current, "click");

    const doubleClick = click.pipe(
      buffer(click.pipe(debounceTime(300))),
      map((clicks) => clicks.length),
      filter((clicksLength) => clicksLength === 2)
    );

    doubleClick.subscribe(() => {
      setTimerOn(false);
    });
  }, []);

  useEffect(() => {
    const startInterval = interval(1000)
      .pipe(scan((time) => time + 1000, time))
      .subscribe((value) => {
        timerOn && setTime(value);
      });
    return () => startInterval.unsubscribe();
  }, [time, timerOn]);

  const toggleButtonClick = () => {
    setTimerOn(!timerOn);
    timerOn && setTime(0);
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
        <Button ref={ref} className={s.button}>
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
