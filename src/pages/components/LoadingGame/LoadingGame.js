import styles from "./LoadingGame.module.scss";
import useStartNewGame from "hooks/useStartNewGame/useStartNewGame";

function LoadingGame() {
  const startNewGame = useStartNewGame();

  return (
    <div
      className={`${styles.loadingGame} d-flex flex-fill flex-column justify-content-center align-items-center my-20`}
    >
      <div className={`${styles.heartContainer} my-20`}>
        <img src="/flagsHeart.png" alt="flagsHeart" />
      </div>
      <button onClick={startNewGame} className="btn mb-20 mx-20">
        Nouvelle partie
      </button>
    </div>
  );
}

export default LoadingGame;
