import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div
      className={`${styles.footerContainer} d-flex justify-content-center py-20`}
    >
      Copyright © 2023 - Quiz en flag
    </div>
  );
}

export default Footer;
