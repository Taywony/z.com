"use client";

import Image from "next/image";
import style from "./followRecommed.module.css";
import Tay from "../../../../public/tay.png";

export default function FollowRecommend() {
  const user = {
    id: "H.M.SON",
    nickname: "sonny",
    image: Tay,
  };
  const onFollow = () => {};
  return (
    <div className={style.container}>
      <div className={style.userLogo}>
        <Image src={user.image} alt={user.id} />
      </div>
      <div className={style.userInfo}>
        <div>
          <div className={style.title}>{user.nickname}</div>
          <div className={style.count}>@{user.id}</div>
        </div>
        <div className={style.followButtonSection}>
          <button onClick={onFollow}>Follow</button>
        </div>
      </div>
    </div>
  );
}
