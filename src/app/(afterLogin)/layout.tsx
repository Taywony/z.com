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
        <Link href="/home" className={style.leftSectionLogoBox}>
          <Image src={Zlogo} alt="Zlogo" className={style.leftSectionLogo} />
        </Link>
        <Link href="/home" className={style.leftMenuBox}>
          <div className={style.leftMenu}>
            <Image src={Home} alt="home" className={style.leftMenuIcon} />
            <div className={style.leftMenuTitle}>Home</div>
          </div>
        </Link>
        <Link href="/explore" className={style.leftMenuBox}>
          <div className={style.leftMenu}>
            <Image src={Exlpore} alt="exlpore" className={style.leftMenuIcon} />
            <div className={style.leftMenuTitle}>Explore</div>
          </div>
        </Link>
        <Link href="notifications" className={style.leftMenuBox}>
          <div className={style.leftMenu}>
            <Image
              src={Notifications}
              alt="noti"
              className={style.leftMenuIcon}
            />
            <div className={style.leftMenuTitle}>Notifications</div>
          </div>
        </Link>
      </div>
      <div className={style.rightSectionWrapper}>오른쪽</div>
    </div>
  );
}
