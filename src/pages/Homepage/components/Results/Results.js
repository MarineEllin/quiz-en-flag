import { Constants } from "constants/constants";
import { useRecoilValue } from "recoil";
import { addTimeRightAnswerState, scoreState } from "recoilState/atom";
import Timer from "./components/Timer/Timer";

import styles from "./Results.module.scss";

function Results() {
  const score = useRecoilValue(scoreState);
  const addingTime = useRecoilValue(addTimeRightAnswerState);

  return (
    <div
      className={`${styles.resultsContainer} d-flex flex-column align-items-center mb-20`}
    >
      <div
        className={`${styles.scoreTimerContent} d-flex flex-row space-evenly`}
      >
        <div
          className={`${styles.score} d-flex flex-column justify-content-center align-items-center mb-20`}
        >
          <div>{score}</div>
        </div>
        <div
          className={`${styles.timer} d-flex flex-column justify-content-center align-items-center mb-20`}
        >
          <Timer />
        </div>
        {addingTime && (
          <div className={styles.addingTimeStar}>
            +{Constants.TIMER_INCREASE_GOOD_ANSWER / 1000}s
          </div>
        )}
      </div>
    </div>
  );
}

export default Results;
