import styles from "./LoadingGame.module.scss";
import useStartNewGame from "hooks/useStartNewGame/useStartNewGame";
import { languageState } from "recoilState/atom";
import { useSetRecoilState } from "recoil";

function LoadingGame() {
  const startNewGame = useStartNewGame();
  const setLanguage = useSetRecoilState(languageState);

  function startNewGameFr() {
    startNewGame();
    setLanguage("fr");
  }

  function startNewGameEn() {
    startNewGame();
    setLanguage("en");
  }

  return (
    <div
      className={`${styles.loadingGame} d-flex flex-fill flex-column justify-content-center align-items-center my-20`}
    >
      <div className={`${styles.heartContainer} my-20`}>
        <img src="/flagsHeart.png" alt="flagsHeart" />
      </div>
      <button
        onClick={startNewGameFr}
        className="btn d-flex align-items-center justify-content-center mb-20 mx-20"
      >
        <img
          src="/flags/France.png"
          alt="fr"
          style={{ height: 30 }}
          className="mr-10"
        />
        Nouvelle partie
      </button>
      <button
        onClick={startNewGameEn}
        className="btn d-flex align-items-center justify-content-center mb-20 mx-20"
      >
        <img
          src="/flags/United Kingdom.png"
          alt=""
          style={{ height: 30 }}
          className="mr-10"
        />
        New game
      </button>
    </div>
  );
}

export default LoadingGame;
