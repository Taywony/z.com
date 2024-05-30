"use client";

import { useState } from "react";
import style from "./exlTab.module.css";

const ExlTab = () => {
  const [tab, setTab] = useState("fol");

  const onClickFol = () => {
    setTab("fol");
  };
  const onClickTrd = () => {
    setTab("trd");
  };
  const onClickNew = () => {
    setTab("new");
  };
  const onClickSpo = () => {
    setTab("spo");
  };
  const onClickEnt = () => {
    setTab("ent");
  };

  return (
    <div className={style.tab}>
      <div className={style.tabBox} onClick={onClickFol}>
        <div
          className={tab === "fol" ? style.titleActive : style.titleNonActive}
        >
          For you
          <div className={style.tabIndicator} hidden={tab != "fol"}></div>
        </div>
      </div>
      <div className={style.tabBox} onClick={onClickTrd}>
        <div
          className={tab === "trd" ? style.titleActive : style.titleNonActive}
        >
          Trending
          <div className={style.tabIndicator} hidden={tab != "trd"}></div>
        </div>
      </div>
      <div className={style.tabBox} onClick={onClickNew}>
        <div
          className={tab === "new" ? style.titleActive : style.titleNonActive}
        >
          News
          <div className={style.tabIndicator} hidden={tab != "new"}></div>
        </div>
      </div>
      <div className={style.tabBox} onClick={onClickSpo}>
        <div
          className={tab === "spo" ? style.titleActive : style.titleNonActive}
        >
          Sports
          <div className={style.tabIndicator} hidden={tab != "spo"}></div>
        </div>
      </div>
      <div className={style.tabBox} onClick={onClickEnt}>
        <div
          className={tab === "ent" ? style.titleActive : style.titleNonActive}
        >
          Entrtainment
          <div className={style.tabIndicator} hidden={tab != "ent"}></div>
        </div>
      </div>
    </div>
  );
};

export default ExlTab;
