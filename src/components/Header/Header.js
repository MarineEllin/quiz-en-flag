import styles from "./Header.module.scss";
import { useSetRecoilState } from "recoil";
import { loadingGameState } from "../../recoilState/atom";

function Header() {
  const setLoadingGame = useSetRecoilState(loadingGameState);
  return (
    <div
      className={`${styles.headerContainer} d-flex flex-column align-items-center py-20`}
    >
      <img className={`${styles.logo} my-20`} src="/logo.jpeg" alt="logo" />
      <button onClick={() => setLoadingGame(true)} className="btn">
        Recommencer
      </button>
    </div>
  );
}

export default Header;
