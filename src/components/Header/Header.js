import styles from "./Header.module.scss";
import { useSetRecoilState } from "recoil";
import { loadingGameState } from "../../recoilState/atom";

function Header() {
  const setLoadingGame = useSetRecoilState(loadingGameState);
  return (
    <div
      className={`${styles.headerContainer} d-flex flex-column align-items-center py-20`}
    >
      <div className={styles.logoContainer}>
        <img className={styles.logo} src="/logo.jpeg" alt="logo" />
      </div>
      <button onClick={() => setLoadingGame(true)} className="btn">
        Recommencer
      </button>
    </div>
  );
}

export default Header;
