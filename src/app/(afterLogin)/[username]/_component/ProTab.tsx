"use client";

import { useState } from "react";
import style from "./proTab.module.css";

const ProTab = () => {
  const [tab, setTab] = useState("pos");

  const onClickPos = () => {
    setTab("pos");
  };
  const onClickRep = () => {
    setTab("rep");
  };
  const onClickHig = () => {
    setTab("hig");
  };
  const onClickArt = () => {
    setTab("art");
  };
  const onClickMed = () => {
    setTab("med");
  };
  const onClickLik = () => {
    setTab("lik");
  };

  return (
    <div className={style.tab}>
      <div className={style.tabBox} onClick={onClickPos}>
        <div
          className={tab === "pos" ? style.titleActive : style.titleNonActive}
        >
          Posts
          <div className={style.tabIndicator} hidden={tab != "pos"}></div>
        </div>
      </div>
      <div className={style.tabBox} onClick={onClickRep}>
        <div
          className={tab === "rep" ? style.titleActive : style.titleNonActive}
        >
          Replies
          <div className={style.tabIndicator} hidden={tab != "rep"}></div>
        </div>
      </div>
      <div className={style.tabBox} onClick={onClickHig}>
        <div
          className={tab === "hig" ? style.titleActive : style.titleNonActive}
        >
          Highlights
          <div className={style.tabIndicator} hidden={tab != "hig"}></div>
        </div>
      </div>
      <div className={style.tabBox} onClick={onClickArt}>
        <div
          className={tab === "art" ? style.titleActive : style.titleNonActive}
        >
          Articles
          <div className={style.tabIndicator} hidden={tab != "art"}></div>
        </div>
      </div>
      <div className={style.tabBox} onClick={onClickMed}>
        <div
          className={tab === "med" ? style.titleActive : style.titleNonActive}
        >
          Media
          <div className={style.tabIndicator} hidden={tab != "med"}></div>
        </div>
      </div>
      <div className={style.tabBox} onClick={onClickLik}>
        <div
          className={tab === "lik" ? style.titleActive : style.titleNonActive}
        >
          Likes
          <div className={style.tabIndicator} hidden={tab != "lik"}></div>
        </div>
      </div>
    </div>
  );
};

export default ProTab;
