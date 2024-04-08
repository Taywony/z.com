import { ReactNode } from "react";
import style from "./layout.module.css";
import Zlogo from "../../../public/zlogo.png";
import Image from "next/image";
import Link from "next/link";
import Home from "../../../public/home.svg";
import Exlpore from "../../../public/explore.svg";
import Notifications from "../../../public/notifications.svg";

export default function AfterLoginLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className={style.container}>
      <div className={style.leftSectionWrapper}>
        <div className={style.menuTabSection}>
          <div className={style.logoBox}>
            <Link href="/home" className={style.logoLink}>
              <Image src={Zlogo} alt="Zlogo" className={style.logoImg} />
            </Link>
          </div>
          <div className={style.menuBox}>
            <Link href="/home" className={style.menuLink}>
              <div className={style.menuLinkBox}>
                <Image src={Home} alt="home" className={style.menuIcon} />
                <p className={style.menuTitle}>Home</p>
              </div>
            </Link>
            <Link href="/explore" className={style.menuLink}>
              <div className={style.menuLinkBox}>
                <Image src={Exlpore} alt="exlpore" className={style.menuIcon} />
                <p className={style.menuTitle}>Explore</p>
              </div>
            </Link>
            <Link href="notifications" className={style.menuLink}>
              <div className={style.menuLinkBox}>
                <Image
                  src={Notifications}
                  alt="noti"
                  className={style.menuIcon}
                />
                <p className={style.menuTitle}>Notifications</p>
              </div>
            </Link>
          </div>
          <div className={style.postBtnBox}>
            <Link href="/post" className={style.postBtn}>
              <p className={style.postBtnText}>Post</p>
            </Link>
          </div>
        </div>
        <div className={style.userTabSection}>
          <button className={style.userBtn}>
            <div className={style.userImgBox}>
              <Image src={Home} alt="userImage" className={style.userImg} />
            </div>
            <div className={style.userInfoBox}>
              <div className={style.userNameBox}>
                <p className={style.userName}>김태원</p>
              </div>
              <div className={style.userEmailBox}>
                <p className={style.userEmail}>@taewon2659</p>
              </div>
            </div>
            <div className={style.userMoreBox}>
              <Image src={Home} alt="more" className={style.userMore} />
            </div>
          </button>
        </div>
      </div>
      <div className={style.rightSectionWrapper}>오른쪽</div>
    </div>
  );
}
