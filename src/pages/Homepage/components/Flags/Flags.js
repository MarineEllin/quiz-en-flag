import AnimationFlags from "./AnimationFlags/AnimationFlags";
import { useRecoilValue } from "recoil";
import { animateFlagsState, selectedCountry } from "recoilState/atom";
import styles from "./Flags.module.scss";

function Flags() {
  const animateFlags = useRecoilValue(animateFlagsState);
  const country = useRecoilValue(selectedCountry);

  return (
    <AnimationFlags in={animateFlags}>
      <div className={`${styles.flagsContainer} my-20`}>
        <img
          src={"/flags/" + country[0] + ".png"}
          alt="flag"
          className={styles.flags}
        />
      </div>
    </AnimationFlags>
  );
}

export default Flags;
