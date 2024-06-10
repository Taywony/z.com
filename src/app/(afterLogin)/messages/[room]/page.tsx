import Link from "next/link";
import style from "./chatRoom.module.css";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.locale("ko");
dayjs.extend(relativeTime);

const ChatRoom = () => {
  const userInfo = {
    id: "Foden47",
    name: "Foden",
    img: "https://picsum.photos/49/50",
    Joined: new Date(),
  };

  const messages = [
    {
      RoomId: "567",
      id: "Foden47",
      content: "이번시즌 우승했어요!",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "축하해요!",
      createAt: new Date(),
    },
  ];

  return (
    <main className={style.main}>
      <div className={style.headerContainer}>
        <div className={style.headerTitleBox}>
          <h2 className={style.headerTitle}>{userInfo.name}</h2>
        </div>
        <div className={style.headerIconBox}>
          <Link
            href={`/messages/${messages.at(-1)?.RoomId}/info`}
            className={style.headerIconLink}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className={style.headerIconSvg}
            >
              <g>
                <path d="M13.5 8.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5zM13 17v-5h-2v5h2zm-1 5.25c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zM20.25 12c0 4.56-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12 7.44 3.75 12 3.75s8.25 3.69 8.25 8.25z"></path>
              </g>
            </svg>
          </Link>
        </div>
      </div>
      <div className={style.articleContainer}>
        <div className={style.messagesBox}>
          <div className={style.userInfoZone}>
            <div className={style.userImage}>
              <img src={userInfo.img} className={style.image} />
            </div>
            <div className={style.userId}>
              <Link href={`/${userInfo.id}`} className={style.nameBox}>
                <span className={style.nameText}>{userInfo.name}</span>
              </Link>
              <div className={style.idBox}>
                <span className={style.idText}>@{userInfo.id}</span>
              </div>
            </div>
            <div className={style.joinDate}>
              <p className={style.joinDateText}>
                Joined {dayjs(userInfo.Joined).fromNow()}
              </p>
            </div>
            <div className={style.followIntersection}>
              <p className={style.followIntersectionText}>
                {`Not followed by anyone you're following`}
              </p>
            </div>
          </div>
          <div className={style.messageZone}>{messages.at(-1)?.content}</div>
        </div>
        <div className={style.newMessageBox}></div>
      </div>
    </main>
  );
};

export default ChatRoom;
