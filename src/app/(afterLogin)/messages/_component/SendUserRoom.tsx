"use client";

import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import style from "./sendUserRoom.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

dayjs.locale("ko");
dayjs.extend(relativeTime);

const SendUserRoom = () => {
  const router = useRouter();
  const userInfo = {
    id: "Foden47",
    name: "Foden",
    img: "https://picsum.photos/49/50",
    Messages: [
      { RoomId: "567", content: "이번시즌 우승했어요!", createAt: new Date() },
      { RoomId: "567", content: "축하해요!", createAt: new Date() },
    ],
  };

  const MoveToMessage = () => {
    router.push(`/messages/${userInfo.Messages.at(-1)?.RoomId}`);
  };

  const MoveToProfile = () => {
    router.push(`/${userInfo.id}`);
  };

  return (
    <div className={style.userMainBox} onClick={MoveToMessage}>
      <Link
        href={`/${userInfo.id}`}
        className={style.userImageBox}
        onClickCapture={MoveToProfile}
      >
        <img src={userInfo.img} className={style.userImage} />
      </Link>
      <div className={style.userInfoBox}>
        <div className={style.messageInfoZone}>
          <div className={style.messageInfo}>
            <div className={style.userInfo}>
              <div className={style.userName}>{userInfo.name}</div>
              <div className={style.userEmail}>@{userInfo.id}</div>
            </div>
            <div className={style.middleDot}> · </div>
            <div className={style.sendDate}>
              {dayjs(userInfo.Messages?.at(-1)?.createAt).fromNow()}
            </div>
          </div>
          <div className={style.messagePreview}>
            <span className={style.messagePrivewText}>
              {userInfo.Messages?.at(-1)?.content}
            </span>
          </div>
        </div>
        <div className={style.messageSettingButton}></div>
      </div>
    </div>
  );
};

export default SendUserRoom;
