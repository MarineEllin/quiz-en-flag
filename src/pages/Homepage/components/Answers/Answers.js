import AnimationAnswers from "./AnimationAnswers/AnimationAnswers";
import { useRecoilValue } from "recoil";
import {
  animateAnswersState,
  possibleAnswersState,
  displayRightAnswerState,
  selectedCountryState,
  languageState,
} from "../../../../recoilState/atom";
import { useCheckAnswer } from "../../../../hooks/useCheckAnswer/useCheckAnswer";

function Answers() {
  const checkAnswer = useCheckAnswer();
  const country = useRecoilValue(selectedCountryState);
  const animateAnswers = useRecoilValue(animateAnswersState);
  const displayRightAnswer = useRecoilValue(displayRightAnswerState);
  const language = useRecoilValue(languageState);

  const possibleAnswers = useRecoilValue(possibleAnswersState);

  return (
    <AnimationAnswers in={animateAnswers}>
      <div className="d-flex flex-column">
        <button
          onClick={checkAnswer}
          className={`${
            displayRightAnswer && possibleAnswers[0] === country
              ? "rightAnswer"
              : ""
          } btn mb-20 
        `}
          value={`${
            language === "fr" ? possibleAnswers[0].fr : possibleAnswers[0].en
          }`}
        >
          {language === "fr" ? possibleAnswers[0].fr : possibleAnswers[0].en}
        </button>
        <button
          onClick={checkAnswer}
          className={`${
            displayRightAnswer && possibleAnswers[1] === country
              ? "rightAnswer"
              : ""
          } btn mb-20 flex-fill`}
          value={`${
            language === "fr" ? possibleAnswers[1].fr : possibleAnswers[1].en
          }`}
        >
          {language === "fr" ? possibleAnswers[1].fr : possibleAnswers[1].en}
        </button>
        <button
          onClick={checkAnswer}
          className={`${
            displayRightAnswer && possibleAnswers[2] === country
              ? "rightAnswer"
              : ""
          } btn mb-20 flex-fill`}
          value={`${
            language === "fr" ? possibleAnswers[2].fr : possibleAnswers[2].en
          }`}
        >
          {language === "fr" ? possibleAnswers[2].fr : possibleAnswers[2].en}
        </button>
      </div>
    </AnimationAnswers>
  );
}

export default Answers;
