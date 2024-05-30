"use client";

import style from "./backButton.module.css";

const BackButton = () => {
  const HandleBackButton = () => {};

  return (
    <div className={style.backBtnBox}>
      <button className={style.backBtn} onClick={HandleBackButton}>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={style.backBtnIcon}
        >
          <g>
            <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path>
          </g>
        </svg>
      </button>
    </div>
  );
};

export default BackButton;
