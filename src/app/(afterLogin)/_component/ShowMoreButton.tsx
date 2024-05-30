"use client";

import Link from "next/link";
import style from "./showMoreButton.module.css";

type Props = {
  url: string;
};

const ShowMoreButton = ({ url }: Props) => {
  return (
    <div className={style.showMoreBtn}>
      <Link href={url} className={style.showMoreLink}>
        <span>Show more</span>
      </Link>
    </div>
  );
};

export default ShowMoreButton;
