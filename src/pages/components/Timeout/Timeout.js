import { useRecoilValue, useSetRecoilState } from "recoil";
import { loadingGameState, scoreState } from "recoilState/atom";
import styles from "./Timeout.module.scss";

function Timeout() {
  const score = useRecoilValue(scoreState);
  const setLoadingGame = useSetRecoilState(loadingGameState);

  return (
    <div
      className={`${styles.timeoutContainer} d-flex flex-column justify-content-center align-items-center`}
    >
      <div
        className={`${styles.timeoutContent} d-flex flex-column align-items-center justify-content-center mx-20`}
      >
        <span>Time Out !</span>
        <i className="fa-solid fa-face-sad-tear my-20"></i>
        <span>Ne soyez pas triste...</span>
        <span>
          vous avez quand même donné
          <span className="peps bold"> {score} </span>
          bonnes réponses !!!
        </span>
      </div>
      <button
        onClick={() => setLoadingGame(true)}
        className="btn btn-reversed my-20"
      >
        Nouvelle partie
      </button>
    </div>
  );
}

export default Timeout;
