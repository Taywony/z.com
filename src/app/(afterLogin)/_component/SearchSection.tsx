"use client";

import style from "./searchSection.module.css";
import { usePathname } from "next/navigation";
import SearchForm from "./SearchForm";

export default function SearchSection() {
  const pathname = usePathname();

  if (pathname === "/explore" || "/search") return null;
  return (
    <>
      <div className={style.searchSection}>
        <SearchForm />
      </div>
      <div className={style.gapBox}></div>
    </>
  );
}
