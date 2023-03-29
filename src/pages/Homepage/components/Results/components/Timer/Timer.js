import { Constants } from "constants/constants";
import { useEffect, useRef } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  addTimeRightAnswerState,
  timeoutState,
  timerProgressState,
} from "recoilState/atom";
import styles from "./Timer.module.scss";

function Timer() {
  const [timerProgress, setTimerProgress] = useRecoilState(timerProgressState);
  const setTimeoutState = useSetRecoilState(timeoutState);
  const [addTimeRightAnswer, setAddTimeRightAnswer] = useRecoilState(
    addTimeRightAnswerState
  );
  const ref = useRef(null);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      if (timerProgress > 0 && addTimeRightAnswer) {
        setTimerProgress(
          timerProgress -
            Constants.TIME_DECREASE +
            Constants.TIMER_INCREASE_GOOD_ANSWER
        );
        setAddTimeRightAnswer(false);
      } else if (timerProgress > 0 && !addTimeRightAnswer) {
        setTimerProgress(timerProgress - Constants.TIME_DECREASE);
      } else if (timerProgress === 0) {
        setTimeoutState(true);
      }
    }, Constants.TIMER_UPDATE);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [timerProgress, setTimerProgress, addTimeRightAnswer]);

  return (
    <div
      className={` ${styles.progressBarContainer} d-flex flex-column align-items-center`}
    >
      <div
        className={`${addTimeRightAnswer ? styles.addingTimeScore : ""} ${
          styles.timerBackground
        }`}
      >
        <div ref={ref} className={styles.timer}>
          {timerProgress / Constants.CONVERT_MS_AND_S}
        </div>
        <div
          className={`${
            timerProgress <= Constants.TIMER_ALERT ? styles.alert : ""
          } ${
            styles.timerProgress
          } d-flex align-items-center justify-content-center`}
          style={{
            color: "blue",
            width: 60,
            height: (timerProgress * 2) / Constants.CONVERT_MS_AND_S,
          }}
        ></div>
      </div>
    </div>
  );
}

export default Timer;
