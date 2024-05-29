"use client";

import { useState } from "react";
import style from "./tabMenu.module.css";

type TabProps = {
  title: string;
  isActive: boolean;
  handleTab: () => void;
};

const TabMenu = ({ title, isActive, handleTab }: TabProps) => {
  const [tab, setTab] = useState("Posts");

  const handleOnClick = () => {
    setTab(title);
  };

  return (
    <div className={style.homeForyou} onClick={handleOnClick}>
      <div className={isActive ? style.titleActive : style.titleNonActive}>
        {title}
        <div className={style.tabIndicator} hidden={!isActive}></div>
      </div>
    </div>
  );
};

export default TabMenu;
