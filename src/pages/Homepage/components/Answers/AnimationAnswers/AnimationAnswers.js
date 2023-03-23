import { Constants } from "constants/constants";
import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./AnimationAnswers.module.scss";

function AnimationAnswers({ in: inProp, children }) {
  const ref = useRef(null);

  return (
    <CSSTransition
      in={inProp}
      nodeRef={ref}
      appear
      timeout={Constants.ANIMATION_ANSWERS_IN_OUT}
      classNames={styles}
      unmountOnExit
    >
      <div ref={ref}>{children}</div>
    </CSSTransition>
  );
}

export default AnimationAnswers;
