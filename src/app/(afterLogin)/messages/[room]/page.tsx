"use client";

import Link from "next/link";
import style from "./chatRoom.module.css";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import "dayjs/locale/en";
import relativeTime from "dayjs/plugin/relativeTime";
import { useRouter } from "next/navigation";

dayjs.locale("en");
dayjs.extend(relativeTime);

const ChatRoom = () => {
  const router = useRouter();

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
      content: "축하해!",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "Foden47",
      content: "응원해줘서 고마워요. 다음주에 맛있는거 살게요!",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
    {
      RoomId: "567",
      id: "taewon2659",
      content: "오 좋아! 다음주에 보자",
      createAt: new Date(),
    },
  ];

  const MoveToProfile = () => {
    router.push(`/${userInfo.id}`);
  };

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
          <div className={style.userInfoZone} onClick={MoveToProfile}>
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
                Joined {dayjs(userInfo.Joined).format("MMMM YYYY")}
              </p>
            </div>
            <div className={style.followIntersection}>
              <p className={style.followIntersectionText}>
                {`Not followed by anyone you're following`}
              </p>
            </div>
          </div>
          <div className={style.messageZone}>
            {messages.map((m) => {
              return m.id === "taewon2659" ? (
                <div className={style.myMessage}>
                  <div className={style.content}>{m.content}</div>
                  <div className={style.date}>
                    {dayjs(m.createAt).format("MMM DD h:mm A")}
                  </div>
                </div>
              ) : (
                <div className={style.yourMessage}>
                  <div className={style.content}>{m.content}</div>
                  <div className={style.date}>
                    {dayjs(m.createAt).format("MMM DD h:mm A")}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={style.newMessageBox}></div>
      </div>
    </main>
  );
};

export default ChatRoom;
