import NewMessageButton from "./_component/NewMessageButton";
import SendUserRoom from "./_component/SendUserRoom";
import SettingButton from "./_component/SettingButton";
import style from "./message.module.css";

const Message = () => {
  const SendUser = [
    {
      messageId: "12345",
      img: "https://picsum.photos/49/50",
      name: "Foden",
      id: "Foden47",
      createAt: new Date(),
      message: "이번시즌 우승했어요!",
    },
    {
      messageId: "112",
      img: "https://picsum.photos/50/50",
      name: "KDB",
      id: "deokbae",
      createAt: new Date(),
      message: "어시 많이 할게요",
    },
    {
      messageId: "346",
      img: "https://picsum.photos/51/50",
      name: "Rody",
      id: "Rodrigo",
      createAt: new Date(),
      message: "내가 나오면 무패",
    },
    {
      messageId: "0098",
      img: "https://picsum.photos/52/50",
      name: "Haaland",
      id: "Haaland9",
      createAt: new Date(),
      message: "골든 부츠를 받았어요!",
    },
  ];

  return (
    <div className={style.container}>
      <div className={style.viewBox}>
        {/* 왼쪽 섹션 */}
        <section className={style.navigationSection}>
          <div className={style.navigationBox}>
            {/* 헤더부분 */}
            <div className={style.naviHeader}>
              <div className={style.naviHeaderBox}>
                {/* 네비 헤더 타이틀 */}
                <div className={style.naviHeaderTitleZone}>
                  <h2 className={style.naviHeaderTitle}>Messages</h2>
                </div>
                {/* 네비 헤더 아이콘 */}
                <div className={style.naviHeaderIconZone}>
                  <SettingButton />
                  <NewMessageButton />
                </div>
              </div>
            </div>
            {/* 유저 네비게이터부분 */}
            <div className={style.naviMain}>
              <SendUserRoom />
              <SendUserRoom />
              <SendUserRoom />
              <SendUserRoom />
              <SendUserRoom />
              <SendUserRoom />
              <SendUserRoom />
              <SendUserRoom />
              <SendUserRoom />
              <SendUserRoom />
              <SendUserRoom />
              <SendUserRoom />
              <SendUserRoom />
              <SendUserRoom />
              <SendUserRoom />
              <SendUserRoom />
              <SendUserRoom />
              <SendUserRoom />
              <SendUserRoom />
              <SendUserRoom />
              <SendUserRoom />
              <SendUserRoom />
              <SendUserRoom />
              <SendUserRoom />
              <SendUserRoom />
              <SendUserRoom />
              <SendUserRoom />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Message;
