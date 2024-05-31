import Image from "next/image";
import style from "./searchForm.module.css";
import Explore from "../../../../public/explore.svg";

type Props = {
  q?: string;
};

const SearchForm = ({ q }: Props) => {
  return (
    <form className={style.search}>
      <div className={style.serachBox}>
        <div className={style.searchIconBox}>
          <Image src={Explore} alt="search" className={style.searchIcon} />
        </div>
        <input
          type="serach"
          className={style.searchInput}
          placeholder="Search"
        />
      </div>
    </form>
  );
};

export default SearchForm;
