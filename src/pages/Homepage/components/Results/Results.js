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
      className={`${styles.resultsContainer} d-flex space-evenly align-items-center mb-20`}
    >
      <div
        className={`${styles.score} d-flex flex-column justify-content-center align-items-center`}
      >
        {score}
      </div>
      <div
        className={`${styles.timer} d-flex flex-column justify-content-center align-items-center`}
      >
        <Timer />
      </div>
      {addingTime && (
        <div className={styles.addingTimeStar}>
          +{Constants.TIMER_INCREASE_GOOD_ANSWER / Constants.CONVERT_MS_AND_S}s
        </div>
      )}
    </div>
  );
}

export default Results;
