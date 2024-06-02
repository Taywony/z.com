import style from "./post.module.css";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import ActionButtons from "./ActionButtons";
import PostArticle from "./PostArticle";

dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function Post() {
  const target = {
    User: {
      id: "sonny",
      nickname: "H.M.Son",
      image: "/yRsRRjGO.jpg",
    },
    postId: 123456789,
    content: "클론코딩 라이브로 하니 너무 힘들어요 ㅠㅠ",
    createdAt: new Date(),
    Images: [{ imageId: 1, Link: "https://picsum.photos/200" }],
  };

  return (
    <PostArticle post={target}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/${target.User.id}`} className={style.postUserImage}>
            <img src={target.User.image} alt={target.User.nickname} />
            <div className={style.postShade} />
          </Link>
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={`/${target.User.id}`}>
              <span className={style.postUserName}>{target.User.nickname}</span>
              &nbsp;
              <span className={style.postUserId}>@{target.User.id}</span>
              &nbsp; · &nbsp;
            </Link>
            <span className={style.postDate}>
              {dayjs(target.createdAt).fromNow(true)}
            </span>
          </div>
          <div>{target.content}</div>
          <div className={style.postImageSection}>
            {target.Images && target.Images.length > 0 && (
              <Link
                href={`${target.User.id}/status/${target.postId}/photo/${target.Images[0].imageId}`}
              >
                <img src={target.Images[0].Link} />
              </Link>
            )}
          </div>
          <ActionButtons />
        </div>
      </div>
    </PostArticle>
  );
}