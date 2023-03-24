import styles from "./LoadingGame.module.scss";
import useStartNewGame from "hooks/useStartNewGame/useStartNewGame";

function LoadingGame() {
  const startNewGame = useStartNewGame();

  return (
    <div
      className={`${styles.loadingGame} d-flex flex-fill flex-column justify-content-center align-items-center`}
    >
      <img src="/flagsHeart.png" alt="flagsHeart" />
      <button onClick={startNewGame} className="btn mb-30 mx-20">
        Nouvelle partie
      </button>
    </div>
  );
}

export default LoadingGame;
