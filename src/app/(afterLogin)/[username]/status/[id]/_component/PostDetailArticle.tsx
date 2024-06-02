"use client";

import style from "./postDetailArticle.module.css";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import ActionButtons from "@/app/(afterLogin)/_component/ActionButtons";

dayjs.locale("ko");
dayjs.extend(relativeTime);

const PostDetailArticle = () => {
  const target = {
    User: {
      id: "sonny",
      nickname: "H.M.Son",
      image: "/yRsRRjGO.jpg",
    },
    postId: 123456789,
    content: "토트넘을 탈출하고 싶어요 레알마드리드가서 주전 먹을게요!",
    createdAt: new Date(),
    Images: [{ imageId: 1, Link: "https://picsum.photos/200" }],
  };

  return (
    <article className={style.post}>
      <div className={style.postWrapper}>
        {/* 유저 */}
        <div className={style.postUserSection}>
          {/* 사진,닉네임,아이디 */}
          <div className={style.postUserInfo}>
            <div className={style.userImageZone}>
              <Link href={`/${target.User.id}`} className={style.postUserImage}>
                <img src={target.User.image} alt={target.User.nickname} />
                <div className={style.postShade} />
              </Link>
            </div>
            <div className={style.userIdZone}>
              <Link href={`/${target.User.id}`}>
                <span className={style.postUserName}>
                  {target.User.nickname}
                </span>
              </Link>
              <Link href={`/${target.User.id}`}>
                <span className={style.postUserId}>@{target.User.id}</span>
              </Link>
            </div>
          </div>
          {/* 구독,세팅 */}
          <div className={style.subscribeSettingBox}>
            <div className={style.subscribeBox}>
              <button className={style.subscribeButton}>Subscribe</button>
            </div>
            <div className={style.settingBox}>
              <button className={style.settingButton}>
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className={style.svg}
                >
                  <g>
                    <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          {/* 글 */}
          <div className={style.postBody}>
            <div>{target.content}</div>
            <div className={style.postImageSection}></div>
          </div>
          {/* 날짜 및 뷰 */}
          <div className={style.postDateView}>
            <div className={style.postDateZone}>
              <span className={style.postDate}>
                {dayjs(target.createdAt).fromNow(true)}
              </span>
            </div>
            <div className={style.spaceDot}>·</div>
            <div className={style.viewZone}>
              <span className={style.viewCount}>2.2M</span>
              <p className={style.viewText}>Views</p>
            </div>
          </div>
          {/* 액션버튼 */}
          <div className={style.actionButtonBox}>
            <ActionButtons />
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostDetailArticle;
