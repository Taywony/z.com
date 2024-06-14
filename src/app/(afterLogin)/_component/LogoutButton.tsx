"use client";

import Image from "next/image";
import style from "./logoutButton.module.css";
import Home from "../../../../public/home.svg";
import Profile from "../../../../public/tay.png";

export default function LogoutButton() {
  const me = {
    id: "taewon2659",
    image: Profile,
    nickname: "taywony",
  };

  const onLogout = () => {
    console.log("logout");
  };

  return (
    <div className={style.userTabSection}>
      <button className={style.userBtn} onClick={onLogout}>
        <div className={style.userImgBox}>
          <Image src={me.image} alt={me.id} className={style.userImg} />
        </div>
        <div className={style.userInfoBox}>
          <div className={style.userNameBox}>
            <p className={style.userName}>{me.nickname}</p>
          </div>
          <div className={style.userEmailBox}>
            <p className={style.userEmail}>{me.id}</p>
          </div>
        </div>
        <div className={style.userMoreBox}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <g>
              <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
            </g>
          </svg>
        </div>
      </button>
    </div>
  );
}
