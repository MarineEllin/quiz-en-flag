import { useRecoilValue, useSetRecoilState } from "recoil";
import { languageState, loadingGameState, scoreState } from "recoilState/atom";
import styles from "./Timeout.module.scss";

function Timeout() {
  const score = useRecoilValue(scoreState);
  const setLoadingGame = useSetRecoilState(loadingGameState);
  const language = useRecoilValue(languageState);

  return (
    <div
      className={`${styles.timeoutContainer} d-flex flex-column justify-content-center align-items-center`}
    >
      <div
        className={`${styles.timeoutContent} d-flex flex-column align-items-center justify-content-center mx-20`}
      >
        <span>Time Out !</span>
        <i className="fa-solid fa-face-sad-tear my-20"></i>
        <span>
          {language === "fr" ? "Ne soyez pas triste..." : "Don't be sad..."}
        </span>
        <span>
          {language === "fr" ? "vous avez quand même donné" : "you still have"}
          <span className="peps bold"> {score} </span>
          {language === "fr" ? "bonnes réponses !!!" : "good answers !!!"}
        </span>
      </div>
      <button
        onClick={() => setLoadingGame(true)}
        className="btn btn-reversed my-20"
      >
        {language === "fr" ? "Nouvelle partie" : "New game"}
      </button>
    </div>
  );
}

export default Timeout;
