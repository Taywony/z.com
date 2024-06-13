import { ReactNode } from "react";
import style from "./layout.module.css";
import Zlogo from "../../../public/zlogo.png";
import Image from "next/image";
import Link from "next/link";

import NavMenu from "./_component/NavMenu";
import LogoutButton from "./_component/LogoutButton";
import TrendSection from "./_component/TrendSection";
import SearchSection from "./_component/SearchSection";
import SearchFileter from "./_component/SearchFilter";
import FollowSection from "./_component/FollowSection";

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

export default function AfterLoginLayout({ children, modal }: Props) {
  return (
    <div className={style.container}>
      <div className={style.leftSectionWrapper}>
        <section className={style.leftSection}>
          <div className={style.leftSectionFixed}>
            <div className={style.logoBox}>
              <Link href="/home" className={style.logoLink}>
                <Image src={Zlogo} alt="Zlogo" className={style.logoImg} />
              </Link>
            </div>
            <div className={style.menuBox}>
              <nav>
                <ul>
                  <NavMenu />
                </ul>
                <Link href="/compose/tweet" className={style.postBtn}>
                  <span>Post</span>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <g>
                      <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path>
                    </g>
                  </svg>
                </Link>
              </nav>
            </div>
            <LogoutButton />
          </div>
        </section>
      </div>
      <div className={style.rightSectionWrapper}>
        <div className={style.rightSectionInner}>
          <main className={style.main}>{children}</main>
          <section className={style.rightSection}>
            <SearchFileter />
            <SearchSection />
            <div className={style.trendFollow}>
              <TrendSection />
              <FollowSection />
            </div>
          </section>
        </div>
      </div>
      {modal}
    </div>
  );
}
