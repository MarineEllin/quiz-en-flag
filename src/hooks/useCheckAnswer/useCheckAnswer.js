import { Constants } from "constants/constants";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  addTimeRightAnswerState,
  animateAnswersState,
  animateFlagsState,
  countriesState,
  displayRightAnswerState,
  scoreState,
  selectedCountry,
} from "recoilState/atom";

export function useCheckAnswer(e) {
  const country = useRecoilValue(selectedCountry);
  const [countries, setCountries] = useRecoilState(countriesState);
  const setAnimateFlags = useSetRecoilState(animateFlagsState);
  const setAnimateAnswers = useSetRecoilState(animateAnswersState);
  const [score, setScore] = useRecoilState(scoreState);
  const rightAnswer = country[1];
  const displayRightAnswer = useSetRecoilState(displayRightAnswerState);
  const setAddTimeRightAnswer = useSetRecoilState(addTimeRightAnswerState);

  function checkAnswer(e) {
    if (e.target.value === rightAnswer) {
      e.target.classList.add("rightAnswer");
      setScore(score + 1);
      setAddTimeRightAnswer(true);
      setTimeout(() => {
        setCountries([...countries].sort((a, b) => 0.5 - Math.random()));
        e.target.classList.remove("rightAnswer");
        setAnimateFlags(false);
        setAnimateAnswers(false);
      }, Constants.TIMER_RIGHT_ANSWER);
      setTimeout(() => {
        setAnimateFlags(true);
        setAnimateAnswers(true);
      }, Constants.TIMEOUT_NEW_FLAG);
    } else {
      e.target.classList.add("wrongAnswer");
      displayRightAnswer(true);
      setTimeout(() => {
        setCountries([...countries].sort((a, b) => 0.5 - Math.random()));
        e.target.classList.remove("wrongAnswer");
        displayRightAnswer(false);
        setAnimateFlags(false);
        setAnimateAnswers(false);
      }, Constants.TIMER_WRONG_ANSWER);
    }
  }

  setAnimateFlags(true);
  setAnimateAnswers(true);

  return checkAnswer;
}
