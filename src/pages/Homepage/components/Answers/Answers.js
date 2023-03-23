import AnimationAnswers from "./AnimationAnswers/AnimationAnswers";
import { useRecoilValue } from "recoil";
import {
  animateAnswersState,
  selectedCountry,
  possibleAnswersState,
  displayRightAnswerState,
} from "../../../../recoilState/atom";
import { useCheckAnswer } from "../../../../hooks/useCheckAnswer/useCheckAnswer";

function Answers() {
  const checkAnswer = useCheckAnswer();
  const country = useRecoilValue(selectedCountry);
  const animateAnswers = useRecoilValue(animateAnswersState);
  const displayRightAnswer = useRecoilValue(displayRightAnswerState);

  const possibleAnswers = useRecoilValue(possibleAnswersState);

  const button0 = possibleAnswers[0];
  const button1 = possibleAnswers[1];
  const button2 = possibleAnswers[2];

  return (
    <AnimationAnswers in={animateAnswers}>
      <div className="d-flex flex-column mb-20">
        <button
          onClick={checkAnswer}
          className={`${
            displayRightAnswer && button0 === country[1] ? "rightAnswer" : ""
          } btn mb-20 
        `}
          value={button0}
        >
          {button0}
        </button>
        <button
          onClick={checkAnswer}
          className={`${
            displayRightAnswer && button1 === country[1] ? "rightAnswer" : ""
          } btn mb-20 flex-fill`}
          value={button1}
        >
          {button1}
        </button>
        <button
          onClick={checkAnswer}
          className={`${
            displayRightAnswer && button2 === country[1] ? "rightAnswer" : ""
          } btn mb-20 flex-fill`}
          value={button2}
        >
          {button2}
        </button>
      </div>
    </AnimationAnswers>
  );
}

export default Answers;
