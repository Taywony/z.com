import Link from "next/link";
import style from "./trend.module.css";

export default function Trend() {
  return (
    <Link href={`/search?q=트렌드`} className={style.container}>
      <div className={style.count}>Trending in South Korea</div>
      <div className={style.title}>하이브</div>
      <div className={style.count}>194k posts</div>
    </Link>
  );
}
