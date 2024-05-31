"use client";

import { useState } from "react";
import style from "./searchTab.module.css";
import { useSearchParams, useRouter } from "next/navigation";

const SearchTab = () => {
  const [current, setCurrent] = useState("top");

  const router = useRouter();
  const searchParams = useSearchParams();

  const onClickTop = () => {
    setCurrent("top");
    router.replace(`/search?q=${searchParams.get("q")}`);
  };

  const onClickLast = () => {
    setCurrent("las");
    router.replace(`/search?${searchParams.toString()}&f=live`);
  };

  const onClickPeo = () => {
    setCurrent("peo");
  };
  const onClickMed = () => {
    setCurrent("med");
  };
  const onClickList = () => {
    setCurrent("list");
  };

  return (
    <div className={style.tab}>
      <div className={style.tabBox} onClick={onClickTop}>
        <div
          className={
            current === "top" ? style.titleActive : style.titleNonActive
          }
        >
          <span className={style.tabText}>Top</span>

          <div className={style.tabIndicator} hidden={current != "top"}></div>
        </div>
      </div>
      <div className={style.tabBox} onClick={onClickLast}>
        <div
          className={
            current === "las" ? style.titleActive : style.titleNonActive
          }
        >
          <span className={style.tabText}>Lastest</span>
          <div className={style.tabIndicator} hidden={current != "las"}></div>
        </div>
      </div>
      <div className={style.tabBox} onClick={onClickPeo}>
        <div
          className={
            current === "peo" ? style.titleActive : style.titleNonActive
          }
        >
          <span className={style.tabText}>People</span>

          <div className={style.tabIndicator} hidden={current != "peo"}></div>
        </div>
      </div>
      <div className={style.tabBox} onClick={onClickMed}>
        <div
          className={
            current === "med" ? style.titleActive : style.titleNonActive
          }
        >
          <span className={style.tabText}>Media</span>

          <div className={style.tabIndicator} hidden={current != "med"}></div>
        </div>
      </div>
      <div className={style.tabBox} onClick={onClickList}>
        <div
          className={
            current === "list" ? style.titleActive : style.titleNonActive
          }
        >
          <span className={style.tabText}>Lists</span>

          <div className={style.tabIndicator} hidden={current != "list"}></div>
        </div>
      </div>
    </div>
  );
};

export default SearchTab;
