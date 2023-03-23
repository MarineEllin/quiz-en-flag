import styles from "./LoadingGame.module.scss";
import useStartNewGame from "hooks/useStartNewGame/useStartNewGame";

function LoadingGame() {
  const startNewGame = useStartNewGame();

  return (
    <div
      className={`${styles.loadingGame} d-flex flex-column align-items-center justify-content-center my-30 mx-20`}
    >
      <div className={`${styles.flagsHeartContainer} mb-30`}>
        <img src="/flagsHeart.png" alt="flagsHeart" />
      </div>
      <button onClick={startNewGame} className="btn mb-30 mx-20">
        Nouvelle partie
      </button>
    </div>
  );
}

export default LoadingGame;
