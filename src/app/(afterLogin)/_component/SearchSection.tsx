"use client";

import Image from "next/image";
import style from "./searchSection.module.css";
import Exlpore from "../../../../public/explore.svg";
import { usePathname } from "next/navigation";

export default function SearchSection() {
  const pathname = usePathname();

  if (pathname === "/explore") return null;
  return (
    <div className={style.searchSection}>
      <form className={style.search}>
        <div className={style.serachBox}>
          <div className={style.searchIconBox}>
            <Image src={Exlpore} alt="search" className={style.searchIcon} />
          </div>
          <input
            type="serach"
            className={style.searchInput}
            placeholder="Search"
          />
        </div>
      </form>
    </div>
  );
}
