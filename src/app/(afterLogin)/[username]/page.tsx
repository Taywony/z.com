"use client";

import Link from "next/link";
import style from "./profile.module.css";
import Image from "next/image";
import Tay from "../../../../public/tay.png";
import TabMenu from "../_component/TabMenu";

const Profile = () => {
  const HandleBackButton = () => {};
  const HandleTab = () => {};

  return (
    <main className={style.main}>
      <div className={style.header}>
        <div className={style.backBtnBox}>
          <button className={style.backBtn} onClick={HandleBackButton}>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className={style.backBtnIcon}
            >
              <g>
                <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path>
              </g>
            </svg>
          </button>
        </div>
        <div className={style.hearderUser}>
          <h3 className={style.headerTitle}>김태원</h3>
          <p className={style.headerPost}>0 posts</p>
        </div>
      </div>
      <div className={style.userContainer}>
        <div className={style.profileSection}>
          <div className={style.headerPhoto}>
            <div className={style.nonePhoto}></div>
            <div className={style.uploadPhoto}></div>
          </div>
          <div className={style.userInfo}>
            <div className={style.profileEditZone}>
              <div className={style.userImageBox}>
                <div className={style.userImageInnerBox}>
                  <Link
                    href="/userid"
                    className={style.userImageLink}
                    style={{ backgroundImage: "dfdf" }}
                  >
                    <Image
                      alt="user-image"
                      src={Tay}
                      className={style.userImage}
                    />
                  </Link>
                </div>
              </div>
              <button className={style.editButton}>
                <Link href="/setting/profile" className={style.editLink}>
                  <span className={style.editText}>Edit profile</span>
                </Link>
              </button>
            </div>
            <div className={style.userNameZone}>
              <div className={style.userNameBox}>
                <p className={style.userName}>김태원</p>
                <p className={style.userId}>@taewon2759</p>
              </div>
            </div>
            <div className={style.singupDateZone}>
              <div className={style.signupDateBox}>
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className={style.calendarIcon}
                >
                  <g>
                    <path d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z"></path>
                  </g>
                </svg>
                <p className={style.sigunupDate}>Joined January 2024</p>
              </div>
            </div>
            <div className={style.follow}>
              <div className={style.followingBox}>
                <Link href="/following" className={style.followLink}>
                  <span className={style.followIndex}>1</span>
                  <span className={style.followText}>Following</span>
                </Link>
              </div>
              <div className={style.follwerBox}>
                <Link href="/verified_followers" className={style.followLink}>
                  <span className={style.followIndex}>0</span>
                  <span className={style.followText}>Followers</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <nav className={style.menuTabSection}>
          <TabMenu title="Posts" isActive={true} handleTab={HandleTab} />
          <TabMenu title="Replies" isActive={false} handleTab={HandleTab} />
          <TabMenu title="Highlights" isActive={true} handleTab={HandleTab} />
          <TabMenu title="Articles" isActive={true} handleTab={HandleTab} />
          <TabMenu title="Media" isActive={true} handleTab={HandleTab} />
          <TabMenu title="Likes" isActive={true} handleTab={HandleTab} />
        </nav>
        <section className={style.tabQuerySection}>탭 내용</section>
      </div>
    </main>
  );
};

export default Profile;
