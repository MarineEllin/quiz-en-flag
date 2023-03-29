import AnimationFlags from "./AnimationFlags/AnimationFlags";
import { useRecoilValue } from "recoil";
import { animateFlagsState, selectedCountryState } from "recoilState/atom";
import styles from "./Flags.module.scss";

function Flags() {
  const animateFlags = useRecoilValue(animateFlagsState);
  const country = useRecoilValue(selectedCountryState);

  return (
    <AnimationFlags in={animateFlags}>
      <div className={`${styles.flagsContainer} my-20`}>
        <img
          src={"/flags/" + country.en + ".png"}
          alt="flag"
          className={styles.flags}
        />
      </div>
    </AnimationFlags>
  );
}

export default Flags;
