import Lostgame from "../components/Timeout/Timeout";
import Answers from "./components/Answers/Answers";
import styles from "./Homepage.module.scss";
import Flags from "./components/Flags/Flags";
import Results from "./components/Results/Results";
import { useRecoilValue } from "recoil";
import { loadingGameState, timeoutState } from "recoilState/atom";
import LoadingGame from "pages/components/LoadingGame/LoadingGame";
import Timeout from "../components/Timeout/Timeout";

function Homepage() {
  const loadingGame = useRecoilValue(loadingGameState);
  const timeout = useRecoilValue(timeoutState);

  return (
    <div
      className={`${styles.homepageContainer} d-flex flex-fill flex-column align-items-center justify-content-center py-20`}
    >
      {loadingGame ? (
        <LoadingGame />
      ) : timeout ? (
        <Timeout />
      ) : (
        <div>
          <Results />
          <div
            className={`${styles.flagAnswersContent} d-flex flex-column justify-content-center align-items-center my-20`}
          >
            <Flags />
            <Answers />
          </div>
        </div>
      )}
    </div>
  );
}

export default Homepage;
