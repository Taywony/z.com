import NewMessageButton from "./_component/NewMessageButton";
import SettingButton from "./_component/SettingButton";
import style from "./message.module.css";

// function MessagesUser () {
//   return (

//   )
// }

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
            <div className={style.naviMain}>
              <div className={style.userMainBox}>
                <div className={style.userImageBox}>
                  <img
                    src="https://picsum.photos/50/50"
                    className={style.userImage}
                  />
                </div>
                <div className={style.user}>
                  <div className={style.user}></div>
                </div>
              </div>
              <div className={style.userMainBox}>
                <div className={style.userImageBox}>
                  <img
                    src="https://picsum.photos/50/50"
                    className={style.userImage}
                  />
                </div>
                <div className={style.userInfoBox}>
                  <div className={style.messageInfoZone}>
                    <div className={style.messageInfo}>
                      <div className={style.userInfo}>
                        <div className={style.userName}>김태원</div>
                        <div className={style.userEmail}>@taewon2659</div>
                      </div>
                      <div className={style.middleDot}> · </div>
                      <div className={style.sendDate}>Jun 9</div>
                    </div>
                    <div className={style.messagePreview}>
                      <span className={style.messagePrivewText}>
                        미리보기 미리보기
                      </span>
                    </div>
                  </div>
                  <div className={style.messageSettingButton}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 오른쪽 섹션 
        <section className={style.detailSection}>
          <div className={style.detailBox}>
            {/* 디테일 헤더 
            <div className={style.detailHeader}>
              <div className={style.detailHeaderBox}>
                <div className={style.detailHeaderIconZone}></div>
                <div className={style.detailHeaderTitleZone}>
                  <h2 className={style.detailHeaderTitle}>Conversation info</h2>
                </div>
              </div>
            </div>
            {/* 디테일 리스트 
            <div className={style.detailInfo}>
              <div className={style.detailInfoBox}>{/* 디테일 유저들 </div>
            </div>
          </div>
        </section>*/}
      </div>
    </div>
  );
};

export default Message;
