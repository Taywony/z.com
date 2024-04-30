"use client";

import { useState } from "react";
import style from "./tab.module.css";

const Tab = () => {
  const [tab, setTab] = useState("rec");

  const onClickRec = () => {
    setTab("rec");
  };
  const onClickFol = () => {
    setTab("fol");
  };

  return (
    <div className={style.homeFixed}>
      <div className={style.homeTab}>
        <div className={style.homeForyou} onClick={onClickRec}>
          <div
            className={tab === "rec" ? style.titleActive : style.titleNonActive}
          >
            For you
            <div className={style.tabIndicator} hidden={tab === "fol"}></div>
          </div>
        </div>
        <div className={style.homeFollow} onClick={onClickFol}>
          <div
            className={tab === "fol" ? style.titleActive : style.titleNonActive}
          >
            Following
            <div className={style.tabIndicator} hidden={tab === "rec"}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tab;
