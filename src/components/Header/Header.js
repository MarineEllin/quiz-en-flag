import styles from "./Header.module.scss";
import { useSetRecoilState } from "recoil";
import { loadingGameState } from "../../recoilState/atom";

function Header() {
  const setLoadingGame = useSetRecoilState(loadingGameState);
  return (
    <div
      className={`${styles.headerContainer} d-flex flex-column align-items-center py-20`}
    >
      <img className={`${styles.logo} mb-10`} src="/logo.jpeg" alt="logo" />
      <i
        className={`${styles.power} fa-solid fa-power-off`}
        onClick={() => setLoadingGame(true)}
      ></i>
    </div>
  );
}

export default Header;
