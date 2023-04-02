import { Constants } from "constants/constants";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  addTimeRightAnswerState,
  animateAnswersState,
  animateFlagsState,
  countriesState,
  displayRightAnswerState,
  scoreState,
  selectedCountryState,
} from "recoilState/atom";

export function useCheckAnswer(e) {
  const country = useRecoilValue(selectedCountryState);
  const [countries, setCountries] = useRecoilState(countriesState);
  const setAnimateFlags = useSetRecoilState(animateFlagsState);
  const setAnimateAnswers = useSetRecoilState(animateAnswersState);
  const [score, setScore] = useRecoilState(scoreState);
  const displayRightAnswer = useSetRecoilState(displayRightAnswerState);
  const setAddTimeRightAnswer = useSetRecoilState(addTimeRightAnswerState);
  function checkAnswer(e) {
    if (e.target.value === country.fr || e.target.value === country.en) {
      e.target.classList.add("rightAnswer");
      e.currentTarget.disabled = true;
      setScore(score + 1);
      setAddTimeRightAnswer(true);
      setTimeout(() => {
        setAnimateFlags(false);
        setAnimateAnswers(false);
        e.target.classList.remove("rightAnswer");
      }, Constants.TIMER_RIGHT_ANSWER);
      setTimeout(() => {
        setCountries([...countries].sort((a, b) => 0.5 - Math.random()));
      }, Constants.TIMER_RIGHT_ANSWER + Constants.ANIMATION_FLAGS_IN_OUT);
      setTimeout(() => {
        setAnimateAnswers(true);
        setAnimateFlags(true);
      }, Constants.TIMER_RIGHT_ANSWER + Constants.ANIMATION_FLAGS_IN_OUT + Constants.TIMEOUT_NEW_FLAG);
    } else {
      e.target.classList.add("wrongAnswer");
      e.currentTarget.disabled = true;
      displayRightAnswer(true);
      setTimeout(() => {
        setAnimateFlags(false);
        setAnimateAnswers(false);
        e.target.classList.remove("wrongAnswer");
        displayRightAnswer(false);
      }, Constants.TIMER_WRONG_ANSWER);
      setTimeout(() => {
        setCountries([...countries].sort((a, b) => 0.5 - Math.random()));
      }, Constants.TIMER_WRONG_ANSWER + Constants.ANIMATION_FLAGS_IN_OUT);
      setTimeout(() => {
        setAnimateAnswers(true);
        setAnimateFlags(true);
      }, Constants.TIMER_WRONG_ANSWER + Constants.ANIMATION_FLAGS_IN_OUT + Constants.TIMEOUT_NEW_FLAG);
    }
  }

  return checkAnswer;
}
