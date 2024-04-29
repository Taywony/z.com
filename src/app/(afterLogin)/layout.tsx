import { ReactNode } from "react";
import style from "./layout.module.css";
import Zlogo from "../../../public/zlogo.png";
import Image from "next/image";
import Link from "next/link";

import Exlpore from "../../../public/explore.svg";
import NavMenu from "./_component/NavMenu";
import LogoutButton from "./_component/LogoutButton";

export default function AfterLoginLayout({
  children,
}: {
  children: ReactNode;
}) {
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
                  Post
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
            <form className={style.search}>
              <div className={style.serachBox}>
                <div className={style.searchIconBox}>
                  <Image
                    src={Exlpore}
                    alt="search"
                    className={style.searchIcon}
                  />
                </div>
                <input
                  type="serach"
                  className={style.searchInput}
                  placeholder="Search"
                />
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
