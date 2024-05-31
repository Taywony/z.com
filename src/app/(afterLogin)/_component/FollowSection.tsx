"use client";

import { usePathname } from "next/navigation";
import FollowRecommend from "./FollowRecommend";
import ShowMoreButton from "./ShowMoreButton";
import style from "./followSection.module.css";

const FollowSection = () => {
  const pathname = usePathname();

  return (
    // <div
    //   className={
    //     pathname === "/explore" ? style.followSectionFixed : style.followSection
    //   }
    // >
    <div className={style.followSection}>
      <h3 className={style.followSectionTitle}>Who to follow</h3>
      <FollowRecommend />
      <FollowRecommend />
      <FollowRecommend />
      <ShowMoreButton url="/i/connect_poeple" />
    </div>
  );
};

export default FollowSection;
