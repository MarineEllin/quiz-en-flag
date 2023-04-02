import {
  addTimeRightAnswerState,
  animateAnswersState,
  animateFlagsState,
  countriesState,
  loadingGameState,
  scoreState,
  timeoutState,
  timerProgressState,
} from "recoilState/atom";
import { countries } from "../../assets/datas/countries";
import { useSetRecoilState } from "recoil";
import { Constants } from "constants/constants";

function useStartNewGame() {
  const setScore = useSetRecoilState(scoreState);
  const setLoadingGame = useSetRecoilState(loadingGameState);
  const setAnimateFlags = useSetRecoilState(animateFlagsState);
  const setAnimateAnswers = useSetRecoilState(animateAnswersState);
  const setTimeOutState = useSetRecoilState(timeoutState);
  const setCountriesList = useSetRecoilState(countriesState);
  const setTimer = useSetRecoilState(timerProgressState);
  const setAddTimeRightAnswer = useSetRecoilState(addTimeRightAnswerState);

  function startNewGame() {
    setScore(0);
    setLoadingGame(false);
    setAnimateFlags(false);
    setAnimateAnswers(false);
    setCountriesList([...countries].sort((a, b) => 0.5 - Math.random()));
    setTimeOutState(false);
    setAddTimeRightAnswer(false);
    setTimer(Constants.TIMER_GAME_IN_MS);
    setTimeout(() => {
      setTimeOutState(false);
      setAnimateFlags(true);
      setAnimateAnswers(true);
    }, Constants.TIMER_NEW_GAME);
  }

  return startNewGame;
}

export default useStartNewGame;
