import { Constants } from "constants/constants";
import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./AnimationFlags.module.scss";

function AnimationFlags({ in: inProp, children }) {
  const ref = useRef(null);

  return (
    <CSSTransition
      in={inProp}
      nodeRef={ref}
      appear
      timeout={Constants.ANIMATION_FLAGS_IN_OUT}
      classNames={styles}
      unmountOnExit
    >
      <div ref={ref}>{children}</div>
    </CSSTransition>
  );
}

export default AnimationFlags;
