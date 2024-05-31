import Link from "next/link";
import BackButton from "../_component/BackButton";
import SearchForm from "../_component/SearchForm";
import style from "./search.module.css";
import SearchTab from "./_component/SearchTab";
import Post from "../_component/Post";

type Props = {
  searchParams: { q: string; f?: string; pf?: string; lf?: string };
};

const Search = ({ searchParams }: Props) => {
  return (
    <div className={style.searchMain}>
      <div className={style.topFixed}>
        <div className={style.topSection}>
          <BackButton />
          <SearchForm q={searchParams.q} />
          <div className={style.settingBox}>
            <button className={style.settingButton}>
              <svg viewBox="0 0 24 24" aria-hidden="true" className={style.svg}>
                <g>
                  <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div className={style.menuTabSection}>
          <SearchTab />
        </div>
      </div>
      <div className={style.trendSection}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Search;
