import NewMessageButton from "./_component/NewMessageButton";
import SettingButton from "./_component/SettingButton";
import style from "./message.module.css";

const Message = () => {
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
            <div className={style.navigator}>{/* 네비게이터 유저들 */}</div>
          </div>
        </section>
        {/* 오른쪽 섹션 */}
        <section className={style.detailSection}>
          <div className={style.detailBox}>
            {/* 디테일 헤더 */}
            <div className={style.detailHeader}>
              <div className={style.detailHeaderBox}>
                <div className={style.detailHeaderIconZone}></div>
                <div className={style.detailHeaderTitleZone}>
                  <h2 className={style.detailHeaderTitle}>Conversation info</h2>
                </div>
              </div>
            </div>
            {/* 디테일 리스트 */}
            <div className={style.detailInfo}>
              <div className={style.detailInfoBox}>{/* 디테일 유저들 */}</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Message;
