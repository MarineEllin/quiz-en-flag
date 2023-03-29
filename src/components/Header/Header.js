import styles from "./Header.module.scss";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { languageState, loadingGameState } from "../../recoilState/atom";

function Header() {
  const setLoadingGame = useSetRecoilState(loadingGameState);
  const language = useRecoilValue(languageState);
  return (
    <div
      className={`${styles.headerContainer} d-flex flex-column align-items-center py-20`}
    >
      <img className={`${styles.logo} my-20`} src="/logo.jpeg" alt="logo" />
      <button onClick={() => setLoadingGame(true)} className="btn-header">
        {language === "fr" ? "Recommencer" : "Restart"}
      </button>
    </div>
  );
}

export default Header;
