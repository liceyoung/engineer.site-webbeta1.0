import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./header.module.css";
const Header: NextPage = () => {
  const onFBCareerTextClick = useCallback(() => {
    // Please sync "Home_2 mobile" to the project
  }, []);

  return (
    <div className={styles.headermainHeaderWrapper}>
      <div className={styles.headermainHeader}>
        <div className={styles.h1accessibleHide} />
        <div className={styles.divmainHeaderNav}>
          <div className={styles.h2accessibleHide} />
          <div className={styles.headermainHeader}>
            <div className={styles.mainLogosvg}>
              <img
                className={styles.mainLogosvgIcon}
                alt=""
                src="/main-logosvg.svg"
              />
            </div>
            <div className={styles.toggleMainNavigationMenu}>
              <b className={styles.menu}>Menu</b>
              <img className={styles.frameIcon} alt="" src="/frame.svg" />
            </div>
          </div>
        </div>
        <div className={styles.navsportNavigation}>
          <div className={styles.ulcNavigationSportLinks}>
            <b className={styles.fbCareer} onClick={onFBCareerTextClick}>
              Football Career
            </b>
            <b className={styles.more}>More + </b>
          </div>
          <b className={styles.sportNavigationMenu}>Sport Navigation Menu</b>
        </div>
      </div>
    </div>
  );
};

export default Header;
